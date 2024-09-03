function firstAndLastKNumbers(arr) {
    let numToPrint = arr.shift();
    console.log(arr.slice(0, numToPrint).join(` `));
    console.log(arr.slice(arr.length - numToPrint).join(` `));
}
firstAndLastKNumbers([3,
    6, 7, 8, 9]);
