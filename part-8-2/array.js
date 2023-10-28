// Soal 1

let input = [["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "membaca"],
            ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
            ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
            ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]]


function dataHandling(input) {
    for (i = 0; i < input.length; i++) {
        for (j = 0; j <= input.length; j++) {
            if (j == 0) {
                console.log("Nomor ID :", input[i][j])
            } else if (j == 1) {
                console.log("Nama Lengkap :", input[i][j])
            } else if (j == 2) {
                console.log(`TTL :${input[i][j]}  ${input[i][3]}`)
            } else if (j == 4) {
                console.log(`Hobi : ${input[i][j]}`)
            }
        }
        console.log("")
    }
}

dataHandling(input)

// Soal 2

let input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2(input) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy")
    input.splice(4, 1, "Pria", "Sma Internasional Metro")
    console.log(input)
    let addStrip = input[3].split("/")
    if (input[3].split("05")) {
        console.log("Mei")
    }
    input.splice(3, 1, "1989,21,05")
    console.log(input[3])
    console.log(addStrip.join('-'))
    let name = input[1].split("Elsharawy", 1)
    console.log(name[0])
}

dataHandling2(input2)










