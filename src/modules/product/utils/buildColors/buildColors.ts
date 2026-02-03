import { ProductCardDto } from '../../services/get-all-products/dto/product-card.dto'

type Variant = {
    colorName: string
    colorHex: string
    stock: number
}

type ColorDto = ProductCardDto['colors'][number]

function buildColors(colors: Variant[]): ColorDto[] {
    const map = new Map<string, ColorDto>()

    for (const color of colors) {
        const existing = map.get(color.colorHex)
        if (!existing) {
            map.set(color.colorHex, {
                name: color.colorName,
                hex: color.colorHex,
                isAvailable: color.stock > 0
            })
        } else if (color.stock > 0) {
            existing.isAvailable = true
        }
    }

    return Array.from(map.values())
}

export default buildColors
