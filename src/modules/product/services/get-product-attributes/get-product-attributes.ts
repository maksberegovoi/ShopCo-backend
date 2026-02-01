import prisma from '../../../../prisma'
import { ProductAttributeGroupMapper } from './mapper/product-attribute-group.mapper'

export async function getProductAttributes(productId: number) {
    const attributes = await prisma.attributeGroup.findMany({
        where: {
            attributes: {
                some: {
                    values: {
                        some: {
                            productId: productId
                        }
                    }
                }
            }
        },
        select: {
            name: true,
            attributes: {
                select: {
                    name: true,
                    values: {
                        where: { productId: productId },
                        select: {
                            value: true
                        }
                    }
                }
            }
        }
    })

    return attributes.map(ProductAttributeGroupMapper)
}
