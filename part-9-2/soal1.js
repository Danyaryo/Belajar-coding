// Soal 1 

function angkaPrima(angka) {
    const kelipatan = Math.sqrt(angka)

    for (i = 2; i <= kelipatan; i++) {
        if (angka % i === 0) {
            return false
        }
    }
    return true
}

console.log(angkaPrima(3))
console.log(angkaPrima(9))
console.log(angkaPrima(15))
console.log(angkaPrima(21))
console.log(angkaPrima(7))
console.log(angkaPrima(6))
console.log(angkaPrima(23))
console.log(angkaPrima(33))