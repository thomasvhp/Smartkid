
function negative_only(num) {
    let num;
    do {
        num = Number(prompt("Please enter a negative number:"));
    } while (isNaN(num) || num >= 0);
    return num;
}


function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return undefined;
    if (n === 0) return 1;
    
    let result = 1;
    for (let i = n; i > 0; i--) {
      result *= i;
    }
    return result;
  }
