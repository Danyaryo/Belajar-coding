// Soal 3

function countProfit(shoppers) {
    let listBarang = [["Sepatu Stacattu", 1500000, 10], ["Baju Zoro", 500000, 2], ["Sweater Uniklooh", 175000, 1]]

    let result = []

    for (let i = 0; i < listBarang.length; i++) {
        let dataBuyer = {
            product: listBarang[i][0],
            shoppers: [],
            leftOver: listBarang[i][2],
            totalProfit: 0
        }
        for (let j of shoppers) {
            if (listBarang[i][0] == j.product && j.amount <= dataBuyer.leftOver) {
                dataBuyer.shoppers.push(j.name)
                dataBuyer.leftOver -= j.amount
                dataBuyer.totalProfit += listBarang[i][1] * j.amount
            }
        }
        result.push(dataBuyer)
    }
    if(shoppers.length == 0){
        return shoppers
    }

    return result
}

console.log(countProfit([{ name: "Windi", product: "Sepatu Stacattu", amount: 2 }, { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 }, { name: "Rani", product: "Sweater Uniklooh", amount: 2 }]))
console.log(countProfit([{name: "Windi", product: "Sepatu Stacattu", amount: 8}, {name: "Vanessa", product: "Sepatu Stacattu", amount: 10}, {name: "Rani", product: "Sweater Uniklooh", amount: 1}, {name: "Devi", product: "Baju Zoro", amount: 1}, {name: "Lisa", product: "Baju Zoro", amount: 1}]))
console.log(countProfit([{name: "Windi", product: "Sepatu Naiki", amount: 5}]))
console.log(countProfit([]))