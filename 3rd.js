// if difference between input number and 7 is less than 7 then output difference otherwise output double of input

function isLGSeven(number) {
    if (isNaN(number) === false) {
        const difference = number - 7;
        if (difference < 7) {
            return difference;
        }
        else {
            const double = number * 2;
            return double;
        }
    }
    else {
        return('Please input a number');
    }
}
console.log(isLGSeven(-6))