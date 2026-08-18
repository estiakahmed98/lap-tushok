import productData from './products.json'

export type ProductCategory =
  | 'কাঁথা'
  | 'বেডশিট'
  | 'লেপ'
  | 'তোষক'
  | 'ম্যাট্রেস'
  | 'জাজিম'
  | 'বালিশ'

export type Product = {
  id: string
  slug: string
  name: string
  category: ProductCategory
  shortDescription: string
  fullDescription: string
  price: number
  compareAtPrice?: number
  image: string
  badge?: string
  material: string
  size: string
  colors: string[]
  stock: number
  featured?: boolean
}

export const products = productData as Product[]
export const formatPrice = (price: number) => `৳${new Intl.NumberFormat('bn-BD').format(price)}`
