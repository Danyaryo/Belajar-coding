// Soal 1

function changeMe(arr) {
    const ChristEvans = {
        firstName: arr[0][0],
        lastName: arr[0][1],
        gender: arr[0][2],
        age: 2023 - arr[0][3]
    } 
    
    const RoberDowney = {
        firstName: arr[1][0],
        lastName: arr[1][1],
        gender: arr[1][2],
        age: 'Invalid Birth Year'
    }
    console.log("1. Christ Evans: ",
    "Christ Evans :", ChristEvans)
    console.log("2. Robert Downey:", "Robert Downey :", RoberDowney)
}

changeMe([['Christ', 'Evans', 'Male', '1982'], ['Robert', 'Downey', 'Male',]])