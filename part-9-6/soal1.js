// Soal 1

function changeMe(arr) {

    for (let i = 0; i < arr.length; i++) {
        const obj = {
            firstName: "",
            lastName: "",
            gender: "",
            age: 0,
        }
        for (j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                obj.firstName = arr[j][0]
                obj.lastName = arr[j][1]
                obj.gender = arr[j][2]
            }
            if (obj.firstName == "Christ") {
                obj.age = 2023 - 1982
            } else {
                obj.age = "Invalid Birth Year"
            }
        }
        console.log(obj)
    }

}

changeMe([['Christ', 'Evans', 'Male', '1982'], ['Robert', 'Downey', 'Male',]])