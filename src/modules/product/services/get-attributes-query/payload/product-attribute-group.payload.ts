import { Prisma } from '@prisma/client'
export type PrismaProductAttributeGroupPayload = Prisma.AttributeGroupGetPayload<{
    select: {
        name: true
        attributes: {
            select: {
                name: true
                values: {
                    select: {
                        value: true
                    }
                }
            }
        }
    }
}>
