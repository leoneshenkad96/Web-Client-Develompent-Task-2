// Function to check if a string is a palindrome
function isPalindrome(str: string): boolean {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the cleaned string is the same forwards and backwards
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage:
const testString1 = "madam";

const testString3 = "hello";

console.log(`${testString1} is a palindrome: ${isPalindrome(testString1)}`); // Output: madam is a palindrome: true
console.log(`${testString3} is a palindrome: ${isPalindrome(testString3)}`); // Output: hello is a palindrome: false
