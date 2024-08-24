const USER_INPUT = <HTMLInputElement>document.getElementById('user-input');
const CHECK_BTN = <HTMLElement>document.getElementById('check-btn');
const CLEAR_BTN = <HTMLElement>document.getElementById('clear-btn');
const RESULTS_DIV = <HTMLElement>document.getElementById('results-div');

const checkValidNumber = (input: string) => {

    if (input === '') {
        return;
    }
    const WHITE_SPACE = '^\\s*';
    const COUNTRY_CODE = '((\\(1\\)|\\+?1)\\s)?';
    const AREA_CODE = '(\\([0-9]{3}\\)|[0-9]{3})\\s*';
    const DASH = '[\\-\\s]?';
    const PHONE_NUMBER = '[0-9]{3}[\\-\\s]?[0-9]{4}\\s*$';
    const PHONE_REGEX = new RegExp(
        `${WHITE_SPACE}${COUNTRY_CODE}${AREA_CODE}${DASH}${PHONE_NUMBER}`
    );

    const P_TAG = document.createElement('p');
    P_TAG.className = 'results-text';
    // @ts-ignore
    PHONE_REGEX.test(input)
        ? (P_TAG.style.color = '#00471b')
        : (P_TAG.style.color = '#82170f');
    P_TAG.appendChild(
        document.createTextNode(
            `${PHONE_REGEX.test(input) ? 'Valid' : 'Invalid'} US number: ${input}`
        )
    );
    RESULTS_DIV.prepend(P_TAG);
};

CHECK_BTN.addEventListener('click', () => {
    checkValidNumber(USER_INPUT.value);
    USER_INPUT.value = '';
});

USER_INPUT.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkValidNumber(USER_INPUT.value);
        USER_INPUT.value = '';
    }
});

CLEAR_BTN.addEventListener('click', () => {
    RESULTS_DIV.textContent = '';
});
