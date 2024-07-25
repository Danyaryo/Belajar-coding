// Soal 2
function naikAngkot (arrPenumpang) {
    if (arrPenumpang.length === 0) {
        return []
    }

    const rute = ['A', 'B', 'C', 'D', 'E', 'f']
    const hargaPerRute = 2000;
    const penumpangAngkot = [];

    for(let i = 0; i < arrPenumpang.length; i++){
        const penumpang = arrPenumpang[i][0]
        const naikDari = arrPenumpang[i][1]
        const tujuan = arrPenumpang[i][2]

        const indeksNaik = rute.indexOf(naikDari)
        const indeksTujuan = rute.indexOf(tujuan)

        const bayar = (indeksTujuan - indeksNaik) * hargaPerRute; 

        const dataPenumpang = {
            penumpang: penumpang,
            naikDari: naikDari,
            tujuan: tujuan,
            bayar: bayar
        }

        penumpangAngkot.push(dataPenumpang)
    }
    return penumpangAngkot
}

console.log(naikAngkot([['Dimitri', 'B', 'F'],['Icha', 'A', 'B']]))
console.log(naikAngkot([])) 