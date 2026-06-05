const accountId=12345
let accountEmail="abc@gmail.com"
var accountPassword="abcxyz"
accountCity="jaipur" // this is not preferred
let accountState
// accountId is not allowed

accountEmail="abcxyz@gmail.com"
accountPassword="abcxyzz"
accountCity="Kalburagi"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/* Prefer not to use var because of issue in block scope or function scope */