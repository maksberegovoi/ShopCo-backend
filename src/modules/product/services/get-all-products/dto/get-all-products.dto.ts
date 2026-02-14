import { ProductCardDto } from './product-card.dto'

export interface GetAllProductsDto {
    items: ProductCardDto[]
    total: number
    limit: number
    page: number
}
