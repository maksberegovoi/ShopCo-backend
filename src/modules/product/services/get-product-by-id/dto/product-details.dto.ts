export interface ProductDetailsDto {
    id: number
    name: string
    description: string
    price: number
    basePrice: number
    discount: number
    rating: number
    gallery: {
        url: string
        isMain: boolean
    }[]
    variants: {
        colorName: string
        colorHex: string
        size: string
        stock: number
    }[]
}
