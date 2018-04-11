function isEven(num) {
    return num % 2 === 0;
}

function evens(arr){
    return arr.filter((elem) => isEven(elem));
}

function odds(arr){
    return arr.filter((elem) => !isEven(elem));
}

module.exports = {
	evens,
	odds,
};