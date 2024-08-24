const COPY_EMAIL_BTN = <HTMLElement>document.getElementById("copy-email-btn");

const copyEmail = () => {
    navigator.clipboard.writeText("lucas@wyomingschultz.com");
};

const emailCopiedAlert = () => {
    COPY_EMAIL_BTN.innerText = 'Email Copied!';
};

COPY_EMAIL_BTN.addEventListener('click', () => {
    copyEmail();
    emailCopiedAlert();
});