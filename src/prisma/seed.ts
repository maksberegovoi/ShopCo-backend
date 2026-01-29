import prisma from '../prisma'
import {
    attributeGroups,
    attributeMap,
    attributes,
    brands,
    categories,
    colorMap,
    defaultProductAttributes,
    products,
    reviews,
    sizes,
    styles,
    types,
    users
} from './constants'
import { Prisma } from '@prisma/client'
import { ColorName } from './seed.types'

function createProductVariantSeed(
    productId: number,
    colorNames: ColorName[],
    stock: number = 5
): Prisma.ProductVariantCreateManyInput[] {
    const productVariants: Prisma.ProductVariantCreateManyInput[] = []

    for (let i = 0; i < sizes.length; i++) {
        const sizeId = i + 1
        for (const colorName of colorNames) {
            const color = colorMap[colorName]

            productVariants.push({
                productId,
                sizeId,
                colorName: color.colorName,
                colorHex: color.colorHex,
                stock
            })
        }
    }

    return productVariants
}

async function up() {
    // Create Users
    for (const user of users) {
        await prisma.user.create({
            data: user
        })
    }

    // Create Categories
    await prisma.category.createMany({ data: categories })

    // Create Types
    await prisma.type.createMany({ data: types })

    // Create Brands
    await prisma.brand.createMany({ data: brands })

    // Create Styles
    await prisma.style.createMany({ data: styles })

    // Create Sizes
    await prisma.size.createMany({ data: sizes })

    // Create AttributeGroups
    await prisma.attributeGroup.createMany({ data: attributeGroups })

    // Create Attributes
    await prisma.attribute.createMany({ data: attributes })

    // Create Products
    for (const product of products) {
        await prisma.product.create({
            data: product
        })
    }

    // Create ProductAttributeValues
    const pavData = []

    for (let i = 0; i < products.length; i++) {
        const productId = i + 1

        for (const [attrName, value] of Object.entries(defaultProductAttributes)) {
            pavData.push({
                productId,
                attributeId: attributeMap[attrName],
                value
            })
        }
    }

    await prisma.productAttributeValue.createMany({
        data: pavData
    })

    // Create Reviews
    for (let i = 0; i < products.length; i++) {
        const productId = i + 1

        for (const review of reviews) {
            await prisma.review.create({
                data: {
                    rating: review.rating,
                    text: review.text,
                    user: review.user,
                    product: { connect: { id: productId } }
                }
            })
        }
    }

    // Create ProductVariants
    await prisma.productVariant.createMany({
        data: createProductVariantSeed(1, ['black', 'white', 'gray', 'beige'])
    })
    await prisma.productVariant.createMany({
        data: createProductVariantSeed(2, ['black', 'white', 'gray'])
    })
    await prisma.productVariant.createMany({
        data: createProductVariantSeed(3, ['navy', 'gray', 'black'])
    })
    await prisma.productVariant.createMany({
        data: createProductVariantSeed(4, ['black', 'white', 'beige'])
    })
    await prisma.productVariant.createMany({
        data: createProductVariantSeed(5, ['light-blue', 'gray'])
    })
    await prisma.productVariant.createMany({
        data: createProductVariantSeed(6, ['blue', 'pink', 'purple'])
    })
    await prisma.productVariant.createMany({
        data: createProductVariantSeed(7, ['navy', 'olive', 'beige'])
    })
    await prisma.productVariant.createMany({
        data: createProductVariantSeed(8, ['black', 'white', 'navy'])
    })
    await prisma.productVariant.createMany({
        data: createProductVariantSeed(9, ['navy', 'white', 'burgundy'])
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Review" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductAttributeValue" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductImage" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductCategory" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Attribute" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "AttributeGroup" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Size" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Type" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Brand" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "Style" RESTART IDENTITY CASCADE`
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
}

async function main() {
    try {
        await down()
        await up()
        console.log()
    } catch (e) {
        console.log(e)
    }
}

main()
    .catch(async (e) => {
        console.log(e)
        process.exit(1)
    })
    .finally(async () => {
        prisma.$disconnect()
    })
