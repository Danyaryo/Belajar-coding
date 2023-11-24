// Soal 2

function mengelompokkanAngka(arr) {
    let angkaGenap = []
    let angkaGanjil = []
    let multiThree = []
    let result = []

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i] % 3 != 0) {
            angkaGenap.push(arr[i])
        } else if (arr[i] % 2 == 1 && arr[i] % 3 != 0) {
            angkaGanjil.push(arr[i])
        } else if (arr[i] % 3 == 0) {
            multiThree.push(arr[i])
        }
    }
    result = [angkaGenap, angkaGanjil, multiThree]
    return result
}


console.log(mengelompokkanAngka([2, 4, 6]))
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]))
console.log(mengelompokkanAngka([]))