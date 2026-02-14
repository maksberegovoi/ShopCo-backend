export type PrismaCartItemPayload = {
    quantity: number
    id: number
    productVariant: {
        id: number
        colorName: string
        size: { name: string }
        stock: number
        product: {
            id: number
            name: string
            discount: number
            basePrice: number
            price: number
            images: {
                url: string
            }[]
        }
    }
}
