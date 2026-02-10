import { getCategoriesProductsQuery } from './get-categories-products/get-categories-products.query'
import { CategoryProductsDto } from './get-categories-products/dto/category-products.dto'

class HomeService {
    async getCategoriesProducts(
        limit?: number
    ): Promise<CategoryProductsDto[]> {
        return getCategoriesProductsQuery(limit)
    }
}

export default HomeService
