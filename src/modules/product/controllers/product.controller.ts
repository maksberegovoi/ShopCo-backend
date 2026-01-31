import { Request, Response } from 'express'
import ProductService from '../services/product.service'
import { ApiResponse } from '../../../shared/http/api-response'

import { ProductListItemDto } from '../services/get-all-query/dto/product-list-item.dto'
import { ProductDetailsDto } from '../services/get-by-id-query/dto/product-details.dto'
import { ProductReviewDto } from '../services/get-reviews/dto/product-review.dto'
import { ProductAttributeGroupDto } from '../services/get-attributes-query/dto/product-attribute-group.dto'
import { productIdSchema } from '../../../shared/http/schemas/id-param.schema'

class ProductController {
    constructor(private readonly productService: ProductService) {}

    getAll = async (
        req: Request,
        res: Response<ApiResponse<ProductListItemDto[]>>
    ): Promise<void> => {
        const products = await this.productService.getAll()

        res.json({ data: products })
    }

    getById = async (
        req: Request<{ id: string }>,
        res: Response<ApiResponse<ProductDetailsDto>>
    ): Promise<void> => {
        const { id } = productIdSchema.parse(req.params)

        const product = await this.productService.getById(id)

        res.json({ data: product })
    }

    getReviews = async (
        req: Request<{ id: string }>,
        res: Response<ApiResponse<ProductReviewDto[]>>
    ): Promise<void> => {
        const { id } = productIdSchema.parse(req.params)

        const reviews = await this.productService.getReviews(id)
        res.json({ data: reviews })
    }

    getAttributes = async (
        req: Request<{ id: string }>,
        res: Response<ApiResponse<ProductAttributeGroupDto[]>>
    ): Promise<void> => {
        const { id } = productIdSchema.parse(req.params)

        const attributes = await this.productService.getAttributes(id)
        res.json({ data: attributes })
    }

    // create = async (req: Request, res: Response<ApiResponse<{ id: number }>>): Promise<void> => {}
    //
    // remove = async (
    //     req: Request<{ id: string }>,
    //     res: Response<ApiResponse<null>>
    // ): Promise<void> => {}
}

export const productController = new ProductController(new ProductService())
