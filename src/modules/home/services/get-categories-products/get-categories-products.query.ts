import { CategoryProductsDto } from './dto/category-products.dto'
import prisma from '../../../../prisma'
import { mapProductCardDto } from '../../../product/services/get-all-products/mapper/product-card.mapper'

export async function getCategoriesProductsQuery(
    limit: number = 4
): Promise<CategoryProductsDto[]> {
    const productCategoryList = await prisma.productCategory.findMany({
        select: {
            category: {
                select: {
                    id: true,
                    name: true
                }
            },
            product: {
                select: {
                    id: true,
                    name: true,
                    basePrice: true,
                    price: true,
                    discount: true,
                    averageRating: true,
                    images: {
                        where: { isMain: true },
                        select: {
                            url: true
                        }
                    },
                    variants: {
                        select: {
                            colorName: true,
                            colorHex: true,
                            stock: true
                        }
                    }
                }
            }
        }
    })

    const dto: CategoryProductsDto[] = []
    const index: Record<string, number> = {}

    for (const { category, product } of productCategoryList) {
        let i = index[category.name]

        if (i === undefined) {
            i = dto.length
            index[category.name] = i

            dto.push({
                categoryId: category.id,
                title: category.name,
                products: []
            })
        }

        const productCard = mapProductCardDto(product)
        dto[i].products.push(productCard)
    }

    return dto.map(({ title, categoryId, products }) => ({
        title,
        categoryId,
        products: products.slice(0, limit)
    }))
}
