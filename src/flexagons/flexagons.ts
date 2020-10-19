// tslint:disable: no-magic-numbers

export default {
    createTri() {
        const flexagons: Array<[number, number, number, number, number, number]> = []

        for (let i = 0; i < 18; i++) {
            if (i % 2 === 0) {
                flexagons.push([
                    i,
                    (i + 7) % 18, (i + 6) % 18,
                    (i + 13) % 18, (i + 12) % 18, (i + 11) % 18
                ])
            } else {
                flexagons.push([
                    i,
                    (i + 11) % 18, (i + 12) % 18,
                    (i + 5) % 18, (i + 6) % 18, (i + 7) % 18
                ])
            }
        }

        return flexagons
    },

    intersect<T>(arr1: T[], arr2: T[]): T[] {
        const NOT_FOUND = -1
        return arr1.filter(item => arr2.indexOf(item) !== NOT_FOUND)
    }
}
