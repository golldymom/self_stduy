const {odd,even} = require('./dayone')
const checkNumber = require('./dayonefunc')

function checkStringOddOrEven(str){
    if(str.length %2){
        return odd
    }
    return even
}

console.log(checkNumber(10))
console.log(checkStringOddOrEven('hello'))