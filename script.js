let num1 = 0;
let num2 = 1;
let operator = "";
let operatorSelected = false;
let repeatedEquals = false;

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const decimal = document.getElementById("decimal");


for(let i = 0; i < numbers.length; i++)
{
    numbers[i].addEventListener('click', function(e)
    {
        repeatedEquals = false;
        if(operatorSelected)
        {
            clear();
            operatorSelected = false;
        }
        if(this.textContent === ".")
        {
            decimal.disabled = true;
        }
        if(display.textContent.length > 14)
        {
            numsDisable();
        }
        else
        {
            numsEnable();
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
        decimal.disabled = false;
        numsEnable();


        if(display.textContent.length > 0)
        {
            num1 = display.textContent;
        }
        display.textContent = this.textContent;
        operator = display.textContent;
        operatorSelected = true;
    });
}

const equals = document.getElementById("equals");
equals.addEventListener('click', function(e)
{
    decimal.disabled = false;
    numsEnable();

    if(repeatedEquals)
    {
        num1 = display.textContent;
        operate(num1, num2, operator);
    }
    else 
    {
        num2 = display.textContent;
        repeatedEquals = true;
        operate(num1, num2, operator);
        
    }
    console.log(num1 + operator + num2);

});

const clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', function(e)
{
    clear();
    num1 = 0;
});

const deleteBtn = document.getElementById("delete");
deleteBtn.addEventListener('click', function(e)
{
    del();
    numsEnable();
});

function numsDisable()
{
    numbers.forEach(num => {
        num.disabled = true;
    });
}

function numsEnable()
{
    numbers.forEach(num => {
        num.disabled = false;
    });
}


function del()
{
    display.textContent = display.textContent.slice(0, display.textContent.length-1);
}

function clear()
{
    display.textContent = "";
    repeatedEquals = false;
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
    return answer;
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