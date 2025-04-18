"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Search, User, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useCart } from "@/contexts/cart-context"
import NavDropdown from "./nav-dropdown"

const shopCategories = [
  { name: "Tops", href: "/category/tops" },
  { name: "Shorts", href: "/category/shorts" },
  { name: "Pants", href: "/category/pants" },
  { name: "On Sale", href: "/category/on-sale" },
  { name: "All Products", href: "/shop" },
]

const newArrivalsCategories = [
  { name: "This Week", href: "/new-arrivals/this-week" },
  { name: "This Month", href: "/new-arrivals/this-month" },
  { name: "View All", href: "/new-arrivals" },
]

const brandsCategories = [
  { name: "Versace", href: "/brands/versace" },
  { name: "Zara", href: "/brands/zara" },
  { name: "Gucci", href: "/brands/gucci" },
  { name: "Prada", href: "/brands/prada" },
  { name: "Calvin Klein", href: "/brands/calvin-klein" },
  { name: "View All", href: "/brands" },
]

export default function Header() {
  const { getItemCount } = useCart()
  const [showBanner, setShowBanner] = useState(true)

  return (
    <>
      {showBanner && (
        <div className="bg-black text-white text-center py-1 text-sm relative">
          <p>
            Sign up and get 20% off on your first order.{" "}
            <Link href="#" className="underline">
              Sign Up Now
            </Link>
          </p>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => setShowBanner(false)}>
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      <header className="border-b py-4">
<<<<<<< HEAD
        <div className="container mx-auto px-[100px] flex items-center justify-between">
=======
        <div className="container mx-auto px-4 md:px-[100px] flex items-center justify-between">
>>>>>>> 65872114baca493f62c29b683cb35eed8ecf1397
          <Link href="/" className="text-2xl font-bold">
            QuickBuy
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <NavDropdown title="Shop" categories={shopCategories} />
            <Link href="/category/on-sale">On Sale</Link>
            <NavDropdown title="New Arrivals" categories={newArrivalsCategories} />
            <NavDropdown title="Brands" categories={brandsCategories} />
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 w-full rounded-full border border-gray-300"
              />
            </div>
            <Link href="/cart" className="relative">
              <ShoppingBag className="h-6 w-6" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
            <Link href="/account">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>
    </>
  )
}
