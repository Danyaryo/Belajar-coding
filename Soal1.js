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

console.log("kata pertama adalah",firstWord)
console.log("kata kedua adalah",secondWord)
console.log("kata ketiga adalah",thirdWord)
console.log("kata keempat adalah",fourthWord)
console.log("kata kelima adalah",fifthWord)

// 3. Breaking Sentence (Again) using Substring

let word3 = "wow javascript is so cool"
let wordFirst =` ${word1.substring(0, 1)} ${word1.substring(1, 2)} ${word1.substring(2, 3)}` 

console.log(wordFirst)