import { ProductListItemDto } from './get-all-query/dto/product-list-item.dto'
import { ProductDetailsDto } from './get-by-id-query/dto/product-details.dto'
import { ProductReviewDto } from './get-reviews/dto/product-review.dto'
import { ProductAttributeGroupDto } from './get-attributes-query/dto/product-attribute-group.dto'
import { getAllQuery } from './get-all-query/get-all.query'
import { getByIdQuery } from './get-by-id-query/get-by-id.query'
import { getReviewsQuery } from './get-reviews/get-reviews.query'
import { getAttributesQuery } from './get-attributes-query/get-attributes.query'

class ProductService {
    /*
     *  TODO: getById(): change visibility on frontend of available color <=> size
     *  TODO: ratingMap: fix Math.random() to float numbers like 3.5, 4.5
     *  TODO: change DB requests to 1 transaction
     * */

    async getAll(): Promise<ProductListItemDto[]> {
        return getAllQuery()
    }

    async getById(id: number): Promise<ProductDetailsDto> {
        return getByIdQuery(id)
    }

    async getReviews(id: number): Promise<ProductReviewDto[]> {
        return getReviewsQuery(id)
    }

    async getAttributes(id: number): Promise<ProductAttributeGroupDto[]> {
        return getAttributesQuery(id)
    }
}

export default ProductService
