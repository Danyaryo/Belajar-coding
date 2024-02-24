// Soal 2

function shoppingTime(memberId, money) {
    let shopping = {}
    let items = [
        "Casing Handphone",
        "Sweater Uniklooh",
        "Baju H&N",
        "Baju Zoro",
        "Sepatu Stacattu",
    ]
    let listPurchased = []
    let listHarga = [1500000, 500000, 250000, 175000, 50000]
    listHarga.sort((a, b) => {
        return a - b
    })
    let changeMoney = money
    
    for (let i = 0; i < listHarga.length; i++) {
        if (changeMoney >= listHarga[i]) {
            changeMoney -= listHarga[i]
            listPurchased.push(items[i])
        } else {
            break
        }
        console.log(changeMoney)
        shopping.memberId = memberId;
        shopping.money = money
        shopping.listPurchased = listPurchased
        shopping.changeMoney = changeMoney
    }
    if (!memberId || !memberId && !money) {
        return "Mohon maaf, toko X hanya berlaku untuk member saja"
    }
    if (money < 50000) {
        return "Mohon maaf, uang tidak cukup"
    }

    return shopping

}
console.log(shoppingTime("1820RzKrnWn08", 2475000))
console.log(shoppingTime("82Ku8Ma742", 170000))
console.log(shoppingTime("", 2475000))
console.log(shoppingTime("234JdhweRxa53", 15000))
console.log(shoppingTime())

