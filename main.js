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
parrot();
