"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Star, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter()
  const [productId, setProductId] = useState<string>("")
  const [product, setProduct] = useState<ReturnType<typeof getProductById>>(undefined)

  // Handle params asynchronously
  useEffect(() => {
    params.then(({ id }) => {
      setProductId(id)
      setProduct(getProductById(id))
    })
  }, [params])

  const { addItem } = useCart()

  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.value || "")
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "Medium")
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => router.push("/shop")} className="bg-black text-white">
              Back to Shop
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product)

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      quantity,
      color: selectedColor,
      size: selectedSize,
    })
    router.push("/cart")
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

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
            <Link href="/shop" className="text-gray-500 hover:text-black">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/product/${product.id}`} className="text-black font-medium">
              {product.name}
            </Link>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div>
              <div className="rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images[activeImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  width={444}
                  height={530}
                  className="w-[444px] h-[530px] object-cover"
                />
              </div>

              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`flex-shrink-0 border-2 rounded overflow-hidden ${
                      index === activeImageIndex ? "border-black" : "border-transparent"
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-16 h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : i < product.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">({product.reviewCount})</span>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-2xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through ml-3 text-lg">${product.originalPrice}</span>
                  )}
                  {product.discount && (
                    <span className="ml-3 text-sm bg-red-100 text-red-700 px-2 py-1 rounded">-{product.discount}%</span>
                  )}
                </div>
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Select Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.value}
                      className={`w-8 h-8 rounded-full border ${
                        selectedColor === color.value ? "ring-2 ring-black ring-offset-2" : "ring-1 ring-gray-300"
                      }`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setSelectedColor(color.value)}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Choose Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-md ${
                        selectedSize === size
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-gray-300 hover:border-black"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <div className="flex items-center">
                  <button
                    className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center"
                    onClick={decrementQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <div className="w-12 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                    {quantity}
                  </div>
                  <button
                    className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button className="w-[500px] py-6 bg-black text-white hover:bg-gray-800" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Product Information Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="details">
              <TabsList className="border-b w-full justify-start">
                <TabsTrigger value="details" className="text-lg">
                  Product Details
                </TabsTrigger>
                <TabsTrigger value="reviews" className="text-lg">
                  Rating & Reviews
                </TabsTrigger>
                <TabsTrigger value="faqs" className="text-lg">
                  FAQs
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="py-6">
                <div className="prose max-w-none">
                  <p>{product.description}</p>
                  <p>
                    Our products are crafted with the highest quality materials to ensure durability and comfort. Each
                    item undergoes rigorous quality control to meet our exacting standards.
                  </p>
                  <h3>Features:</h3>
                  <ul>
                    <li>Premium quality fabric</li>
                    <li>Comfortable fit</li>
                    <li>Durable construction</li>
                    <li>Easy care instructions</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="reviews" className="py-6">
                <div className="grid gap-6">
                  <div className="border rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium mr-3">
                        SM
                      </div>
                      <div>
                        <h4 className="font-medium">Samantha M.</h4>
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">August 14, 2023</span>
                        </div>
                      </div>
                    </div>
                    <p>
                      I absolutely love this product! The design is unique and the fabric feels so comfortable. As a
                      fellow shopper, I appreciate the attention to detail. It's become my favorite go-to shirt!
                    </p>
                  </div>

                  <div className="border rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium mr-3">
                        AM
                      </div>
                      <div>
                        <h4 className="font-medium">Alex M.</h4>
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">August 10, 2023</span>
                        </div>
                      </div>
                    </div>
                    <p>
                      This product exceeded my expectations! The colors are vibrant and the print quality is top-notch.
                      Being a UX/UI designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets
                      a thumbs up from me!
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="faqs" className="py-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">What materials are used?</h3>
                    <p className="text-gray-600">
                      Our products are made from high-quality, sustainable materials that ensure both comfort and
                      durability.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">How do I care for this item?</h3>
                    <p className="text-gray-600">
                      We recommend machine washing cold with like colors and tumble dry low for best results.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">What is your return policy?</h3>
                    <p className="text-gray-600">
                      We offer a 30-day return policy for all unworn items in original condition with tags attached.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">YOU MIGHT ALSO LIKE</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  id={relatedProduct.id}
                  image={relatedProduct.images[0]}
                  title={relatedProduct.name}
                  price={relatedProduct.price}
                  originalPrice={relatedProduct.originalPrice}
                  discount={relatedProduct.discount}
                  rating={relatedProduct.rating}
                  reviewCount={relatedProduct.reviewCount}
                />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
