const reverseString = function(string) {
    let arrStr = string.split("");
    let revArr = [];
    for (let i=arrStr.length-1;i>=0;i--){
        revArr.push(arrStr[i]);
    }
    return revArr.join("")
};

// reversed = reverseString("hello");
// console.log(reversed);

// Do not edit below this line
module.exports = reverseString;
