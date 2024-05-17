
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

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const processedArray = processArray(inputArray);

console.log(processedArray); 

/**
 * Modifies an array of strings based on corresponding numbers.
 * - Capitalize the entire string if the number is even.
 * - Convert the string to lowercase if the number is odd.
 *
 * @param {string[]} stringArray - The array of strings to format.
 * @param {number[]} numberArray - The array of numbers processed by processArray.
 * @return {string[]} - The new array with formatted strings.
 */
function formatArrayStrings(stringArray, numberArray) {
    return stringArray.map((str, index) => {
        if (numberArray[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers);  // Output: [3, 4, 9, 16, 15]

const strings = ["Hello", "World", "JavaScript", "is", "fun"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings);  // Output: ["hello", "WORLD", "javascript", "IS", "fun"]
