import { PreviewItemsSchema } from '../services/get-items-preview/schemas/previewItemsIds.schema'

type PreviewItem = PreviewItemsSchema['items'][number]

export const quantityMap = (items: PreviewItem[]) => {
    return new Map(items.map((item) => [item.productVariantId, item.quantity]))
}
