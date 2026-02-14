import { Request, Response } from 'express'
import ProductService from '../services/product.service'
import { ApiResponse } from '../../../shared/http/api-response'
import { ProductDetailsDto } from '../services/get-product-by-id/dto/product-details.dto'
import { ProductReviewDto } from '../services/get-product-reviews/dto/product-review.dto'
import { ProductAttributeGroupDto } from '../services/get-product-attributes/dto/product-attribute-group.dto'
import { createProductSchema } from '../services/create-product/schemas/create.schema'
import { idParamSchema } from '../../../shared/http/schemas/params.schema'
import { getProductsParamsSchema } from '../services/get-all-products/schemas/query-filters.schema'
import { GetAllProductsDto } from '../services/get-all-products/dto/get-all-products.dto'
import { FiltersDto } from '../services/get-filters/dto/get-filters.dto'

class ProductController {
    constructor(private readonly productService: ProductService) {}

    getAll = async (
        req: Request,
        res: Response<ApiResponse<GetAllProductsDto>>
    ): Promise<void> => {
        const params = getProductsParamsSchema.parse(req.query)
        const products = await this.productService.getAll(params)

        res.json({ data: products })
    }

    getById = async (
        req: Request<{ id: string }>,
        res: Response<ApiResponse<ProductDetailsDto>>
    ): Promise<void> => {
        const { id } = idParamSchema.parse(req.params)

        const product = await this.productService.getById(id)

        res.json({ data: product })
    }

    getReviews = async (
        req: Request<{ id: string }>,
        res: Response<ApiResponse<ProductReviewDto[]>>
    ): Promise<void> => {
        const { id } = idParamSchema.parse(req.params)

        const reviews = await this.productService.getReviews(id)
        res.json({ data: reviews })
    }

    getAttributes = async (
        req: Request<{ id: string }>,
        res: Response<ApiResponse<ProductAttributeGroupDto[]>>
    ): Promise<void> => {
        const { id } = idParamSchema.parse(req.params)

        const attributes = await this.productService.getAttributes(id)
        res.json({ data: attributes })
    }

    create = async (
        req: Request,
        res: Response<{ id: number }>
    ): Promise<void> => {
        console.log(req.body)
        const product = createProductSchema.parse(req.body)
        const productId = await this.productService.create(product)

        res.status(201).json(productId)
    }

    delete = async (
        req: Request<{ id: string }>,
        res: Response<ApiResponse<null>>
    ): Promise<void> => {
        const { id } = idParamSchema.parse(req.params)

        await this.productService.delete(id)

        res.sendStatus(204)
    }

    getFilters = async (
        req: Request,
        res: Response<ApiResponse<FiltersDto>>
    ): Promise<void> => {
        const filters = await this.productService.filter()

        res.json({ data: filters })
    }
}

export const productController = new ProductController(new ProductService())
