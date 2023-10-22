// 1. Melakukan Looping menggunakan WHILE
let a = 1
while (a <= 10) {
    console.log(`looping WHILE pertama MAJU: ${a}`)
    a++
}

let b = 10
while (b >= 1) {
    console.log(`looping WHILE kedua MUNDUR: ${b} `)
    b--
}

// 2. Melakukan Looping menggunakan FOR

for (let c = 1; c <= 20; c++) {
    console.log(`looping FOR pertama MAJU: ${c}`)
}

for (let d = 20; d >= 1; d--) {
    console.log(`looping FOR kedua MUNDUR: ${d}`)
}

// 3. Angka Ganjil dan Genap
for (let e = 1; e <= 100; e++) {
    if (e % 2) {
        console.log("Angka Ganjil :", e)
    } else {
        console.log("Angka Genap", e)
    }
}

// 4. Counter kelipatan

// kelipatan 2 
for (f = 1; f <= 100; f++) {
    if (f % 2 == 0) {
        console.log(f, "= kelipatan 2")
    }
}

// kelipatan 5
for (g = 1; g <= 100; g++) {
    if (g % 5 == 0) {
        console.log(g, "= kelipatan 5")
    }
}

// kelipatan 9
for (h = 1; h <= 100; h++) {
    if (h % 9 == 0) {
        console.log(h, "= kelipatan 9")
    }
}

// 5. Bintang Asteriks
let stars = ""

for (i = 1; i <= 5; i++) {
    for ( j = 1; j < 2; j++){
       console.log(stars += "*") 
    }
}



