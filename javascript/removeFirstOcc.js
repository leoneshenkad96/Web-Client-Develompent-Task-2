function removeFirstOccurrence(str, searchStr) {
    const index = str.indexOf(searchStr);
    if (index === -1) return str;
    return str.slice(0, index) + str.slice(index + searchStr.length);
}

console.log(removeFirstOccurrence("Leones Henka Dewana", "l9")); // Output: "Lenes Henka Dewana"
