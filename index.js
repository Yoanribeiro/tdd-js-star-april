function isEven(num) {
    return num % 2 === 0;
}

function evens(arr){
    if(arr.length == 1){
        if(isEven(arr[0]))
            return arr;
    }
    return [];
}

function odds(arr){
    if(arr.length == 1){
        if(!isEven(arr[0]))
            return arr;
    }
    return [];
}

module.exports = {
	evens,
	odds,
};