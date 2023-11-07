// Soal 4

function pasanganTerbesar(num) {
    let stringNum = num.toString()
    let banding = 0;
    for (let i = 0; i < stringNum.length -1; i++){
        let bigNum = parseInt(stringNum[i] + stringNum[i + 1])
        if(bigNum > banding){
            banding = bigNum
            
        }
    }
    return banding
}

console.log(pasanganTerbesar(645173))
console.log(pasanganTerbesar(12783456))
console.log(pasanganTerbesar(910233))
console.log(pasanganTerbesar(71856421))
console.log(pasanganTerbesar(79918293))