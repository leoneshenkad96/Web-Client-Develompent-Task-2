// Function to check if a number is even
function isEven(number: number): boolean {
    return number % 2 === 0;
}

// Example usage:
const number1 = 4;
const number2 = 7;

console.log(`${number1} is even: ${isEven(number1)}`); // Output: 4 is even: true
console.log(`${number2} is even: ${isEven(number2)}`); // Output: 7 is even: false
