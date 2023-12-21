// soal 3

function cariMedian(arr) {
    let sequenceNumber = arr.sort(function(a, b)  {return a -b})

    let totalDataGanjil = Math.floor(sequenceNumber.length / 2)
    let totalDataGenap = Math.floor(sequenceNumber.length / 2 - 1)
   if(sequenceNumber.length % 2 == 1) {
    return sequenceNumber[totalDataGanjil]
   } else {
    return (sequenceNumber[totalDataGenap] + sequenceNumber[totalDataGenap + 1]) / 2
   }
}

console.log(cariMedian([1, 2, 3, 4, 5]))
console.log(cariMedian([3, 4, 7, 6, 10]))
console.log(cariMedian([1, 3, 3]))
console.log(cariMedian([1, 3, 4, 10, 12, 13]))
console.log(cariMedian([7, 7 , 8, 8]))