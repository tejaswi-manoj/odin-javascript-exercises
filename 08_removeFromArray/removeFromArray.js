// My original complicated solution:

const removeFromArray = function(array, item, ...moreArgs) {
    let i=0;
    while (i<array.length){
        if (array[i]===item){
            array.splice(i,1);
            i--;
        }
        i++;
    }

    for (let j=0; j<moreArgs.length; j++){
        for (let k=0; k<array.length; k++){
            if (array[k]===moreArgs[j]){
                array.splice(k,1);
            }
        }
    }

    return array;
};


// Advanced solution

// Do not edit below this line
module.exports = removeFromArray;
