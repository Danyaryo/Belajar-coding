// Soal 3

function tukarBesarKecil(kalimat) {
    let changeWord = ""
    for (i = 0; i < kalimat.length; i++) {
        if (kalimat[i].toLowerCase() == kalimat[i]) {
            changeWord += kalimat[i].toUpperCase()
        } else {
            changeWord += kalimat[i].toLowerCase()
        }
    }
    return changeWord
}

console.log(tukarBesarKecil("Hello World"))
console.log(tukarBesarKecil("I aM aLAY"))
console.log(tukarBesarKecil("My Name is Bond!!"))
console.log(tukarBesarKecil("it Should Be ME"))
console.log(tukarBesarKecil("001-A-3-5TrdYW"))