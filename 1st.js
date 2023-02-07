// calculation a number multiply by 3 then add 10 then divide by 2 then substract by 5

function mindGame(positiveNumber) {
    if (isNaN(positiveNumber) === false) {
        if (positiveNumber > 0) {
            const result = (((positiveNumber * 3) + 10) / 2) - 5;
            return result;
        }
        else {
            return ('Please input a positve number');
        }
    }
    else {
        return('Please input a number');
    }
}
console.log(mindGame(5));