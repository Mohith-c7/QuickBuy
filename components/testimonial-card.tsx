import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  rating: number
  text: string
}

export default function TestimonialCard({ name, rating, text }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border min-w-[300px] max-w-md">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-600 mb-4">{text}</p>
      <div className="flex items-center">
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
          {name.split(" ")[0][0]}
          {name.split(" ")[1][0]}
        </div>
        <div className="ml-3">
          <h4 className="font-medium">{name}</h4>
          <p className="text-xs text-gray-500">Verified Buyer</p>
        </div>
      </div>
    </div>
  )
}
