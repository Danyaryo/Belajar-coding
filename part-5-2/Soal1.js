// 1. lets form sentence

let word1 = "javascript"
let second = "is"
let third = "awesome"
let fourth = "and"
let fifth = "I"
let sixth = "love"
let seventh = "it"

console.log(`${word1} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`)

// 2. Index Acessing - 1 by 1

let word2 = "wow javascript is so cool"

let firstWord = `${word2[0] + word2[1] + word2[2]}`
let secondWord = `${word2[3] + word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13] + word2[14]}`
let thirdWord = `${word2[15] + word2[16]}`
let fourthWord = `${word2[18] + word2[19]}`
let fifthWord = `${word2[21] + word2[22] + word2[23] + word2[24]}`

console.log("kata pertama adalah", firstWord)
console.log("kata kedua adalah", secondWord)
console.log("kata ketiga adalah", thirdWord)
console.log("kata keempat adalah", fourthWord)
console.log("kata kelima adalah", fifthWord)


// 3. Breaking Sentence (Again) using Substring

let word3 = "wow javascript is so cool"

let wordFirst = ` ${word3.substring(0, 3)}`
let wordSecond = `${word2.substring(4, 14)} `
let wordThird = `${word3.substring(15, 17)}`
let wordForth = `${word3.substring(18, 20)} `
let wordFifth = ` ${word3.substring(21, 25)}`

console.log("kata pertama :", wordFirst)
console.log("kata kedua :", wordSecond)
console.log("kata ketiga :", wordThird)
console.log("kata keempat :", wordForth)
console.log("kata kelima :", wordFifth)

// 4. Breaking sentence and count Each Length
let word4 = "wow javascript is so cool"

let firstWordFraction = `${word4.substring(0, 3)}`
let firstWordFractionLength = firstWordFraction.length
let secondWordFraction = `${word2.substring(4, 14)}`
let secondWordFractionLength = secondWordFraction.length
let thirdWordFraction = `${word3.substring(15, 17)}`
let thirdWordFractionLength = thirdWordFraction.length
let forthWordFraction = `${word3.substring(18, 20)}`
let forthWordFractionLength = forthWordFraction.length
let fifthWordFraction = `${word3.substring(21, 25)}`
let fifthWordFractionlength = fifthWordFraction.length

console.log(`kata pertama adalah ${firstWordFraction} , dengan panjang ${firstWordFractionLength}`)
console.log(`kata kedua adalah ${secondWordFraction} , dengan panjang ${secondWordFractionLength}`)
console.log(`kata ketiga adalah ${thirdWordFraction} , dengan panjang ${thirdWordFractionLength}`)
console.log(`kata keempat adalah ${forthWordFraction} , dengan panjang ${forthWordFractionLength}`)
console.log(`kata kelima adalah ${fifthWordFraction} , dengan panjang ${fifthWordFractionlength}`)
