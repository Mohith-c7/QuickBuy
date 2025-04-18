import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { products } from "@/lib/products"

export default function TopSellingPage() {
  // Filter products that are featured or have high ratings
  const topSellingProducts = products
    .filter((product) => product.featured || product.rating >= 4.7)
    .sort((a, b) => b.rating - a.rating)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm mb-8">
            <Link href="/" className="text-gray-500 hover:text-black">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/top-selling" className="text-black font-medium">
              Top Selling
            </Link>
          </nav>

          <h1 className="text-3xl font-bold mb-8">TOP SELLING PRODUCTS</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {topSellingProducts.map((product) => (
              <div key={product.id} className="group">
                <Link href={`/product/${product.id}`} className="block bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
                <div className="mt-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-sm font-medium hover:underline">{product.name}</h3>
                  </Link>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : i < product.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                  </div>
                  <div className="mt-1 flex items-center">
                    <span className="font-medium">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through ml-2 text-sm">${product.originalPrice}</span>
                    )}
                    {product.discount && (
                      <span className="ml-2 text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded">
                        -{product.discount}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
