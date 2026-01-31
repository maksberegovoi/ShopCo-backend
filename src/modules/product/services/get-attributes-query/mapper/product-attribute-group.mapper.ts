import { PrismaProductAttributeGroupPayload } from '../payload/product-attribute-group.payload'
import { ProductAttributeGroupDto } from '../dto/product-attribute-group.dto'

export const ProductAttributeGroupMapper = (
    group: PrismaProductAttributeGroupPayload
): ProductAttributeGroupDto => ({
    title: group.name,
    attributes: group.attributes
        .filter((a) => a.values.length > 0)
        .map((a) => ({
            name: a.name,
            value: a.values[0].value
        }))
})
