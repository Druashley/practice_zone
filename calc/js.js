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
btnDot = document.getElementById('btn-dot');
answer = document.getElementById('answer');
btnAC = document.getElementById('btn-ac');
btnClear = document.getElementById('btn-clear');


const regex = /([%*+\-/])/

const calc = {
    divide: function (a, b) {
        return Math.round((a / b) * 100000) / 100000;
    },
    multiply: function (a, b) {
        return Math.round((a * b) * 100000) / 100000;
    },
    sum: function (a, b) {
        return Math.round((a + b) * 100000) / 100000;
    },
    minus: function (a, b) {
        return Math.round((a - b) * 100000) / 100000;
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
        valueFinder();
        answer.textContent += '+';
    } else {
        answer.textContent += '+';
    }
});

btnMinus.addEventListener("click", function () {
    if (answer.textContent.split(regex).length > 1) {
        valueFinder();
        answer.textContent += '-';
    } else {
        answer.textContent += '-';
    }
});

btnDivide.addEventListener("click", function () {
    if (answer.textContent.split(regex).length > 1) {
        valueFinder();
        answer.textContent += '/';
    } else {
        answer.textContent += '/';
    }
});

btnMultiply.addEventListener("click", function () {
    if (answer.textContent.split(regex).length > 1) {
        valueFinder();
        answer.textContent += '*';
    } else {
        answer.textContent += '*';
    }
});

btnDot.addEventListener("click", function () {
    if (periodChecker()) {
        answer.textContent += '';
    } else {
        answer.textContent += '.';
    }
});

btnEquals.addEventListener("click", function () {
    valueFinder();
});

btnAC.addEventListener('click', function () {
    answer.textContent = '';
});

btnClear.addEventListener('click', function () {
    const string = answer.textContent.split('');
    string.pop()
    answer.textContent = string.join('')
});

function calculate(opp, a, b) {
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

function valueFinder() {
    let arr = answer.textContent.split(regex);
    // this if statement checks if the current value is negative
    if (arr[0] === "" & arr[1] === '-') {
        let a = Number('-' + arr[2]);
        let opp = arr[3];
        let b = Number(arr[4]);
        calculate(opp, a, b);
        zeroChecker();
    } else {
        let a = Number(arr[0]);
        let opp = arr[1];
        let b = Number(arr[2]);
        calculate(opp, a, b);
        zeroChecker();
        console.log(arr) 
    }
}

function zeroChecker() {
    let zero = answer.textContent.split('.')
    if (zero[1] === '00000000') {
        answer.textContent -= '.00000000'
    }
}

function periodChecker() {
    const pArr = answer.textContent.split(regex);
    return pArr[pArr.length - 1].includes('.')
}



