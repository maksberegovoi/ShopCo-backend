import { ProductListItemDto } from './get-all-products/dto/product-list-item.dto'
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

class ProductService {
    /*
     *  TODO: getById(): change visibility on frontend of available color <=> size
     *  TODO: ratingMap: fix Math.random() to float numbers like 3.5, 4.5
     *  TODO: change DB requests to 1 transaction
     * */

    async getAll(): Promise<ProductListItemDto[]> {
        return getAllProducts()
    }

    async getById(id: number): Promise<ProductDetailsDto> {
        return getProductById(id)
    }

    async getReviews(id: number): Promise<ProductReviewDto[]> {
        return getProductReviews(id)
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
}

export default ProductService
