//step one:
const day = require('./day.js')

//step two:
const badDay = function(){
   for(let i = 0; i < day.length; i++){
       console.log(day[i])
   } 
}
//step three:
//isn't working for me
setInterval(badDay,1000);
