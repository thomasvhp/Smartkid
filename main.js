function print_Odd(n) {
    if (n >= 1) {
        while (n > 0) {
            if (n % 2 !== 0) {
                console.log(n);
            }
            n--;
        }
    }
}

function parrot(){
    let answer = prompt("Please enter some text or the word 'quit' to exit:");

    if (answer == "quit" || answer == "QUIT" || answer == "Quit"){
        alert("GOODBYE 🦜");
    }else{
        let response = answer.toUpperCase();
        alert(response);
    }
}


function negative_only() {
    let num = prompt("Please enter a negative number");
    while(num > 0){
        num = prompt("Please enter a NEGATIVE number");
    }
    return num;
}

function fact(num, n) {
    return num * n;
}

function factorial(n) {
    let result = 1; 
    while (n > 0) {
        result *= n; 
        n--; 
    }
    console.log(result);
}




function count_down(start, stop){
    while(start !== stop) {
        console.log(start);//prints the starting number
        start--;// decreases the start number by 1
    }
    console.log(stop);
}



function print_chars(str, step) {
    let start = 0; // makes starting index
    while (start < str.length) {
        console.log(str[start]); // print the character with that index
        start += step; // add the steps for the next print
    }
}



function count4(begin, end) {
    let count = 0;

    while (begin !== end) {
        if (begin % 4 === 0) {//check if divisible by 4 then check next numb
            count++;
        }
        if (begin < end) {
            begin++; // add if begin is smaller than end
        } else {
            begin--; // subtract 1 if begin is bigger than end
        }
    }

    // look at final number
    if (begin % 4 === 0) {
        count++;
    }

    console.log(count);
}


function sum_divisible(n, x) {
    let add = 0;
    while (n !== 0) {
        if (n % x == 0) {
            add += n; // add n to the number
        }
        n--; // take away n -1
    }
    console.log(add);
}

sum_divisible(32, 6);



