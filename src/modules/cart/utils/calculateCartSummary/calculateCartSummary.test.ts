import { calculateCartSummary } from './calculateCartSummary'
import { CartItemDto } from '../../services/get-items/dto/cart-item.dto'

jest.mock('../../../../env', () => ({
    env: {
        DELIVERY_FEE: 15
    }
}))

describe('calculateCartSummary', () => {
    it('should calculate summary for single item without discount', () => {
        const items: CartItemDto[] = [
            {
                name: 'T-Shirt',
                size: 'M',
                color: 'Red',
                avatar: 'image.jpg',
                basePrice: 100,
                discount: 0,
                price: 100,
                quantity: 1
            }
        ]

        const result = calculateCartSummary(items)

        expect(result).toEqual({
            subTotal: 100,
            totalDiscount: 0,
            deliveryFee: 15,
            total: 115
        })
    })

    it('should calculate summary for single item with discount', () => {
        const items: CartItemDto[] = [
            {
                name: 'T-Shirt',
                size: 'M',
                color: 'Red',
                avatar: 'image.jpg',
                basePrice: 100,
                discount: 20,
                price: 80,
                quantity: 1
            }
        ]

        const result = calculateCartSummary(items)

        expect(result).toEqual({
            subTotal: 100,
            totalDiscount: 20,
            deliveryFee: 15,
            total: 95
        })
    })

    it('should calculate summary for multiple items with quantity', () => {
        const items: CartItemDto[] = [
            {
                name: 'T-Shirt',
                size: 'M',
                color: 'Red',
                avatar: 'image.jpg',
                basePrice: 50,
                discount: 10,
                price: 45,
                quantity: 2
            },
            {
                name: 'Jeans',
                size: 'L',
                color: 'Blue',
                avatar: 'jeans.jpg',
                basePrice: 80,
                discount: 25,
                price: 60,
                quantity: 1
            }
        ]

        const result = calculateCartSummary(items)

        expect(result).toEqual({
            subTotal: 180,
            totalDiscount: 30,
            deliveryFee: 15,
            total: 165
        })
    })

    it('should calculate summary matching UI example', () => {
        const items: CartItemDto[] = [
            {
                name: 'Product 1',
                size: 'M',
                color: 'Red',
                avatar: 'img.jpg',
                basePrice: 60,
                discount: 10,
                price: 50,
                quantity: 1
            },
            {
                name: 'Product 2',
                size: 'M',
                color: 'Blue',
                avatar: 'img.jpg',
                basePrice: 60,
                discount: 10,
                price: 50,
                quantity: 1
            }
        ]

        const result = calculateCartSummary(items)

        expect(result).toEqual({
            subTotal: 120,
            totalDiscount: 20,
            deliveryFee: 15,
            total: 115
        })
    })

    it('should handle large quantities correctly', () => {
        const items: CartItemDto[] = [
            {
                name: 'Cheap Item',
                size: 'S',
                color: 'Green',
                avatar: 'item.jpg',
                basePrice: 10,
                discount: 0,
                price: 10,
                quantity: 100
            }
        ]

        const result = calculateCartSummary(items)

        expect(result).toEqual({
            subTotal: 1000,
            totalDiscount: 0,
            deliveryFee: 15,
            total: 1015
        })
    })
})
