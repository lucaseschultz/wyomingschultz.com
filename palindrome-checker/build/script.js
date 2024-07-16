const palindromeInput = document.getElementById('text-input');
const palindromeBtn = document.getElementById('check-btn');
const palindromeResponse = document.getElementById('result');
const checkForPalindrome = () => {
    if (palindromeInput.value === '') {
        palindromeResponse.classList.add('hide');
        alert('Please input a value');
    }
    else {
        const palindromeTest = palindromeInput.value.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
        palindromeResponse.innerHTML = `${palindromeInput.value} <strong>${palindromeTest === [...palindromeTest].reverse().join('') ? 'is' : 'is not'}</strong> a palindrome.`;
        palindromeResponse.classList.remove('hide');
    }
    palindromeInput.value = '';
};
palindromeBtn.addEventListener("click", () => {
    checkForPalindrome();
});
palindromeInput.addEventListener("keydown", key => {
    if (key.key === 'Enter') {
        checkForPalindrome();
    }
});
