export type ItemPreviewPayload = {
    id: number
    stock: number
    colorName: string
    size: { name: string }
    product: {
        id: number
        name: string
        price: number
        basePrice: number
        discount: number
        images: { url: string }[]
    }
} & { quantity: number }
