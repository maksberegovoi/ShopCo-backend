import { z } from 'zod'
import { positiveNumber } from '../../../../../shared/http/schemas/primitives/positive-number'
import {
    queryColorFiltersSchema,
    queryGenderFiltersSchema,
    queryIdFiltersSchema,
    querySortByFiltersSchema
} from '../../../../../shared/http/schemas/query-id-filters.schema'

export const getProductsParamsSchema = z.object({
    limit: positiveNumber('Invalid limit').optional(),
    page: positiveNumber('Invalid page').optional(),
    sizeIds: queryIdFiltersSchema('size id'),
    brandIds: queryIdFiltersSchema('brand id'),
    categoryIds: queryIdFiltersSchema('category id'),
    typeIds: queryIdFiltersSchema('type id'),
    styleIds: queryIdFiltersSchema('style id'),
    genderIds: queryGenderFiltersSchema(),
    colors: queryColorFiltersSchema(),
    maxPrice: positiveNumber('Invalid max price').optional(),
    sortBy: querySortByFiltersSchema(),
    search: z.string().min(2).optional()
})

export type getProductsParamsType = z.infer<typeof getProductsParamsSchema>
