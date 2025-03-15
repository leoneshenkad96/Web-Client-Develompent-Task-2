function convertLength(value, fromUnit, toUnit) {
    const CM_PER_KM = 100000;

    if (fromUnit === "cm" && toUnit === "km") {
        return value / CM_PER_KM;
    } else if (fromUnit === "km" && toUnit === "cm") {
        return value * CM_PER_KM;
    } else {
        throw new Error("Unsupported unit conversion");
    }
}

console.log(convertLength(100000, "cm", "km")); // Output: 1
console.log(convertLength(1, "km", "cm")); // Output: 100000
