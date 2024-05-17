
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