// Soal 3

function groupAnimals(animals) {
    let hewanUrut = animals.sort()
    let penampung = []
    let result = []
    for (i = 0; i < hewanUrut.length; i++) {
        if ( i === 0) {
            penampung.push(hewanUrut[i])
            continue
        }

        if(hewanUrut[i][0] !== penampung[0][0]) {
            result.push(penampung)
            penampung = [hewanUrut[i]]
        } else {
            penampung.push(hewanUrut[i])
        }
    }
    result.push(penampung)
    return result
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']))