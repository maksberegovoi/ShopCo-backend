import { ApiResponse } from '../../../shared/http/api-response'
import { Request, Response } from 'express'
import { CategoryProductsDto } from '../services/get-categories-products-query/dto/category-products.dto'
import HomeService from '../services/home.service'
import { limitParamSchema } from '../../../shared/http/schemas/params.schema'

class HomeController {
    constructor(private readonly homeService: HomeService) {}

    getCategoriesProducts = async (
        req: Request,
        res: Response<ApiResponse<CategoryProductsDto[]>>
    ) => {
        const { limit } = limitParamSchema.parse(req.query)
        const sections = await this.homeService.getCategoriesProducts(limit)

        res.json({ data: sections })
    }
}

export const homeController = new HomeController(new HomeService())
