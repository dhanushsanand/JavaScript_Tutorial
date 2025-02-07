// let numberValue = Number("A")
// console.log(typeof(numberValue))
// console.log(numberValue)
// console.log('A' - 1)
// console.log("Dhanush" + "100")

//console.log("5" + true)

// let number = BigInt(10^5)
// console.log(typeof(number))
// console.log(number)

// let numberInteger = Number

// numberInteger = "Dhanush"

// console.log(numberInteger)

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 326723475275432324678n
console.log(bigNumber)



//JS is a dynamically typed language

// 
//Primitive 
// All are call by value meaning a copy of the value is created when it is passed around
//String, Number, Boolean, null, undefined, 
// Symbol (to make something unique), BigInt 

//Reference (Non primitive)
//Array, Objects, Functions


const heros = ['Iron Man','Captain America', 'Spiderman']
let myObject = {
    name : "Dhanush",
    age: 22
}

console.table([myObject])

const myFunction = function(){
    console.log("Hello World"); 
}

//Stack(Primitive) we get a copy of a variable, 
// Heap(Non-Primitive) we get a reference 

let myYotubeName =  "Dhanush Shivanand"

let anotherUserName = myYotubeName

anotherUserName = "dshivana"

console.log(myYotubeName)
console.log(anotherUserName)


let userOne = {
    email:"dshivana@gmail.com"
}


let userTwo = userOne

console.log(userOne)
console.log(userTwo.toString);
