
function negative_only() {
    let num;
    do {
        num = Number(prompt("Please enter a negative number:"));
    } while (isNaN(num) || num >= 0);
    return num;
}


function factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return "undefined";
    }
    let result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }
    return result;
}
alert
