//step one:
const day = require('./day.js')

//step two:
let i = 0;
const badDay = function () {
    console.clear();
    console.log(day[i])
    i = i + 1;
    if(i > day.length){
        clearInterval(badDayInterval)
    }
}
//step three:
//isn't working for me
const badDayInterval = setInterval(badDay, process.argv[2]);
