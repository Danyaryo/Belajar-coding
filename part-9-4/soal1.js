// Soal 1

function digitalPerkalianMinimum (angka) {
    // Langkah pertama
    if(angka == 1) {
        return 2
    }
    
    let join = []
    let faktor = []
    // Langkah kedua
    for( i = 1; i <= angka; i++){
        if(angka % i == 0 ){
            faktor.push(i)
        }
    }
    // Langkah ketiga
    for(i = 0; i < faktor.length; i++ ){
        for(j = i + 1; j < faktor.length; j++){
            if(faktor[i] * faktor[j] == angka){
                join.push(`${faktor[i]}${faktor[j]}`)
            }
        }
    }
    // Langkah keempat
    let panjangTerkecil = join[0].length

    for(let i = 0; i < join.length; i++){
        const panjangSaatIni = join[i].length
        if(panjangSaatIni < panjangTerkecil) {
            panjangTerkecil = panjangSaatIni
        }
    }

    return panjangTerkecil
}

console.log(digitalPerkalianMinimum(24))
console.log(digitalPerkalianMinimum(90))
console.log(digitalPerkalianMinimum(20))
console.log(digitalPerkalianMinimum(179))
console.log(digitalPerkalianMinimum(1))



