const PALINDROME_INPUT = <HTMLInputElement>document.getElementById('text-input');
const PALINDROME_BTN = document.getElementById('check-btn');
const PALINDROME_RESPONSE = document.getElementById('result');

const checkForPalindrome = () => {
    if (PALINDROME_INPUT.value === '') {
        PALINDROME_RESPONSE.classList.add('hide');
        alert('Please input a value');
    } else {
        const PALINDROME_TEST = PALINDROME_INPUT.value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
        PALINDROME_RESPONSE.innerHTML = `${PALINDROME_INPUT.value} <strong>${
            PALINDROME_TEST === [...PALINDROME_TEST].reverse().join('') ? 'is' : 'is not'}</strong> a palindrome.`;
        PALINDROME_RESPONSE.classList.remove('hide');
    }
    PALINDROME_INPUT.value = '';
};

PALINDROME_BTN.addEventListener("click", () => {
    checkForPalindrome();
});
PALINDROME_INPUT.addEventListener("keydown", key => {
    if (key.key === 'Enter') {
        checkForPalindrome();
    }
});
