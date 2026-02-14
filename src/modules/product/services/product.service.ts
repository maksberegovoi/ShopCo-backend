import { ProductDetailsDto } from './get-product-by-id/dto/product-details.dto'
import { ProductReviewDto } from './get-product-reviews/dto/product-review.dto'
import { ProductAttributeGroupDto } from './get-product-attributes/dto/product-attribute-group.dto'
import { getAllProducts } from './get-all-products/get-all-products'
import { getProductById } from './get-product-by-id/get-product-by-id'
import { getProductReviews } from './get-product-reviews/get-product-reviews'
import { getProductAttributes } from './get-product-attributes/get-product-attributes'
import { deleteProduct } from './delete-product/delete-product'
import { createProduct } from './create-product/create-product'
import { CreateProductInput } from './create-product/schemas/create.schema'
import { GetAllProductsDto } from './get-all-products/dto/get-all-products.dto'
import { getFiltersQuery } from './get-filters/get-filters.query'
import { FiltersDto } from './get-filters/dto/get-filters.dto'
import { getProductsParamsType } from './get-all-products/schemas/query-filters.schema'

class ProductService {
    /*
     *  TODO: ratingMap: fix Math.random() to float numbers like 3.5, 4.5
     * */

    async getAll(params: getProductsParamsType): Promise<GetAllProductsDto> {
        return getAllProducts(params)
    }

    async getById(id: number): Promise<ProductDetailsDto> {
        return getProductById(id)
    }

    async getReviews(id: number, limit?: number): Promise<ProductReviewDto[]> {
        return getProductReviews(id, limit)
    }
    async getAttributes(id: number): Promise<ProductAttributeGroupDto[]> {
        return getProductAttributes(id)
    }

    async delete(id: number) {
        return deleteProduct(id)
    }

    async create(data: CreateProductInput): Promise<{ id: number }> {
        return createProduct(data)
    }

    async filter(): Promise<FiltersDto> {
        return getFiltersQuery()
    }
}

export default ProductService
