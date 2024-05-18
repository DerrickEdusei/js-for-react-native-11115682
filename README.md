# js-for-react-native-11115682
STUDENT ID : 11115682
 Task 1
 ProcessArray Function:

Input: An array of numbers.
Logic: Uses map to iterate through the array and:
Squares even numbers.
Triples odd numbers.
Output: A new array with the processed numbers

Task 2

Objective:

Create a function that modifies an array of strings based on an array of numbers.
Function Details:

Function Name: formatArrayStrings
Parameters:
stringArray: An array of strings.
numberArray: An array of numbers, which are the results from the processArray function.
Logic:
For each string in stringArray, check the corresponding number in numberArray.
If the number is even, capitalize the entire string.
If the number is odd, convert the string to lowercase.
Return: A new array with the modified strings.
 
Task 3
Objective:

Create a function that generates user profile objects from two arrays: original names and modified names.
Function Details:

Function Name: createUserProfiles
Parameters:
originalNames: An array of original names (strings).
modifiedNames: An array of modified names (strings) that have been formatted by the formatArrayStrings function.
Logic:
Iterate through the originalNames array.
For each name, create an object containing:
id: Auto-incremented starting from 1.
originalName: The original name from the originalNames array.
modifiedName: The corresponding modified name from the modifiedNames array.

Return: An array of objects, each containing id, originalName, and modifiedName.