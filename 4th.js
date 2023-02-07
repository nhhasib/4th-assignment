// find bad data in an array

function findingBadData(inputArray) {
    if (Array.isArray(inputArray) === true) {
        let badData = 0;
        for (let i = 0; i < inputArray.length; i++){
            const element = inputArray[i];
            if (element < 0) {
                badData++;
            }
        }
        return badData;
    }
    else {
        return "Please input an array"
    }
}
console.log(findingBadData([ 2, -5, -7, -13 ]))