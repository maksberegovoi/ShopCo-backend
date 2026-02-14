import { Gender, Role } from '@prisma/client'
import { hashSync } from 'bcrypt'

export type Color = (typeof colors)[number]
export type ColorName = (typeof colors)[number]['colorName']

export const users = [
    {
        name: 'User',
        email: 'user@test.com',
        password: hashSync('123', 10),
        cart: { create: {} }
    },
    {
        name: 'Admin',
        email: 'admin@test.com',
        password: hashSync('123', 10),
        role: Role.ADMIN,
        cart: { create: {} }
    }
]

export const categories = [
    {
        name: 'New Arrivals'
    },
    {
        name: 'Top Selling'
    }
]

export const brands = [
    {
        name: 'H&M'
    },
    {
        name: 'Zara'
    },
    {
        name: 'Calvin Klein'
    },
    {
        name: 'Adidas'
    },
    {
        name: 'Nike'
    }
]

export const types = [
    {
        name: 'T-shirt'
    },
    {
        name: 'Jeans'
    },
    {
        name: 'Shorts'
    },
    {
        name: 'Shirt'
    },
    {
        name: 'Hoodie'
    }
]

export const styles = [
    {
        name: 'Casual'
    },
    {
        name: 'Formal'
    },
    {
        name: 'Gym'
    },
    {
        name: 'Party'
    }
]

export const products = [
    {
        name: 'BLACK STRIPED T-SHIRT',
        basePrice: 120,
        discount: 10,
        description:
            'Classic black cotton t-shirt with subtle horizontal stripes. Slim silhouette suitable for everyday casual wear.',
        gender: Gender.MALE,
        style: { connect: { id: 1 } },
        brand: { connect: { id: 2 } },
        type: { connect: { id: 1 } },

        categories: {
            create: [
                { category: { connect: { id: 1 } } },
                { category: { connect: { id: 2 } } }
            ]
        },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845756/black-striped-t-shirt_tzichp.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'CHECKERED FORMAL SHIRT',
        basePrice: 180,
        discount: 15,
        description:
            'Tailored checkered formal shirt crafted from breathable cotton blend. Designed for office and business settings.',
        gender: Gender.MALE,
        style: { connect: { id: 4 } },
        brand: { connect: { id: 3 } },
        type: { connect: { id: 4 } },
        categories: {
            create: [{ category: { connect: { id: 1 } } }]
        },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845769/checkered-formal-shirt_zkq7cz.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'COURAGE GRAPHIC T-SHIRT',
        basePrice: 95,
        discount: 20,
        description:
            'Street-inspired graphic t-shirt featuring bold “Courage” typography print. Soft jersey fabric for all-day comfort.',
        gender: Gender.UNISEX,
        style: { connect: { id: 2 } },
        brand: { connect: { id: 4 } },
        type: { connect: { id: 1 } },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845776/courage-graphic-t-shirt_suaqtj.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'FADED SKINNY JEANS',
        basePrice: 210,
        discount: 0,
        description:
            'Skinny-fit denim jeans with faded wash effect. Stretch fabric ensures flexibility and sharp silhouette.',
        gender: Gender.MALE,
        style: { connect: { id: 1 } },
        brand: { connect: { id: 3 } },
        type: { connect: { id: 2 } },
        categories: {
            create: [{ category: { connect: { id: 1 } } }]
        },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845765/faded-skinny-jeans_vs4uz2.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'GRADIENT GRAPHIC T-SHIRT',
        basePrice: 110,
        discount: 12,
        description:
            'Modern gradient-print t-shirt with artistic color transition design. Lightweight cotton construction.',
        gender: Gender.UNISEX,
        style: { connect: { id: 2 } },
        brand: { connect: { id: 4 } },
        type: { connect: { id: 1 } },
        categories: {
            create: [{ category: { connect: { id: 1 } } }]
        },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845780/gradient-graphic-t-shirt_lhaby9.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'LOOSE FIT BERMUDA SHORTS',
        basePrice: 140,
        discount: 18,
        description:
            'Relaxed-fit bermuda shorts made from breathable cotton twill. Ideal for summer casual outfits.',
        gender: Gender.MALE,
        style: { connect: { id: 1 } },
        brand: { connect: { id: 2 } },
        type: { connect: { id: 3 } },
        categories: {
            create: [{ category: { connect: { id: 1 } } }]
        },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845810/loose-fit-bermuda-shorts_lheofo.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'ONE LIFE GRAPHIC T-SHIRT',
        basePrice: 100,
        discount: 0,
        description:
            'Minimalist graphic t-shirt with “One Life” slogan print. Regular fit and soft-touch fabric.',
        gender: Gender.UNISEX,
        style: { connect: { id: 2 } },
        brand: { connect: { id: 4 } },
        type: { connect: { id: 1 } },
        categories: {
            create: [
                { category: { connect: { id: 1 } } },
                { category: { connect: { id: 2 } } }
            ]
        },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770816561/one-life-graphic-t-shirt_arrnj7.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845886/one-life-graphic-t-shirt-2_wmywfl.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845890/one-life-graphic-t-shirt-3_pcacnu.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'POLO WITH CONTRAST TRIMS',
        basePrice: 160,
        discount: 10,
        description:
            'Smart-casual polo shirt featuring contrast collar and sleeve trims. Structured fit for refined look.',
        gender: Gender.MALE,
        style: { connect: { id: 3 } },
        brand: { connect: { id: 3 } },
        type: { connect: { id: 1 } },
        categories: {
            create: [{ category: { connect: { id: 2 } } }]
        },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845790/polo-with-contrast-trims_sxmuwj.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'POLO WITH TIPPING DETAILS',
        basePrice: 170,
        discount: 0,
        description:
            'Cotton polo shirt with tipping details on collar and cuffs. Balanced between casual and semi-formal wear.',
        gender: Gender.MALE,
        style: { connect: { id: 3 } },
        brand: { connect: { id: 1 } },
        type: { connect: { id: 1 } },
        categories: {
            create: [
                { category: { connect: { id: 2 } } },
                { category: { connect: { id: 1 } } }
            ]
        },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845803/polo-with-tipping-details_pqndpl.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'SKINNY FIT JEANS',
        basePrice: 220,
        discount: 20,
        description:
            'Dark-wash skinny fit jeans with reinforced stitching. Designed for a sharp, modern silhouette.',
        gender: Gender.FEMALE,
        style: { connect: { id: 1 } },
        brand: { connect: { id: 2 } },
        type: { connect: { id: 2 } },
        categories: {
            create: [{ category: { connect: { id: 2 } } }]
        },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845813/skinny-fit-jeans_oy8gz6.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'SLEEVE STRIPED T-SHIRT',
        basePrice: 115,
        discount: 0,
        description:
            'Casual t-shirt with striped sleeve accents. Regular fit and breathable cotton fabric.',
        gender: Gender.MALE,
        style: { connect: { id: 1 } },
        brand: { connect: { id: 2 } },
        type: { connect: { id: 1 } },
        categories: {
            create: [
                { category: { connect: { id: 2 } } },
                { category: { connect: { id: 1 } } }
            ]
        },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845772/sleeve-striped-t-shirt_fpr9zl.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'T-SHIRT WITH TAPE DETAILS',
        basePrice: 130,
        discount: 17,
        description:
            'Urban-style t-shirt with contrast tape details along shoulders. Contemporary streetwear aesthetic.',
        gender: Gender.UNISEX,
        style: { connect: { id: 2 } },
        brand: { connect: { id: 4 } },
        type: { connect: { id: 1 } },

        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845793/t-shirt-with-tape-details_nkevj0.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'VERTICAL STRIPED SHIRT',
        basePrice: 190,
        discount: 12,
        description:
            'Vertical striped button-up shirt with tailored cut. Suitable for business-casual environments.',
        gender: Gender.MALE,
        style: { connect: { id: 4 } },
        brand: { connect: { id: 3 } },
        type: { connect: { id: 4 } },
        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1770845807/vertical-striped-shirt_wqur3u.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: false
                }
            ]
        }
    }
]

export const reviews = [
    {
        rating: 5,
        text: 'Professional and elegant. Worth every penny. Fits like a dream.',
        user: { connect: { id: 1 } }
    },
    {
        rating: 3,
        text: 'Comfortable and looks good, but too expensive.',
        user: { connect: { id: 2 } }
    }
]

export const sizes = [
    {
        name: 'M'
    },
    {
        name: 'S'
    },
    {
        name: 'L'
    },
    {
        name: 'XL'
    },
    {
        name: 'XXL'
    }
]

export const attributeGroups = [
    {
        name: 'Product Information'
    },
    {
        name: 'Material'
    },
    {
        name: 'Fit & Sizing'
    },
    {
        name: 'Care Instruction'
    }
]

export const attributes = [
    {
        name: 'gender',
        groupId: 1
    },
    {
        name: 'season',
        groupId: 1
    },
    {
        name: 'collection',
        groupId: 1
    },
    {
        name: 'type',
        groupId: 1
    },

    {
        name: 'material',
        groupId: 2
    },
    {
        name: 'fabric weight',
        groupId: 2
    },
    {
        name: 'texture',
        groupId: 2
    },
    {
        name: 'stretch',
        groupId: 2
    },

    {
        name: 'fit type',
        groupId: 3
    },
    {
        name: 'length',
        groupId: 3
    },
    {
        name: 'sleeve type',
        groupId: 3
    },
    {
        name: 'neckline',
        groupId: 3
    },

    {
        name: 'washing',
        groupId: 4
    },
    {
        name: 'drying',
        groupId: 4
    },
    {
        name: 'ironing',
        groupId: 4
    },
    {
        name: 'bleaching',
        groupId: 4
    }
]

export const colors = [
    { colorName: 'black', colorHex: '#0A0A0A' },
    { colorName: 'red', colorHex: '#DC2626' },
    { colorName: 'blue', colorHex: '#2563EB' },
    { colorName: 'green', colorHex: '#314F4A' },
    { colorName: 'gray', colorHex: '#6B7280' },
    { colorName: 'white', colorHex: '#FEFEFE' },
    { colorName: 'brown', colorHex: '#4F4631' },
    { colorName: 'pink', colorHex: '#EC4899' },
    { colorName: 'purple', colorHex: '#31344F' },
    { colorName: 'yellow', colorHex: '#EAB308' },
    { colorName: 'beige', colorHex: '#F5F5DC' },
    { colorName: 'orange', colorHex: '#EA580C' },
    { colorName: 'burgundy', colorHex: '#800020' },
    { colorName: 'navy', colorHex: '#000080' },
    { colorName: 'dark-blue', colorHex: '#00008B' },
    { colorName: 'light-blue', colorHex: '#ADD8E6' },
    { colorName: 'olive', colorHex: '#808000' }
] as const

export const colorMap: Record<ColorName, Color> = Object.fromEntries(
    colors.map((c) => [c.colorName, c])
) as Record<ColorName, Color>

export const defaultProductAttributes = {
    gender: 'Unisex',
    season: 'All seasons',
    collection: 'Basic',
    type: 'Clothing',

    material: 'Cotton',
    'fabric weight': 'Medium',
    texture: 'Smooth',
    stretch: 'No',

    'fit type': 'Regular',
    length: 'Standard',
    'sleeve type': 'Short',
    neckline: 'Crew',

    washing: 'Machine wash',
    drying: 'Air dry',
    ironing: 'Low heat',
    bleaching: 'Do not bleach'
}
export const attributeMap = Object.fromEntries(
    attributes.map((attr, index) => [attr.name, index + 1])
)
