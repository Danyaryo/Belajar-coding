// Soal 3

function deretAritmatika (arr) {
    let firstNumber;
    let secondNumber;
    let panjang = arr.length -1
    let incorrect = []
    for (let i = 0; i <= panjang-2; i++  ){
        firstNumber = arr[i + 1] - arr[i]
        secondNumber = arr[i + 2] - arr[i+1]

        if (firstNumber !== secondNumber){
            incorrect.push(false)
        }
    }
    if(incorrect.length >= 1){
        return false
    } else {
        return true
    }
}

console.log(deretAritmatika([1,2,3,4,5,6]))
console.log(deretAritmatika([2,4,6,12,24]))
console.log(deretAritmatika([2,4,6,8]))
console.log(deretAritmatika([2,6,18,54]))
console.log(deretAritmatika([1,2,3,4,7,9]))
