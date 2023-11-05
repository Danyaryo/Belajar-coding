// Soal 1

function palindrome(kata) {
    let reverseWord = ""
    for(i = kata.length -1 ; i >= 0; i--){
        reverseWord += kata[i]     
    }

    if(kata == reverseWord){
        return true
    } else {
        return false
    }

  
}

console.log(palindrome("katak"))
console.log(palindrome("blanket"))
console.log(palindrome("civic"))
console.log(palindrome("kasur rusak"))
console.log(palindrome("mister"))

