const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const checkPalindrome = () => {
    const regex = /[^a-z0-9]/g;
    const textFilter = textInput.value
        .toLowerCase()
        .replace(regex, "")
        .split("")
        .join("")
}

checkButton.addEventListener("click", checkPalindrome);