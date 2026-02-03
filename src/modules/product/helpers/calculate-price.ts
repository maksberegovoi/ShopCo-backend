export function calculatePrice(basePrice: number, discount: number): number {
    return discount > 0
        ? Math.round(basePrice * (1 - discount / 100))
        : basePrice
}
