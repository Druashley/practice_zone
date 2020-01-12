btnZero = document.getElementById('btn-0');
btnOne = document.getElementById('btn-1');
btnTwo = document.getElementById('btn-2');
btnThree = document.getElementById('btn-3');
btnFour = document.getElementById('btn-4');
btnFive = document.getElementById('btn-5');
btnSix = document.getElementById('btn-6');
btnSeven = document.getElementById('btn-7');
btnEight = document.getElementById('btn-8');
btnNine = document.getElementById('btn-9');
btnPlus = document.getElementById('btn-plus');
btnMinus = document.getElementById('btn-minus');
btnDivide = document.getElementById('btn-divide');
btnMultiply = document.getElementById('btn-multiply');
btnEquals = document.getElementById('btn-equals');
answer = document.getElementById('answer');

const regex = /([%*+-/])/

const calc = {
    divide: function (a, b) {
        return (a / b);
    },
    multiply: function (a, b) {
        return a * b;
    },
    sum: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    }
}

btnZero.addEventListener("click", function () {
    answer.textContent += 0;
});
btnOne.addEventListener("click", function () {
    answer.textContent += 1;
});
btnTwo.addEventListener("click", function () {
    answer.textContent += 2;
});
btnThree.addEventListener("click", function () {
    answer.textContent += 3;
});
btnFour.addEventListener("click", function () {
    answer.textContent += 4;
});
btnFive.addEventListener("click", function () {
    answer.textContent += 5;
});
btnSix.addEventListener("click", function () {
    answer.textContent += 6;
});
btnSeven.addEventListener("click", function () {
    answer.textContent += 7;
});
btnEight.addEventListener("click", function () {
    answer.textContent += 8;
});
btnNine.addEventListener("click", function () {
    answer.textContent += 9;
});

btnPlus.addEventListener("click", function () {
    if (answer.textContent.split(regex).length > 1) {
        arr = answer.textContent.split(regex);
        a = parseInt(arr[0]);
        opp = arr[1];
        b = parseInt(arr[2]);
        calculate(opp, a, b);
        answer.textContent += '+';
    } else {
        answer.textContent += '+';
    }
});

btnMinus.addEventListener("click", function () {
    if (answer.textContent.split(regex).length > 1) {
        arr = answer.textContent.split(regex);
        a = parseInt(arr[0]);
        opp = arr[1];
        b = parseInt(arr[2]);
        calculate(opp, a, b);
        answer.textContent += '-';
    } else {
        answer.textContent += '-';
    }
});

btnDivide.addEventListener("click", function () {
    if (answer.textContent.split(regex).length > 1) {
        arr = answer.textContent.split(regex);
        a = parseInt(arr[0]);
        opp = arr[1];
        b = parseInt(arr[2]);
        calculate(opp, a, b);
        answer.textContent += '/';
    } else {
        answer.textContent += '/';
    }
});

btnMultiply.addEventListener("click", function () {
    if (answer.textContent.split(regex).length > 1) {
        arr = answer.textContent.split(regex);
        a = parseInt(arr[0]);
        opp = arr[1];
        b = parseInt(arr[2]);
        calculate(opp, a, b);
        answer.textContent += '*';
    } else {
        answer.textContent += '*';
    }
});




function calculate(opp, a, b, ) {
    switch (opp) {
        case '+':
            answer.textContent = calc.sum(a, b);
            break;
        case '-':
            answer.textContent = calc.minus(a, b);
            break;
        case '*':
            answer.textContent = calc.multiply(a, b);
            break;
        case '/':
            answer.textContent = calc.divide(a, b);
            break;
        default:
            break;
    }
}

btnEquals.addEventListener("click", function () {
    arr = answer.textContent.split(regex);
    a = parseInt(arr[0]);
    opp = arr[1];
    b = parseInt(arr[2]);
    calculate(opp, a, b);
});

