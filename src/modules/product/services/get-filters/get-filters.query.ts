import prisma from '../../../../prisma'
import { FiltersDto } from './dto/get-filters.dto'
import { Gender } from '@prisma/client'

export const getFiltersQuery = async (): Promise<FiltersDto> => {
    const [types, brands, styles, sizes, categories, rawColors, maxPrice] =
        await Promise.all([
            prisma.type.findMany({ select: { name: true, id: true } }),
            prisma.brand.findMany({ select: { name: true, id: true } }),
            prisma.style.findMany({ select: { name: true, id: true } }),
            prisma.size.findMany({ select: { name: true, id: true } }),
            prisma.category.findMany({ select: { name: true, id: true } }),
            prisma.productVariant.groupBy({
                by: ['colorHex', 'colorName']
            }),
            prisma.product.aggregate({
                _max: {
                    basePrice: true
                }
            })
        ])

    const colors = rawColors.map((c) => ({
        hex: c.colorHex,
        name: c.colorName
    }))

    const genders = Object.values(Gender).map((value) => ({
        name: value,
        id: value
    }))

    return {
        primitives: [
            { name: 'size', items: sizes },
            { name: 'brand', items: brands },
            { name: 'category', items: categories },
            { name: 'type', items: types },
            { name: 'style', items: styles },
            { name: 'gender', items: genders }
        ],
        colors: colors,
        maxPrice: maxPrice._max.basePrice
    }
}
