// Soal 4

function checkAB(num) {
    let container = ""
    for(i = 0; i < num.length; i++){
        if(num[i] == "a" || num[i] == "b"){
            container += num[i+4]
            if (container == "a" || container == "b"){
                return true
            } else {
                return false
            }
        }

    }
}

console.log(checkAB('lane borrowed'))
console.log(checkAB("i am sick"))
console.log(checkAB("you are boring"))
console.log(checkAB("barbarian"))
console.log(checkAB("bacon and meat"))