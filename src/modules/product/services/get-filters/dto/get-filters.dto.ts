interface PrimitiveFilter {
    id: number | string
    name: string
}

interface ColorFilter {
    name: string
    hex: string
}

export interface FiltersDto {
    primitives: {
        name: string
        items: PrimitiveFilter[]
    }[]
    colors: ColorFilter[]
    maxPrice: number | null
}
