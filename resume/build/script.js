"use strict";
const copyEmailBtn = document.getElementById("copy-email-btn");
const copyEmail = () => {
    navigator.clipboard.writeText("lucas@wyomingschultz.com");
};
const emailCopiedAlert = () => {
    copyEmailBtn.innerText = 'Email Copied!';
};
copyEmailBtn.addEventListener('click', () => {
    copyEmail();
    emailCopiedAlert();
});
