"use strict";
const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const input = document.getElementById('input');
const output = document.getElementById('output');
const numeralRefs = [
    { numeralStr: '_M', numeralVal: 1000000 },
    { numeralStr: '_C_M', numeralVal: 900000 },
    { numeralStr: '_D', numeralVal: 500000 },
    { numeralStr: '_C_D', numeralVal: 400000 },
    { numeralStr: '_C', numeralVal: 100000 },
    { numeralStr: '_X_C', numeralVal: 90000 },
    { numeralStr: '_L', numeralVal: 50000 },
    { numeralStr: '_X_L', numeralVal: 40000 },
    { numeralStr: '_X', numeralVal: 10000 },
    { numeralStr: '_I_X', numeralVal: 9000 },
    { numeralStr: '_V', numeralVal: 5000 },
    { numeralStr: '_I_V', numeralVal: 4000 },
    { numeralStr: 'M', numeralVal: 1000 },
    { numeralStr: 'CM', numeralVal: 900 },
    { numeralStr: 'D', numeralVal: 500 },
    { numeralStr: 'CD', numeralVal: 400 },
    { numeralStr: 'C', numeralVal: 100 },
    { numeralStr: 'XC', numeralVal: 90 },
    { numeralStr: 'L', numeralVal: 50 },
    { numeralStr: 'XL', numeralVal: 40 },
    { numeralStr: 'X', numeralVal: 10 },
    { numeralStr: 'IX', numeralVal: 9 },
    { numeralStr: 'V', numeralVal: 5 },
    { numeralStr: 'IV', numeralVal: 4 },
    { numeralStr: 'I', numeralVal: 1 }
];
let errText = '';
const convertToNum = (str) => {
    let skip = 0;
    let numeralLocation = 0;
    let splitInput = str.toUpperCase().split('');
    let numeralRefsLocation = 0;
    let count = 0;
    let Error = false;
    splitInput.forEach(function (numeral) {
        if (Error) {
            return null;
        }
        else if (skip > 0) {
            skip -= 1;
        }
        else {
            const numerals2 = numeral + splitInput[numeralLocation + 1];
            const numerals4 = numerals2 + splitInput[numeralLocation + 2] + splitInput[numeralLocation + 3];
            while (numeralRefsLocation < 25) {
                if (numeralRefs[numeralRefsLocation]['numeralStr'] === numerals4) {
                    count += numeralRefs[numeralRefsLocation]['numeralVal'];
                    skip = 3;
                    break;
                }
                else if (numeralRefs[numeralRefsLocation]['numeralStr'] === numerals2) {
                    count += numeralRefs[numeralRefsLocation]['numeralVal'];
                    skip = 1;
                    break;
                }
                else if (numeralRefs[numeralRefsLocation]['numeralStr'] === numeral) {
                    count += numeralRefs[numeralRefsLocation]['numeralVal'];
                    break;
                }
                numeralRefsLocation += 1;
                if (numeralRefsLocation >= 25) {
                    Error = true;
                }
            }
        }
        numeralLocation += 1;
    });
    if (Error) {
        addClass(output, 'alert');
        return 'Please enter a valid input';
    }
    else {
        return `<p>${splitInput.join('')} = ${count}</p>`;
    }
};
const convertToRoman = (num) => {
    let numerals = [];
    numeralRefs.forEach(function (numeralRef) {
        while (num >= numeralRef['numeralVal']) {
            if (num >= 4000) {
                let letters = numeralRef['numeralStr'].split('_').join('');
                numerals.push(`<span class="overline">${letters}</span>`);
            }
            else {
                numerals.push(numeralRef['numeralStr']);
            }
            num -= numeralRef['numeralVal'];
        }
    });
    return `<p>${input.value.split(',').join('')} = ${numerals.join('')}</p>`;
};
const isValid = (str, int) => {
    if (!str.match(/[0-9_ivxlcdm.]/ig) || str.match(/[a-z]/i) && str.match(/[0-9]/)) {
        errText = '<p>Please enter a valid input</p>';
    }
    else if (int < 1) {
        errText = '<p>Please enter a number greater than or equal to 1</p>';
    }
    else {
        // No errors detected
        return true;
    }
    return false;
};
const addClass = (container, effect) => {
    container.classList.add(effect);
};
const removeClass = (container, effect) => {
    container.classList.remove(effect);
};
const updateUI = () => {
    let str = input.value;
    let cleanInt = parseInt(str.split(',').join(''), 10);
    removeClass(output, 'hidden');
    removeClass(output, 'alert');
    if (isValid(str, cleanInt)) {
        console.log('Input Valid');
        if (str.match(/[0-9]/)) {
            output.innerHTML = convertToRoman(cleanInt);
        }
        else {
            output.innerHTML = convertToNum(str);
        }
    }
    else {
        console.log('Input Not Valid');
        output.innerHTML = errText;
        addClass(output, 'alert');
    }
};
form.addEventListener('submit', e => {
    e.preventDefault();
    updateUI();
});
convertButton.addEventListener('click', () => {
    updateUI();
});
