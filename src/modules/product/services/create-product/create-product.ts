import { CreateProductInput } from './schemas/create.schema'
import prisma from '../../../../prisma'
import ApiError from '../../../../shared/http/errors/api-error'

export async function createProduct(data: CreateProductInput): Promise<{ id: number }> {
    const isExisting = await prisma.product.findUnique({
        // TODO: slug
        where: { name: data.name.trim() }
    })

    if (isExisting) throw ApiError.badRequest(`Product ${data.name} have already exist`)

    const product = await prisma.product.create({
        data: {
            name: data.name,
            description: data.description,
            basePrice: data.basePrice,
            discount: data?.discount ?? 0,
            gender: data.gender,

            styleId: data.styleId,
            brandId: data.brandId,
            typeId: data.typeId,

            images: {
                create: data.images.map((img) => ({
                    url: img.url,
                    isMain: img.isMain
                }))
            },
            variants: {
                create: data.variants.map((v) => ({
                    colorName: v.colorName,
                    colorHex: v.colorHex,
                    stock: v.stock,
                    sizeId: v.sizeId
                }))
            },
            attributeValues: {
                create: data.attributeValues.map((v) => ({
                    attributeId: v.attributeId,
                    value: v.value
                }))
            },
            categories: data.categories
                ? {
                      create: data.categories.map((categoryId) => ({
                          categoryId
                      }))
                  }
                : undefined
        },
        select: { id: true }
    })

    return { id: product.id }
}
