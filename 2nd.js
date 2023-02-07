// is your input text even or odd

function evenOdd(inputWord) {
    if (isNaN(inputWord) === true) {
        if (inputWord.length % 2 === 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
    else {
        return 'Please input a text';
    }
}
console.log(evenOdd('Batch7'))