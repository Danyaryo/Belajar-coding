// Soal 2

function urutkanAbjad(str) {
  let swapped;
  str = str.split("")
  for(i = 0; i < str.length; i++){
    for(j = 0; j < str.length; j++){
      if(str[j] > str[j + 1]){
        let temp = str[j]
        str[j] = str[j + 1]
        str[j + 1] = temp
        swapped = true
      }
    }
  }
  return str.join(" ")
}

console.log(urutkanAbjad("hello"))
console.log(urutkanAbjad("truncate"))
console.log(urutkanAbjad("developer"))
console.log(urutkanAbjad("software"))
console.log(urutkanAbjad("aegis"))








