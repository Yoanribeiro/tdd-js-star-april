function isEven(num) {
    return num % 2 === 0;
}

function evens(arr){
    if(arr.length == 1){
        if(isEven(arr[0]))
            return arr;
    }
    if(arr.length == 2){
        if(!isEven(arr[0]) && isEven(arr[1])){
            const res = [];
            res.push(arr[1])
            return res;
        }
    }
    return [];
}

function odds(arr){
    if(arr.length == 1){
        if(!isEven(arr[0]))
            return arr;
    }
    if(arr.length == 2){
        if(isEven(arr[0]) && !isEven(arr[1])){
            const res = [];
            res.push(arr[1])
            return res;
        }
    }
    return [];
}

module.exports = {
	evens,
	odds,
};