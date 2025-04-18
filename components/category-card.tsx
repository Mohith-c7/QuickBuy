import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  image: string
  title: string
}

export default function CategoryCard({ image, title }: CategoryCardProps) {
  const slug = title.toLowerCase()

  return (
    <Link href={`/category/${slug}`} className="block relative group overflow-hidden bg-gray-100 rounded-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={300}
        className="w-full h-auto object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-xl font-bold bg-white/80 px-6 py-2 rounded">{title}</h3>
      </div>
    </Link>
  )
}
