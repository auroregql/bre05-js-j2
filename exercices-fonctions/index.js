/*EXERCICE 1*/

/*Addition*/

function add(a, b) {
    return a + b;
}

console.log(add(21, 21));



/*Soustraction*/

function sub(a, b) {
    return a - b;
}

console.log(sub(63, 21));



/*Multiplication*/

function mult(a, b) {
    return a * b;
}

console.log(mult(21, 2));



/*Division*/

function div(a, b) {
    return a / b;
}

console.log(div(84, 2));


/*Modulo*/

function mod(a, b) {
    return a % b;
}

console.log(mod(42, 2));


/* EXERCICE 2*/

function askUserOperation () {
   let operation = window.prompt("Quelle operation souhaitez vous faire ? (+,-,*,/,%)");
   return operation;
}

function askUserFirstNumber () {
    let firstnumber = window.prompt("Quel premier nombre choisissez-vous ?");
    return Number (firstnumber);
}

function askUserSecondNumber () {
    let secondnumber = window.prompt ("Quel second nombre choisissez-vous ?");
    return Number (secondnumber);
}

let op = askUserOperation ();
let a = askUserFirstNumber ();
let b = askUserSecondNumber();


let result;

if (op === "+") {
    result = a + b;
} else if (op === "-") {
    result = a - b;
} else if (op === "*") {
    result = a * b;
} else if (op === "/") {
    result = a / b;
} else if (op === "%") {
    result = a % b;
} else {
    result = "Opération non reconnue";
}

console.log(result);
window.alert(`Le resultat est : ${result}`);