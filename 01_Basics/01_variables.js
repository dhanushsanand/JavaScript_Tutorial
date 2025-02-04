const accountId = 144553
let accountEmail = "dhanush@gmail.com"
var accountPassword = "12345"
accountCity = "Bengaluru"
let accountState // undefined variable

//accountId = 2 //not allowed
accountEmail = "dshivana@gmail.com"
accountPassword = "78910"
accountCity = "Tempe"
console.log(accountId)

//JavaScript is a safe language
/*
Prefer not to use var
because of issue in block scope and funtional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])