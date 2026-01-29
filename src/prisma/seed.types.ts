import { colors } from './constants'

export type Color = (typeof colors)[number]
export type ColorName = (typeof colors)[number]['colorName']
