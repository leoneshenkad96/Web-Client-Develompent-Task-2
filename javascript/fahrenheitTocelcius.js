// Function for Conversion
function convertLength(value, unitFrom, unitTo) {
    if (unitFrom === "cm" && unitTo === "km") {
        return value / 100000; // 1 km = 100000 cm
    } else if (unitFrom === "km" && unitTo === "cm") {
        return value * 100000;
    } else {
        return "Unit tidak valid";
    }
}

// Input
let value = parseFloat(prompt("Masukkan nilai: "));
let unitFrom = prompt("Dari unit (cm/km): ");
let unitTo = prompt("Ke unit (cm/km): ");

// Conversion and Output
let result = convertLength(value, unitFrom, unitTo);
console.log(`Hasil: ${result} ${unitTo}`);
