import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import TestimonialCard from "@/components/testimonial-card"
import CategoryCard from "@/components/category-card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { products } from "@/lib/products"
import Image from "next/image"

export default function Home() {
  const newArrivals = products.slice(0, 4)
  const topSelling = products.filter((product) => product.featured).slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-[100px] py-8">
          {/* Hero Section */}
          <section className="bg-gray-100 relative overflow-hidden">
            <div className="container mx-auto px-[100px] py-16 md:py-24 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4">
                  FIND CLOTHES
                  <br />
                  THAT MATCHES
                  <br />
                  YOUR STYLE
                </h1>
                <p className="text-gray-600 mb-8 max-w-md">
                  Browse through our diverse range of meticulously crafted garments, designed to bring out your
                  individuality and cater to your sense of style.
                </p>
                <Button className="bg-black text-white rounded-none px-8 py-6 text-sm font-medium hover:bg-gray-800">
                  Shop Now
                </Button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 relative">
                <Image
                  src="/images/hero.png"
                  alt="Fashion models wearing stylish clothes"
                  width={600}
                  height={600}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute right-0 top-1/4">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0L52.9 27.1L80 40L52.9 52.9L40 80L27.1 52.9L0 40L27.1 27.1L40 0Z" fill="black" />
                </svg>
              </div>
              <div className="absolute left-1/4 bottom-1/4">
                <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M40 0L52.9 27.1L80 40L52.9 52.9L40 80L27.1 52.9L0 40L27.1 27.1L40 0Z" fill="black" />
                </svg>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 border-t border-b">
            <div className="container mx-auto px-[100px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold mb-1">200+</h3>
                  <p className="text-gray-600">International Brands</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-1">2,000+</h3>
                  <p className="text-gray-600">High Quality Products</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-1">30,000+</h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
          </section>

          {/* Brands Section */}
          <section className="bg-black text-white py-6">
            <div className="container mx-auto px-[100px]">
              <div className="flex flex-wrap justify-between items-center">
                <div className="w-1/2 md:w-1/5 px-4 py-2 text-center">
                  <h4 className="text-xl font-serif">VERSACE</h4>
                </div>
                <div className="w-1/2 md:w-1/5 px-4 py-2 text-center">
                  <h4 className="text-xl">ZARA</h4>
                </div>
                <div className="w-1/2 md:w-1/5 px-4 py-2 text-center">
                  <h4 className="text-xl font-serif">GUCCI</h4>
                </div>
                <div className="w-1/2 md:w-1/5 px-4 py-2 text-center">
                  <h4 className="text-xl font-serif">PRADA</h4>
                </div>
                <div className="w-1/2 md:w-1/5 px-4 py-2 text-center">
                  <h4 className="text-xl">Calvin Klein</h4>
                </div>
              </div>
            </div>
          </section>

          {/* New Arrivals Section */}
          <section className="py-16">
            <div className="container mx-auto px-[100px]">
              <h2 className="text-3xl font-bold text-center mb-12">NEW ARRIVALS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {newArrivals.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.images[0]}
                    title={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    discount={product.discount}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/new-arrivals" className="text-sm font-medium">
                  View All
                </Link>
              </div>
            </div>
          </section>

          {/* Top Selling Section */}
          <section className="py-16">
            <div className="container mx-auto px-[100px]">
              <h2 className="text-3xl font-bold text-center mb-12">TOP SELLING</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {topSelling.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.images[0]}
                    title={product.name}
                    price={product.price}
                    originalPrice={product.originalPrice}
                    discount={product.discount}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/top-selling" className="text-sm font-medium">
                  View All
                </Link>
              </div>
            </div>
          </section>

          {/* Browse by Dress Style */}
          <section className="py-16">
            <div className="container mx-auto px-[100px]">
              <h2 className="text-3xl font-bold text-center mb-12">BROWSE BY DRESS STYLE</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CategoryCard image="/images/casuals.png" title="Casual" />
                  <CategoryCard image="/images/formals.png" title="Formal" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CategoryCard image="/images/party.png" title="Party" />
                  <CategoryCard image="/images/gym.png" title="Gym" />
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">OUR HAPPY CUSTOMERS</h2>
              <div className="relative">
                <div className="flex overflow-hidden">
                  <div className="flex space-x-6">
                    <TestimonialCard
                      name="Sarah M."
                      rating={5}
                      text="I love how my order arrived so quickly and in perfect condition. The clothes I received from QuickBuy looked exactly like the pictures, and the quality is amazing! I'll definitely be shopping here again."
                    />
                    <TestimonialCard
                      name="Alex K."
                      rating={5}
                      text="The styles offered by this platform align with my personal style perfectly! I discovered so many unique pieces that I couldn't find elsewhere, making it a go-to for a variety of looks and occasions."
                    />
                    <TestimonialCard
                      name="James L."
                      rating={5}
                      text="The customer service always go the extra mile for their customers! When I had an issue with my unique fashion pieces, they helped to have it resolved in a timely manner that made me want to shop here again."
                    />
                  </div>
                </div>
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
