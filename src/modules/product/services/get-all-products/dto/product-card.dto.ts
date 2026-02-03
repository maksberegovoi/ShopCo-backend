export interface ProductCardDto {
    id: number
    name: string
    price: number
    basePrice: number
    discount: number
    rating: number
    avatar: string
    colors: {
        name: string
        hex: string
        isAvailable: boolean
    }[]
}
