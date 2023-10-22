// Soal 1
function bandingkanAngka(angka1, angka2) {
    let result = ""
    if (angka1 < angka2) {
        result = true
    } else if (angka1 == angka2) {
        result = -1
    } else {
        result = false
    }
    return result
}


console.log(bandingkanAngka(5, 8))
console.log(bandingkanAngka(5, 3))
console.log(bandingkanAngka(4, 4))
console.log(bandingkanAngka(3, 3))
console.log(bandingkanAngka(17, 2))

// Soal 2

function balikKata(kata) {
    let hasil = ""
    for (i = kata.length - 1; i >= 0; i--) {
        hasil += kata[i]
    }
    return hasil
}

console.log(balikKata("john Doe"))
console.log(balikKata("I am a bookworm"))
console.log(balikKata("Coding is my hobby"))
console.log(balikKata("Super"))

// Soal 3

function konversiMenit(menit) {
    const jam = Math.floor(menit / 60)
    let minute = menit % 60
    if(minute < 10){
        minute +=  "0".toString()
    }

    return `${jam}:${minute}`
}

console.log(konversiMenit(63))
console.log(konversiMenit(124))
console.log(konversiMenit(53))
console.log(konversiMenit(88))
console.log(konversiMenit(120))

// Soal 4 

function xo(str) {
    let oCount = ""
    let xCount = ""
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "x") {
            xCount++
        } else {
            oCount++
        }

        if (oCount == xCount) {
            result = true
        } else {
            result =  false
        }
    }
    return result
}

console.log(xo("xoxoxo"))
console.log(xo("oxooxo"))
console.log(xo("oxo"))
console.log(xo("xxxooo"))
console.log(xo("xoxooxxo"))
