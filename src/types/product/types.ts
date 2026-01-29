export type ProductVariant = {
    productId: number
    sizeId: number
    colorName: string
    colorHex: string
    stock: number
}

// export type ProductVariantSeed = Omit<ProductVariant, 'productId'>
