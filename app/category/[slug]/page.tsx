import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { products } from "@/lib/products"
import ProductGrid from "@/components/product-grid"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)

  // Get initial products based on category
  const getCategoryProducts = () => {
    return products.filter((product) => {
      if (slug === "on-sale") {
        return product.discount && product.discount > 0
      }
      // Convert both to lowercase for case-insensitive comparison
      return product.category.toLowerCase() === slug.toLowerCase()
    })
  }

  const categoryProducts = getCategoryProducts()

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
            <Link href={`/category/${slug}`} className="text-black font-medium">
              {categoryName}
            </Link>
          </nav>

          <div className="flex flex-col md:flex-row gap-8">
            <ProductGrid products={categoryProducts} categoryName={categoryName} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
