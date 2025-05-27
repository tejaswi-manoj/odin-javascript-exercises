const sumAll = function(a, b) {
    let total = 0;
    let first, last;
    if (a>b){
        first = b;
        last = a;
    } else{
        last = b;
        first = a;
    }

    if (!(Number.isInteger(first))||!(Number.isInteger(last))||first<0||last<0){
        return "ERROR";
    }

    for (let i=first; i<=last; i++){
        total += i;
    }
    return total;
};


// console.log(sumAll(1,5));

// Do not edit below this line
module.exports = sumAll;
