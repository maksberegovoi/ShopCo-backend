import buildColors from './buildColors'

describe('BuildColors', () => {
    it('convert colors from DB to DTO view', () => {
        const colors = [
            { colorName: 'navy', colorHex: '#000080', stock: 0 },
            { colorName: 'navy', colorHex: '#000080', stock: 1 },
            { colorName: 'navy', colorHex: '#0000800', stock: 3 },

            { colorName: 'black', colorHex: '#0A0A0A', stock: 0 },
            { colorName: 'black', colorHex: '#0A0A0A', stock: 0 },
            { colorName: 'black', colorHex: '#0A0A0AA', stock: 1 },

            { colorName: 'white', colorHex: '#FEFEFE', stock: 0 }
        ]

        expect(buildColors(colors)).toEqual([
            { name: 'navy', hex: '#000080', isAvailable: true },
            { name: 'navy', hex: '#0000800', isAvailable: true },
            { name: 'black', hex: '#0A0A0A', isAvailable: false },
            { name: 'black', hex: '#0A0A0AA', isAvailable: true },
            { name: 'white', hex: '#FEFEFE', isAvailable: false }
        ])
    })

    it('returns empty array when no variants provided', () => {
        expect(buildColors([])).toEqual([])
    })

    it('marks color unavailable if all variants have zero stock', () => {
        const colors = [
            { colorName: 'red', colorHex: '#f00', stock: 0 },
            { colorName: 'red', colorHex: '#f00', stock: 0 }
        ]

        expect(buildColors(colors)).toEqual([
            { name: 'red', hex: '#f00', isAvailable: false }
        ])
    })

    it('handles single variant correctly', () => {
        const colors = [{ colorName: 'blue', colorHex: '#00f', stock: 5 }]

        expect(buildColors(colors)).toEqual([
            { name: 'blue', hex: '#00f', isAvailable: true }
        ])
    })
})
