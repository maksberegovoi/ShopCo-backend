import { z } from 'zod'

export const queryIdFiltersSchema = (name: string) => {
    return z
        .preprocess(
            (val) =>
                typeof val === 'string'
                    ? val.split(',').map(Number)
                    : undefined,
            z.array(z.number(`Invalid ${name}`))
        )
        .optional()
}

export const queryColorFiltersSchema = () => {
    return z
        .preprocess(
            (val) => (typeof val === 'string' ? val.split(',') : undefined),
            z.array(
                z.string().regex(/^#([0-9A-Fa-f]{6})$/, 'Invalid color hex')
            )
        )
        .optional()
}

export const queryGenderFiltersSchema = () => {
    return z
        .preprocess(
            (val) => (typeof val === 'string' ? val.split(',') : undefined),
            z.array(z.enum(['MALE', 'FEMALE', 'UNISEX'], 'Invalid gender'))
        )
        .optional()
}

export const querySortByFiltersSchema = () => {
    return z
        .enum(
            ['popular', 'rating', 'discount', 'price_asc', 'price_desc'],
            'Invalid sorting type'
        )
        .optional()
}
