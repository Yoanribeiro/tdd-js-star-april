function evens(arr){
    if(arr.length == 1){
        if(arr[0] % 2 === 0)
            return arr;
    }
    return [];
}

function odds(arr){
    if(arr.length == 1){
        if(arr[0] % 2 !== 0)
            return arr;
    }
    return [];
}

module.exports = {
	evens,
	odds,
};