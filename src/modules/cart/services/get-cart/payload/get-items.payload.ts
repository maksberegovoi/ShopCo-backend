import { Prisma } from '@prisma/client'

export type PrismaGetItemsPayload = Prisma.CartGetPayload<{
    select: {
        cartItems: {
            select: {
                quantity: true
                productVariant: {
                    select: {
                        colorName: true
                        size: {
                            select: {
                                name: true
                            }
                        }
                        product: {
                            select: {
                                name: true
                                discount: true
                                basePrice: true
                                images: {
                                    where: {
                                        isMain: true
                                    }
                                    take: 1
                                    select: {
                                        url: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}>
