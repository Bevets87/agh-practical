const splitInteger = (integer) => { 
    return integer.toString().split('').map(s => parseInt(s));
}
const joinInteger = (arrayOfIntegers) => { 
    return parseInt(arrayOfIntegers.map(i => i.toString()).join(""));
}

const nextGreatestInteger = (integer) => {
    const array = splitInteger(integer);
    let length = array.length;
    let i;

    for (i = length - 1; i > 0; i--) {
        if (array[i] > array[i - 1]) {
            break;
        }
    }

    if (i === 0) {
        return false;
    } else {
    
        const start = array.slice(0, i - 1);
        const middle = array.slice(i - 1, i);
        const end = array.slice(i, array.length);
        let nextMiddle = end[0];
        let nextMiddleIndex = 0;
        end.forEach((e, i) => {
            if (e < nextMiddle && e > middle[0]) {
                nextMiddle = e;
                nextMiddleIndex = i
            }
        });


        let temp = middle[0];
        middle[0] = end[nextMiddleIndex];
        end[nextMiddleIndex] = temp;
  
        
        
        return joinInteger(start.concat(middle).concat(end.sort()));
    }
}


module.exports = {
    splitInteger,
    joinInteger,
    nextGreatestInteger
}