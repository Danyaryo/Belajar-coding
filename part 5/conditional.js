// Soal 1
let nama = ""
let peran = ""

if (nama == "") {
    console.log("nama wajib di isi !!!")
    console.log("pilih peranmu untuk memulai game")
}
// block code conditional untuk pengecekan variable peran
if (peran == "ksatria") {
    console.log(`hello ksatria ${nama}, kamu dapat menyerang dengan senjatamu`)
} else if (peran == "tabib") {
    console.log(`hello tabib ${nama}, kamu akan membantu temanmu yang terluka`)
} else if (peran == "penyihir") {
    console.log(`hello penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu`)
} else {
    console.log("kayaknya kamu jadi bot aja ya")
}


