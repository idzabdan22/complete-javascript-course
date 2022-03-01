// Remember, we're gonna use strict mode in all scripts now!
'use strict';


const forecast = [17, 21, 23, -111, 8, 5];
const result = arr => {
    let i = 0;
    let info = '... ';
    while (i < forecast.length) {
        info += `${forecast[i]} C in ${i + 1} days ...`;
        i++;
    }
    return info;
}

console.log(result(forecast));