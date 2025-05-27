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
const alsoRemoveFromArray = function(array, ...args){
    newArray=[];
    array.forEach((item)=>{
        if (!args.includes(item)){
            newArray.push(item);
        }
    }
    )
}



// Another advanced 
// Do not edit below this line

const anotherRemoveFromArray = function(array, ...args){
    return array.filter(val => !args.includes(val));
}


module.exports = removeFromArray;
