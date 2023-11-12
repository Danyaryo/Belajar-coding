// Soal 2

function perkalianUnik (arr) {
    let result = []
    for (let a = 0; a < arr.length; a++){
        let count = 1
        for (let b = 0; b < arr.length; b++){
            if ( a !== b){
                count *= arr[b]
            }
        }
        result.push(count)
    }
        return result
}

console.log(perkalianUnik([2,4,6]))
console.log(perkalianUnik([1,2,3,4,5]))
console.log(perkalianUnik([1,4,3,2,5]))
console.log(perkalianUnik([1,3,3,1]))
console.log(perkalianUnik([2,1,8,10,2]))