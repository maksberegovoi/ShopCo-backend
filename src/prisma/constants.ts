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
        name: 'ONE LIFE GRAPHIC T-SHIRT',
        basePrice: 430,
        discount: 0,
        description:
            'Make a bold statement with this One Life graphic t-shirt. Designed with a modern streetwear vibe and premium cotton comfort for everyday wear.',
        gender: Gender.MALE,

        style: { connect: { id: 1 } },
        brand: { connect: { id: 1 } },
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
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-2_voaejn.jpg',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'SKINNY FIT JEANS',
        basePrice: 230,
        discount: 0,
        description:
            'These skinny fit jeans are designed for a modern, sleek look. Made from premium stretch denim, they provide exceptional comfort and flexibility for all-day wear.',
        gender: Gender.FEMALE,

        style: { connect: { id: 2 } },
        brand: { connect: { id: 2 } },
        type: { connect: { id: 1 } },

        categories: {
            create: [{ category: { connect: { id: 1 } } }]
        },

        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-2_voaejn.jpg',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'CHECKERED FORMAL SHIRT',
        basePrice: 155,
        discount: 80,
        description:
            'Elevate your professional wardrobe with this classic checkered shirt. Perfect for office wear or formal occasions, featuring a sharp collar and premium cotton blend.',
        gender: Gender.FEMALE,

        style: { connect: { id: 2 } },
        brand: { connect: { id: 3 } },
        type: { connect: { id: 4 } },

        categories: {
            create: [{ category: { connect: { id: 2 } } }]
        },

        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-2_voaejn.jpg',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'GRADIENT GRAPHIC HOODIE',
        basePrice: 195,
        discount: 0,
        description:
            'Stay cozy and stylish with this premium gradient hoodie. Features a modern graphic design and ultra-soft fleece lining for ultimate comfort during cooler days.',
        gender: Gender.MALE,

        style: { connect: { id: 1 } },
        brand: { connect: { id: 3 } },
        type: { connect: { id: 5 } },

        categories: {
            create: [
                { category: { connect: { id: 1 } } },
                { category: { connect: { id: 2 } } }
            ]
        },

        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-2_voaejn.jpg',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'ATHLETIC GYM SHORTS',
        basePrice: 330,
        discount: 5,
        description:
            'Designed for peak performance, these lightweight gym shorts feature moisture-wicking technology and stretchy fabric for unrestricted movement during intense workouts.',
        gender: Gender.UNISEX,

        style: { connect: { id: 3 } },
        brand: { connect: { id: 4 } },
        type: { connect: { id: 3 } },

        categories: {
            create: [{ category: { connect: { id: 1 } } }]
        },

        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-2_voaejn.jpg',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'FLORAL PARTY DRESS SHIRT',
        basePrice: 110,
        discount: 0,
        description:
            'Make a statement at your next event with this vibrant floral print shirt. Perfect for parties and social gatherings, combining bold style with comfortable wear.',
        gender: Gender.UNISEX,

        style: { connect: { id: 4 } },
        brand: { connect: { id: 2 } },
        type: { connect: { id: 3 } },

        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-2_voaejn.jpg',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'CLASSIC WHITE CASUAL TEE',
        basePrice: 200,
        discount: 5,
        description:
            'A wardrobe essential - this classic white t-shirt features a perfect cut and premium cotton fabric. Simple, versatile, and comfortable for everyday wear.',
        gender: Gender.MALE,

        style: { connect: { id: 1 } },
        brand: { connect: { id: 1 } },
        type: { connect: { id: 1 } },

        categories: {
            create: [{ category: { connect: { id: 2 } } }]
        },

        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-2_voaejn.jpg',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'LOOSE FIT BERMUDA SHORTS',
        basePrice: 110,
        discount: 15,
        description:
            'Comfortable and casual, these Bermuda shorts are perfect for warm weather. Featuring a relaxed fit and breathable cotton blend for all-day comfort.',
        gender: Gender.UNISEX,

        style: { connect: { id: 4 } },
        brand: { connect: { id: 2 } },
        type: { connect: { id: 3 } },

        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-2_voaejn.jpg',
                    isMain: false
                }
            ]
        }
    },
    {
        name: 'SPORTS PERFORMANCE HOODIE',
        basePrice: 230,
        discount: 25,
        description:
            'Engineered for athletes, this performance hoodie combines moisture-wicking technology with thermal insulation. Perfect for pre and post-workout wear.',
        gender: Gender.FEMALE,

        style: { connect: { id: 3 } },
        brand: { connect: { id: 5 } },
        type: { connect: { id: 5 } },

        images: {
            create: [
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-1_arqwdk.png',
                    isMain: true
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-3_ysmx3l.png',
                    isMain: false
                },
                {
                    url: 'https://res.cloudinary.com/dxmxrfqkx/image/upload/v1769654197/coming-soon-2_voaejn.jpg',
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
