import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

const brands = [
  { name: "Versace", logo: "/placeholder.svg?height=100&width=200", href: "/brands/versace" },
  { name: "Zara", logo: "/placeholder.svg?height=100&width=200", href: "/brands/zara" },
  { name: "Gucci", logo: "/placeholder.svg?height=100&width=200", href: "/brands/gucci" },
  { name: "Prada", logo: "/placeholder.svg?height=100&width=200", href: "/brands/prada" },
  { name: "Calvin Klein", logo: "/placeholder.svg?height=100&width=200", href: "/brands/calvin-klein" },
  { name: "Nike", logo: "/placeholder.svg?height=100&width=200", href: "/brands/nike" },
  { name: "Adidas", logo: "/placeholder.svg?height=100&width=200", href: "/brands/adidas" },
  { name: "H&M", logo: "/placeholder.svg?height=100&width=200", href: "/brands/h-and-m" },
  { name: "Levi's", logo: "/placeholder.svg?height=100&width=200", href: "/brands/levis" },
  { name: "Tommy Hilfiger", logo: "/placeholder.svg?height=100&width=200", href: "/brands/tommy-hilfiger" },
  { name: "Ralph Lauren", logo: "/placeholder.svg?height=100&width=200", href: "/brands/ralph-lauren" },
  { name: "Uniqlo", logo: "/placeholder.svg?height=100&width=200", href: "/brands/uniqlo" },
]

export default function BrandsPage() {
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
            <Link href="/brands" className="text-black font-medium">
              Brands
            </Link>
          </nav>

          <h1 className="text-3xl font-bold mb-8">OUR BRANDS</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={200}
                  height={100}
                  className="mb-4"
                />
                <h3 className="text-lg font-medium">{brand.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
