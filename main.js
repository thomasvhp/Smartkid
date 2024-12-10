
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

function count_up (start, stop) { 
    for ( let i= start; i< stop; i++) {
        console.log(i);
    }
}
count_up (1,5);

function sum(n) {
    let total = 0; // Initialize total to store the sum
    for (let i = 1; i <= n; i++) { // Loop from 1 to n
      total += i; // Add the current value of i to total
    }
    return total; 
  }
  
console.log(sum(7));


function sum_divisible (n, x) {
    let total = 0;
    for
}