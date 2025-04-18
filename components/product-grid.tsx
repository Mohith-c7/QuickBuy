"use client"

import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { Product } from "@/lib/products"

interface ProductGridProps {
  products: Product[]
  categoryName: string
}

export default function ProductGrid({ products, categoryName }: ProductGridProps) {
  return (
    <div className="flex-grow">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold">{categoryName}</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <span className="text-sm text-gray-500">
            Showing 1-{products.length} of {products.length} Products
          </span>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-medium mb-2">No products found</h2>
          <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
      )}
    </div>
  )
} 