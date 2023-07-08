function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a, b, o) {
    if(o === "+"){
        return add(a,b);
    }
    else if(o === "-") {
        return subtract(a,b);
    }
    else if(o === "*") {
        return multiply(a,b);
    }
    else if(o === "/") {
        return divide(a,b);
    }
}

const numbers = document.getElementById("numbers");
const operators = document.getElementById("operators");
const screen = document.getElementById("screen");

//Create buttons for numbers
for(var i = 0; i < 10; i++) {
    b = document.createElement("button");
    b.classList.add("number");
    b.innerHTML = i;
    b.setAttribute("id", i);
    b.value = i;

    numbers.appendChild(b);
}
//Create buttons for operators
for(var i = 0; i < 6; i++) {
    arr = ["+", "-", "*", "/", "=", "CE"];
    b = document.createElement("button");
    b.classList.add("operator")
    b.innerHTML = arr[i];
    b.setAttribute("id", arr[i]);
    b.value = arr[i];

    operators.appendChild(b);
}

//Display numbers on screen and storing value in variable, when clicked
const num = document.getElementsByClassName("number");
var displayValue = "";

for(var i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function(e) {
        screen.innerHTML += e.target.value;
        displayValue += e.target.value;
    })
}

//Display operator [+-*/] on screen and save in variable
const operator = document.getElementsByClassName("operator");
var displayOperator = "";
for(var i = 0; i < operator.length-2; i++) {
    operator[i].addEventListener("click", function(e) {
        screen.innerHTML += e.target.value;
        displayOperator = e.target.value;
    })
}


//Clear button
const CE = document.getElementById("CE");
CE.addEventListener("click", function() {
    screen.innerHTML = "";
    displayValue = "";
    displayOperator = "";
})

var val1;
var val2;

if(displayOperator !== ""){
    val1 = displayValue;
    
}
