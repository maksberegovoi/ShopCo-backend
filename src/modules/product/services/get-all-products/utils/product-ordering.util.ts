import { getProductsParamsType } from '../schemas/query-filters.schema'
import { Prisma } from '@prisma/client'

export const productOrderingUtil = (params: getProductsParamsType) => {
    const where: Prisma.ProductWhereInput = {
        AND: [
            {
                ...(params.brandIds && {
                    brandId: { in: params.brandIds }
                }),

                ...(params.typeIds && {
                    typeId: { in: params.typeIds }
                }),

                ...(params.styleIds && {
                    styleId: { in: params.styleIds }
                }),

                ...(params.genderIds && {
                    gender: { in: params.genderIds }
                }),

                ...(params.categoryIds && {
                    categories: {
                        some: {
                            categoryId: { in: params.categoryIds }
                        }
                    }
                }),

                ...(params.sizeIds || params.colors
                    ? {
                          variants: {
                              some: {
                                  ...(params.sizeIds && {
                                      sizeId: { in: params.sizeIds }
                                  }),
                                  ...(params.colors && {
                                      colorHex: { in: params.colors }
                                  })
                              }
                          }
                      }
                    : {}),

                ...(params.maxPrice && {
                    price: { lte: params.maxPrice }
                })
            },
            ...(params.search
                ? [
                      {
                          OR: [
                              {
                                  name: {
                                      contains: params.search,
                                      mode: Prisma.QueryMode.insensitive
                                  }
                              },
                              {
                                  description: {
                                      contains: params.search,
                                      mode: Prisma.QueryMode.insensitive
                                  }
                              },
                              {
                                  brand: {
                                      name: {
                                          contains: params.search,
                                          mode: Prisma.QueryMode.insensitive
                                      }
                                  }
                              },
                              {
                                  attributeValues: {
                                      some: {
                                          value: {
                                              contains: params.search,
                                              mode: Prisma.QueryMode.insensitive
                                          }
                                      }
                                  }
                              },
                              {
                                  variants: {
                                      some: {
                                          colorName: {
                                              contains: params.search,
                                              mode: Prisma.QueryMode.insensitive
                                          }
                                      }
                                  }
                              }
                          ]
                      }
                  ]
                : [])
        ]
    }

    return where
}
