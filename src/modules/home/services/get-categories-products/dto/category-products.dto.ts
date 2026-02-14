import { ProductCardDto } from '../../../../product/services/get-all-products/dto/product-card.dto'

export interface CategoryProductsDto {
    title: string
    categoryId: number
    products: ProductCardDto[]
}
