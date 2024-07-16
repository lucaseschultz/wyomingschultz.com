const FORM = <HTMLElement>document.getElementById('form');
const CONVERT_BTN = <HTMLElement>document.getElementById('convert-btn');
const INPUT = <HTMLInputElement>document.getElementById('input');
const OUTPUT = <HTMLElement>document.getElementById('output');

type numeral = {numeralStr: string, numeralVal: number};
const NUMERAL_REFS: [numeral, numeral, numeral, numeral, numeral, numeral, numeral, numeral, numeral, numeral, numeral,
    numeral, numeral, numeral, numeral, numeral, numeral, numeral, numeral, numeral, numeral, numeral, numeral, numeral,
    numeral] = [
    {numeralStr: '_M', numeralVal: 1000000},
    {numeralStr: '_C_M', numeralVal: 900000},
    {numeralStr: '_D', numeralVal: 500000},
    {numeralStr: '_C_D', numeralVal: 400000},
    {numeralStr: '_C', numeralVal: 100000},
    {numeralStr: '_X_C', numeralVal: 90000},
    {numeralStr: '_L', numeralVal: 50000},
    {numeralStr: '_X_L', numeralVal: 40000},
    {numeralStr: '_X', numeralVal: 10000},
    {numeralStr: '_I_X', numeralVal: 9000},
    {numeralStr: '_V', numeralVal: 5000},
    {numeralStr: '_I_V', numeralVal: 4000},
    {numeralStr: 'M', numeralVal: 1000},
    {numeralStr: 'CM', numeralVal: 900},
    {numeralStr: 'D', numeralVal: 500},
    {numeralStr: 'CD', numeralVal: 400},
    {numeralStr: 'C', numeralVal: 100},
    {numeralStr: 'XC', numeralVal: 90},
    {numeralStr: 'L', numeralVal: 50},
    {numeralStr: 'XL', numeralVal: 40},
    {numeralStr: 'X', numeralVal: 10},
    {numeralStr: 'IX', numeralVal: 9},
    {numeralStr: 'V', numeralVal: 5},
    {numeralStr: 'IV', numeralVal: 4},
    {numeralStr: 'I', numeralVal: 1}
];
let errText = '';

const convertToNum = (str: string) => {
    let skip = 0;
    let numeralLocation = 0;
    let splitInput = str.toUpperCase().split('');
    let numeralRefsLocation = 0;
    let count = 0;
    let isError = false;
    splitInput.forEach(function (numeral) {
        if (isError) {
            return null;
        } else if (skip > 0) {
            skip -= 1;
        } else {
            const NUMERALS2 = numeral + splitInput[numeralLocation+1];
            const NUMERALS4 = NUMERALS2 + splitInput[numeralLocation+2] + splitInput[numeralLocation+3];
            while (numeralRefsLocation < 25) {
                if (NUMERAL_REFS[numeralRefsLocation]['numeralStr'] === NUMERALS4) {
                    count += NUMERAL_REFS[numeralRefsLocation]['numeralVal'];
                    skip = 3;
                    break;
                } else if (NUMERAL_REFS[numeralRefsLocation]['numeralStr'] === NUMERALS2) {
                    count += NUMERAL_REFS[numeralRefsLocation]['numeralVal'];
                    skip = 1;
                    break;
                } else if (NUMERAL_REFS[numeralRefsLocation]['numeralStr'] === numeral) {
                    count += NUMERAL_REFS[numeralRefsLocation]['numeralVal'];
                    break;
                }
                numeralRefsLocation += 1;
                if (numeralRefsLocation >= 25) {
                    isError = true;
                }
            }
        }
        numeralLocation += 1;
    });
    if (isError) {
        addClass(OUTPUT, 'alert');
        return 'Please enter a valid input';
    } else {
        return `<p>${splitInput.join('')} = ${count}</p>`;
    }
};

const convertToRoman = (num: number) => {
    let numerals: string[] = [];
    NUMERAL_REFS.forEach(function (numeralRef) {
        while (num >= numeralRef['numeralVal']) {
            if (num >= 4000) {
                let letters = numeralRef['numeralStr'].split('_').join('');
                numerals.push(`<span class="overline">${letters}</span>`);
            } else {
                numerals.push(numeralRef['numeralStr']);
            }
            num -= numeralRef['numeralVal'];
        }
    });

    return `<p>${INPUT.value.split(',').join('')} = ${numerals.join('')}</p>`;
};

const isValid = (str: string, int: number) => {
    if (!str.match(/[0-9_ivxlcdm.]/ig) || str.match(/[a-z]/i) && str.match(/[0-9]/)) {
        errText = '<p>Please enter a valid input</p>';
    } else if (int < 1) {
        errText = '<p>Please enter a number greater than or equal to 1</p>';
    } else {
        // No errors detected
        return true;
    }
    return false;
};

const addClass = (container: HTMLElement, effect: string) => {
    container.classList.add(effect);
}
const removeClass = (container: HTMLElement, effect: string) => {
    container.classList.remove(effect);
}

const updateUI = () => {
    let str = INPUT.value;
    let cleanInt = parseInt(str.split(',').join(''), 10);
    removeClass(OUTPUT, 'hidden');
    removeClass(OUTPUT, 'alert');
    if (isValid(str, cleanInt)) {
        console.log('Input Valid');
        if (str.match(/[0-9]/)) {
            OUTPUT.innerHTML = convertToRoman(cleanInt);
        } else {
            OUTPUT.innerHTML = convertToNum(str);
        }
    } else {
        console.log('Input Not Valid');
        OUTPUT.innerHTML = errText;
        addClass(OUTPUT, 'alert');
    }
};


FORM.addEventListener('submit', e => {
    e.preventDefault();
    updateUI();
});

CONVERT_BTN.addEventListener('click', () => {
    updateUI();
});