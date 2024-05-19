
function processArray(arr) {
    // Use the map function to create a new array with the required transformations
    return arr.map(num => {
        if (num % 2 === 0) {
            // If the number is even, square it
            return num * num;
        } else {
            // If the number is odd, triple it
            return num * 3;
        }
    });
}



function formatArrayStrings(stringArray, numberArray) {
    return stringArray.map((str, index) => {
        if (numberArray[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);  

const strings = ["Hello", "World", "React Native", "is", "exciting"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); 