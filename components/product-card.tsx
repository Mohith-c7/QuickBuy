import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

interface ProductCardProps {
  id: string
  image: string
  title: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviewCount: number
}

export default function ProductCard({
  id,
  image,
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviewCount,
}: ProductCardProps) {
  return (
    <div className="group">
      <Link href={`/product/${id}`} className="block bg-gray-100 rounded-lg overflow-hidden">
        <div className="relative aspect-square w-full">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
        </div>
      </Link>
      <div className="mt-4">
        <Link href={`/product/${id}`}>
          <h3 className="text-sm font-medium hover:underline">{title}</h3>
        </Link>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : i < rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
        </div>
        <div className="mt-1 flex items-center">
          <span className="font-medium">${price}</span>
          {originalPrice && <span className="text-gray-500 line-through ml-2 text-sm">${originalPrice}</span>}
          {discount && <span className="ml-2 text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded">-{discount}%</span>}
        </div>
      </div>
    </div>
  )
}
