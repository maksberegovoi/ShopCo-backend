import prisma from '../../../../prisma'
import ApiError from '../../../../shared/http/errors/api-error'

export async function deleteProduct(id: number) {
    const product = await prisma.product.findUnique({
        where: { id },
        select: { id: true }
    })

    if (!product) throw ApiError.notFound('Product does not exist')

    await prisma.product.delete({ where: { id } })
}
