"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/cart-context"
import { getProductById } from "@/lib/products"

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCart()
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    items.reduce((acc, item) => ({ ...acc, [item.productId]: item.quantity }), {})
  )

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setQuantities((prev) => ({ ...prev, [productId]: newQuantity }))
    updateQuantity(productId, newQuantity)
  }

  const cartItems = items.map((item) => {
    const product = getProductById(item.productId)
    return {
      ...item,
      product,
    }
  })

  const subtotal = cartItems.reduce((sum, item) => {
    if (!item.product) return sum
    return sum + item.product.price * item.quantity
  }, 0)
  const shipping = subtotal > 0 ? 10 : 0
  const total = subtotal + shipping

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-[100px] py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm mb-8">
            <Link href="/" className="text-gray-500 hover:text-black">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/cart" className="text-black font-medium">
              Cart
            </Link>
          </nav>

          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Link href="/shop">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-grow">
                <div className="space-y-6">
                  {cartItems.map((item) => {
                    if (!item.product) return null
                    return (
                      <div key={item.productId} className="flex gap-6 p-4 border rounded-lg">
                        <div className="w-24 h-24 flex-shrink-0">
                          <Image
                            src={item.product.images[0] || "/placeholder.svg"}
                            alt={item.product.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="font-medium">{item.product.name}</h3>
                              <p className="text-sm text-gray-500">Size: {item.size}</p>
                              <p className="text-sm text-gray-500">Color: {item.color}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => handleQuantityChange(item.productId, quantities[item.productId] - 1)}
                                className="px-2 py-1 border rounded"
                              >
                                -
                              </button>
                              <span>{quantities[item.productId]}</span>
                              <button
                                onClick={() => handleQuantityChange(item.productId, quantities[item.productId] + 1)}
                                className="px-2 py-1 border rounded"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">${item.product.price}</span>
                              {item.product.originalPrice && (
                                <span className="text-gray-500 line-through text-sm">
                                  ${item.product.originalPrice}
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => removeItem(item.productId)}
                              className="text-gray-500 hover:text-red-500"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-96 flex-shrink-0">
                <div className="border rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-6">Proceed to Checkout</Button>
                  <Link href="/shop" className="block text-center mt-4 text-sm text-gray-500 hover:text-black">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
