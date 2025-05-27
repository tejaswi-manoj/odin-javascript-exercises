const repeatString = function(string, number) {

    if (number<0){
        return "ERROR";
    }
    let newStr = "";
    for (let i=0; i<number; i++){
        newStr += string;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
