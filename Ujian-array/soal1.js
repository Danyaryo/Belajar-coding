// Soal 1

function targetTerdekat (arr) {
    let positionX = -1
    let positionO = -1
    for (i = 0; i < arr.length; i++){
        if(arr[i].includes("o")){
            positionO = i
        } else if(!arr.includes("x")){
            return 0
        } else if(arr[i].includes("x")){
            positionX = i
            break;
        }
    }

    return Math.abs(positionX-positionO)
}

console.log(targetTerdekat(['','','o','','','x','','x']))
console.log(targetTerdekat(['o','','','','x','x','x']))
console.log(targetTerdekat(['x','','','','x','x','o','']))
console.log(targetTerdekat(['','','o','']))
console.log(targetTerdekat(['','o','','x','x','','','x']))


