const {odd, even} = require('./dayone')
function checkOddOrEven(num){
    if(num %2){
        return odd
    }
    return even
}

module.exports = checkOddOrEven