// Soal 4

function cariModus (arr) {
    let modus = 0
    let maxCount = 0

    for (a = 0; a < arr.length; a++ ) {
        let count = 0;
        for(b = 0; b < arr.length; b++) {
            if(arr[a] === arr[b]){
                count ++
            } 
        }
        if(count > maxCount) {
            maxCount = count
            modus = arr[a]
        }
    }

    if (maxCount === 1 || maxCount === arr.length){
        return -1
    }

    return modus;
}


console.log(cariModus([10, 4, 5, 2, 4]))
console.log(cariModus([5, 10, 10, 6, 5]))
console.log(cariModus([10, 3, 1, 2, 5]))
console.log(cariModus([1, 2, 3, 3, 4, 5]))
console.log(cariModus([7, 7, 7, 7, 7]))