// Soal 1
function cariMean(arr) {
    let total = 0
    let panjang = arr.length
    for (i = 0; i < panjang; i++) {
        total += arr[i]
    }
    return Math.round(total / panjang)
}

console.log(cariMean([1, 2, 3, 4, 5]))
console.log(cariMean([3, 5, 7, 5, 3]))
console.log(cariMean([6, 5, 4, 7, 3]))
console.log(cariMean([1, 3, 3]))
console.log(cariMean([7, 7, 7, 7, 7]))

