// Soal 2

function fpb (angka1,angka2) {
   while(angka2 != 0) {
    const temp = angka2;
    angka2 = angka1 % angka2;
    angka1 = temp
   }
   return angka1
}

console.log(fpb(12, 16))
console.log(fpb(50, 40))
console.log(fpb(22, 99))
console.log(fpb(24, 36))
console.log(fpb(17, 23))


