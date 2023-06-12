let num1 = 0;
let num2 = 1;
let operator = "";
let operatorSelected = false;

const display = document.getElementById("display");

const numbers = document.querySelectorAll(".number");
for(let i = 0; i < numbers.length; i++)
{
    numbers[i].addEventListener('click', function(e)
    {
        if(operatorSelected)
        {
            clear();
            operatorSelected = false;
        }
        console.log(this.textContent);
        display.textContent += this.textContent;
    });
}

const operators = document.querySelectorAll(".operator");
for(let i = 0; i < operators.length; i++)
{
    operators[i].addEventListener('click', function(e)
    {
        num1 = display.textContent;
        //clear();
        display.textContent = this.textContent;
        operator = display.textContent;
        operatorSelected = true;
    });
    // if(operatorSelected)
    // {
    //     break;
    // }
}

const equals = document.getElementById("equals");
equals.addEventListener('click', function(e)
{
    num2 = display.textContent;
    operate(num1, num2, operator);
});


const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function(e)
{
    clear();
});

const decimal = document.getElementById("decimal");
decimal.addEventListener('click', function(e)
{
    if(!operator)
    {
        display.textContent += this.textContent;
    }
    else
    {
        clear();
        display.textContent += this.textContent;
        operatorSelected = false;
    }
});


function clear()
{
    display.textContent = "";
}

function operate(num1, num2, operator)
{
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let answer = 0;
    if(operator === "+")
    {
        answer = add(num1, num2);
    }
    if(operator === "-")
    {
        answer = subtract(num1, num2);
    }
    if(operator === "x")
    {
        answer = multiply(num1, num2);
    }
    if(operator === "÷")
    {
        answer = divide(num1, num2);
    }
    if(operator === "^")
    {
        answer = exponent(num1, num2);
    }
    console.log(answer);
    display.textContent = answer;
}

function add(num1, num2) 
{
    console.log(num1+num2);
    return num1+num2;
}

function subtract(num1, num2)
{
    return num1-num2;
}

function multiply(num1, num2)
{
    console.log(num1*num2);
    return num1*num2;
}

function divide(num1, num2)
{
    return num1/num2;
}

function exponent(num1, num2)
{
    return num1**num2;
}