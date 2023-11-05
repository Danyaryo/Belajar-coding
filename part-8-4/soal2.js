// Soal 2
function palindromeAngka (angka) {
    angka ++
    let isPalindrome = true
    let stringAngka = angka.toString()
    let reverseAngka = ""
    for (i = stringAngka.length -1; i >= 0; i--){
        reverseAngka += stringAngka[i]
    }

    if(isPalindrome){
        if(reverseAngka == stringAngka){
            return angka
        } else {
            return (palindromeAngka(angka))
        }
    }
}

console.log(palindromeAngka(8))
console.log(palindromeAngka(10))
console.log(palindromeAngka(117))
console.log(palindromeAngka(175))
console.log(palindromeAngka(1000))
