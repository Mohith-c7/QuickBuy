export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviewCount: number
  colors: Color[]
  sizes: Size[]
  images: string[]
  category: string
  featured?: boolean
  date: string
}

export interface Color {
  name: string
  value: string
}

export type Size = "Small" | "Medium" | "Large" | "X-Large"

export const products: Product[] = [
  {
    id: "t-shirt-tape",
    name: "T-shirt with Tape Details",
    description:
      "This premium t-shirt features unique tape details that add a modern touch to a classic design. Made from 100% organic cotton for superior comfort and durability.",
    price: 120,
    rating: 4.5,
    reviewCount: 45,
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Gray", value: "#808080" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/products/image 7.png",
      "/images/products/t-shirt-tape-2.jpg",
      "/images/products/t-shirt-tape-3.jpg"
    ],
    category: "Tops",
    date: "2023-12-01",
  },
  {
    id: "skinny-fit-jeans",
    name: "Skinny Fit Jeans",
    description:
      "These skinny fit jeans offer both style and comfort. The premium denim fabric provides durability while maintaining a sleek, modern silhouette.",
    price: 240,
    originalPrice: 260,
    discount: 8,
    rating: 4.8,
    reviewCount: 320,
    colors: [
      { name: "Blue", value: "#0000FF" },
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#808080" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/products/image 8.png",
      "/images/products/skinny-jeans-2.jpg",
      "/images/products/skinny-jeans-3.jpg"
    ],
    category: "Pants",
    date: "2023-11-15",
  },
  {
    id: "checkered-shirt",
    name: "Checkered Shirt",
    description:
      "A classic checkered shirt that never goes out of style. Made from soft, breathable fabric that ensures comfort throughout the day.",
    price: 180,
    rating: 4.6,
    reviewCount: 85,
    colors: [
      { name: "Red", value: "#FF0000" },
      { name: "Blue", value: "#0000FF" },
      { name: "Green", value: "#008000" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/products/image 9.png",
      "/images/products/checkered-shirt-2.jpg",
      "/images/products/checkered-shirt-3.jpg"
    ],
    category: "Tops",
    date: "2023-10-20",
  },
  {
    id: "striped-t-shirt",
    name: "Sleeve Striped T-shirt",
    description:
      "This striped t-shirt combines casual comfort with a touch of style. The contrasting sleeve stripes add a unique visual element to this everyday essential.",
    price: 130,
    originalPrice: 160,
    discount: 19,
    rating: 4.7,
    reviewCount: 420,
    colors: [
      { name: "Orange", value: "#FFA500" },
      { name: "Black", value: "#000000" },
      { name: "Blue", value: "#0000FF" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/products/image 10.png",
      "/images/products/striped-tshirt-2.jpg",
      "/images/products/striped-tshirt-3.jpg"
    ],
    category: "Tops",
    date: "2023-09-05",
  },
  {
    id: "vertical-striped-shirt",
    name: "Vertical Striped Shirt",
    description:
      "A sophisticated vertical striped shirt that transitions effortlessly from casual to formal settings. The premium fabric ensures both comfort and durability.",
    price: 212,
    originalPrice: 232,
    discount: 9,
    rating: 4.9,
    reviewCount: 120,
    colors: [
      { name: "Green", value: "#008000" },
      { name: "Blue", value: "#0000FF" },
      { name: "White", value: "#FFFFFF" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/products/image 7-1.png",
      "/images/products/vertical-striped-2.jpg",
      "/images/products/vertical-striped-3.jpg"
    ],
    category: "Tops",
    featured: true,
    date: "2023-08-15",
  },
  {
    id: "graphic-t-shirt",
    name: "Courage Graphic T-shirt",
    description:
      "Express yourself with this bold graphic t-shirt. The eye-catching design and premium cotton fabric make this a standout piece in any casual wardrobe.",
    price: 145,
    rating: 4.7,
    reviewCount: 420,
    colors: [
      { name: "Orange", value: "#FFA500" },
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/products/image 8-1.png",
      "/images/products/courage-graphic-2.jpg",
      "/images/products/courage-graphic-3.jpg"
    ],
    category: "Tops",
    featured: true,
    date: "2023-07-20",
  },
  {
    id: "bermuda-shorts",
    name: "Loose Fit Bermuda Shorts",
    description:
      "Stay cool and comfortable with these loose fit bermuda shorts. Perfect for casual outings and warm weather, these shorts combine style with practicality.",
    price: 80,
    rating: 4.3,
    reviewCount: 105,
    colors: [
      { name: "Blue", value: "#0000FF" },
      { name: "Beige", value: "#F5F5DC" },
      { name: "Black", value: "#000000" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/products/image 9-1.png",
      "/images/products/bermuda-shorts-2.jpg",
      "/images/products/bermuda-shorts-3.jpg"
    ],
    category: "Shorts",
    featured: true,
    date: "2023-06-10",
  },
  {
    id: "faded-jeans",
    name: "Faded Skinny Jeans",
    description:
      "These faded skinny jeans offer a vintage look with modern comfort. The premium denim ensures durability while the faded finish adds character.",
    price: 210,
    rating: 4.8,
    reviewCount: 340,
    colors: [
      { name: "Blue", value: "#0000FF" },
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#808080" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/images/products/image 10-1.png",
      "/images/products/faded-jeans-2.jpg",
      "/images/products/faded-jeans-3.jpg"
    ],
    category: "Pants",
    featured: true,
    date: "2023-05-25",
  },
  {
    id: "one-life-graphic-tshirt",
    name: "ONE LIFE GRAPHIC T-SHIRT",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    price: 260,
    originalPrice: 300,
    discount: 40,
    rating: 4.5,
    reviewCount: 456,
    colors: [
      { name: "Olive", value: "#808000" },
      { name: "Teal", value: "#008080" },
      { name: "Navy", value: "#000080" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "T-shirts",
    date: "2023-04-15",
  },
  {
    id: "gradient-graphic-tshirt",
    name: "Gradient Graphic T-shirt",
    description:
      "Make a statement with this vibrant gradient graphic t-shirt. The unique design and premium fabric ensure both style and comfort.",
    price: 145,
    rating: 4.6,
    reviewCount: 350,
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Pink", value: "#FFC0CB" },
    ],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    images: ["/placeholder.svg?height=600&width=600"],
    category: "T-shirts",
    date: "2023-03-10",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, count)
}
