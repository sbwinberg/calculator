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

//Add equals button
//Extract numbers and operators
const equals = document.getElementById("=");
equals.addEventListener("click", function() {
    const text = screen.innerText;
    n = text.split(/[^0-9\.]+/);
    op = text.split(/[0-9]+/).filter((i) => i !== "");

    //convert numbers array to numbers
    n = n.map(function(x) {
        return parseInt(x);
    });


    //turning the secondly used number in the array to the result
    //since the next calculation will be based on that number
    var sum = 0;
    for(var i  = 0; i < op.length; i++){
        n[i+1] = operate(n[i], n[i+1], op[i]);
        // sum += operate(n[i], n[i+1], op[i]);
        // if(op[i] === "*") {
        //     n[i+1] = multiply(n[i], n[i+1]);
        //     console.log(n);
        // }  
        // else if(op[i] === "/") {
        //     n[i+1] = divide(n[i], n[i+1]);
        //     console.log(n);
        // }      
        // else if(op[i] === "+"){
        //     n[i+1] = add(n[i], n[i+1]);
        //     console.log(n);
        // }
        // else if(op[i] === "-") {
        //     n[i+1] = subtract(n[i], n[i+1]);
        //     console.log(n);
        // }
    };
    sum = n[n.length-1];
    // console.log(n[n.length-1]);
    screen.innerHTML += "<br />" + "=" + sum;
    console.log(sum);


});
