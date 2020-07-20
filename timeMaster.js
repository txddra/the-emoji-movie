const day = require('./day.js');

const argument = process.arg[4]
const timeMaster = function(argument){
    for(let i = argument; i < day.length; i++){
console.log(day[i])
    }
}