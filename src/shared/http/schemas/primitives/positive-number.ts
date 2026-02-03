import { z } from 'zod'

export const positiveNumber = (name: string) => {
    return z.coerce
        .number(`Invalid ${name}`)
        .int(`Invalid ${name}`)
        .positive(`Invalid ${name}`)
}
