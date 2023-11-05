// Soal3

function hitungJumlahKata (kalimat) {
    const kata = kalimat.split(" ")
    return kata.length
}

console.log(hitungJumlahKata("i have a dream"))
console.log(hitungJumlahKata("never eat shredded wheat or cake"))
console.log(hitungJumlahKata("A song to sing"))
console.log(hitungJumlahKata("I"))
console.log(hitungJumlahKata("i believe i can code"))