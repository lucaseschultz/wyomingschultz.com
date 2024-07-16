"use strict";
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');
const checkValidNumber = (input) => {
    if (input === '') {
        return;
    }
    const whiteSpace = '^\\s*';
    const countryCode = '((\\(1\\)|\\+?1)\\s)?';
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})\\s*';
    const dash = '[\\-\\s]?';
    const phoneNumber = '[0-9]{3}[\\-\\s]?[0-9]{4}\\s*$';
    const phoneRegex = new RegExp(`${whiteSpace}${countryCode}${areaCode}${dash}${phoneNumber}`);
    const pTag = document.createElement('p');
    pTag.className = 'results-text';
    // @ts-ignore
    phoneRegex.test(input)
        ? (pTag.style.color = '#00471b')
        : (pTag.style.color = '#82170f');
    pTag.appendChild(document.createTextNode(`${phoneRegex.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`));
    resultsDiv.prepend(pTag);
};
checkBtn.addEventListener('click', () => {
    checkValidNumber(userInput.value);
    userInput.value = '';
});
userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkValidNumber(userInput.value);
        userInput.value = '';
    }
});
clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
});
