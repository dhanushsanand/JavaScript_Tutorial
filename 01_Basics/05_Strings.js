const name = "Dhanush"
const repoCount = 37
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Dhanush-Shivanand")

// console.log(gameName.toString());

// console.log(gameName.toUpperCase())

//console.log(gameName.indexOf('a'))

const newString = gameName.substring(-8,7)
console.log(newString)

const anotherString = gameName.slice(-9,13)
console.log(anotherString)

const url = "https://dhanush.com/dhanush%20shivanand"

console.log(url.replace('%20','-'))
console.log(url.includes('dhsh'))

console.log(gameName.fixed())
