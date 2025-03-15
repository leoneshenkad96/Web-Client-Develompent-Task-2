// Function to convert centimeters to kilometers
function centimetersToKilometers(centimeters: number): number {
    const conversionFactor = 100000; // 1 km = 100,000 cm
    return centimeters / conversionFactor;
}

// Function to convert kilometers to centimeters
function kilometersToCentimeters(kilometers: number): number {
    const conversionFactor = 100000; // 1 km = 100,000 cm
    return kilometers * conversionFactor;
}

// Example usage:
const cmValue = 50000;
const kmValue = 0.5;

console.log(`${cmValue} cm is equal to ${centimetersToKilometers(cmValue)} km`);
console.log(`${kmValue} km is equal to ${kilometersToCentimeters(kmValue)} cm`);
