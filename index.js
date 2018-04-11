function isEven(num) {
    return num % 2 === 0;
}

function evens(arr){
    const res = [];
    
    for(let i = 0; i< arr.length; i++){
        if(isEven(arr[i]))
            res.push(arr[i]);
    }

    return res;
}

function odds(arr){
    const res = [];
    
    for(let i = 0; i< arr.length; i++){
        if(!isEven(arr[i]))
            res.push(arr[i]);
    }

    return res;
}

module.exports = {
	evens,
	odds,
};