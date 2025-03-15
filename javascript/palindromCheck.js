// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the cleaned string is the same forwards and backwards
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage:
const testString1 = "madam";
const testString2 = "hello";

console.log(`${testString1} is a palindrome: ${isPalindrome(testString1)}`); // Output: madam is a palindrome: true
console.log(`${testString2} is a palindrome: ${isPalindrome(testString2)}`); // Output: hello is a palindrome: false
