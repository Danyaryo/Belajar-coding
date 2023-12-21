// Soal 5

function ubahHuruf(kata) {
    let text = "abcdefghijklmnopqrstuvwxyz"
    let wadah = ""

    for (i = 0; i < kata.length; i++) {
        for (j = 0; j < text.length; j++) {
            if (kata[i] === "z") {
                wadah += "a"
                break
            } else if (kata[i] === text[j]) {
                wadah += text[j + 1]
            }
        }
    }
    return wadah;
}

    console.log(ubahHuruf("wow"))
    console.log(ubahHuruf("developer"))
    console.log(ubahHuruf("javascript"))
    console.log(ubahHuruf("keren"))
    console.log(ubahHuruf("semangat"))