import { z } from 'zod'
import { positiveNumber } from '../../../../../shared/http/schemas/primitives/positive-number'

export const previewItemsIdsSchema = z.object({
    items: z.array(
        z.object({
            productVariantId: positiveNumber('product variant id'),
            quantity: positiveNumber('product variant quantity')
        })
    )
})

export type PreviewItemsSchema = z.infer<typeof previewItemsIdsSchema>
