let num1 = prompt("Enter the first number");
let operator = prompt("Enter desired operator (either +, -, * or /)");
let num2 = prompt("Enter the second number");

function add(n1,n2){
    return Number(n1) + Number(n2);
}
function subtract(n1,n2){
    return Number(n1) - Number(n2);
}
function multiply(n1,n2){
    return Number(n1) * Number(n2);
}
function divide(n1,n2){
    return Number(n1) / Number(n2);
}

function calculate(n1,n2,oper){
    if (oper == "+"){
        return add(n1,n2);

    } else if (oper == "-"){
        return subtract(n1,n2);

    } else if (oper == "*"){
        return multiply(n1,n2);

    } else if (oper == "/"){
        return divide(n1,n2);
    } else {
        return "ERROR Make Sure to Properly Enter Only Numbers and Operators ERROR";
    }
}
console.log(num1 + " " + operator + " " + num2 + " = " + calculate(num1,num2,operator));
document.write(num1 + " " + operator + " " + num2 + " = " + calculate(num1,num2,operator));