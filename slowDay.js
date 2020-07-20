const day = require('./day.js');

const slowDay = function(){
    for(let i = 0; i< day.length; i++ ){
        console.log(day[i])
    }
}


setInterval(slowDay,3000)