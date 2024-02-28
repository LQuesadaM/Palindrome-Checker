const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const checkPalindrome = () => {
    const regex = /[^a-z0-9]/g;
    const textInputLowerCase = textInput.value.toLowerCase()
    const textFilter = textInput.value
        .toLowerCase()
        .replace(regex, "")
        .split("")
        .reverse()
        .join("")

    if (textFilter === "") {
        alert("Please input a value")
    } else if (textFilter === textInputLowerCase) {
        result.textContent = `${textInput.value} is a palindrome.`
    } else {
        result.textContent = `${textInput.value} is not a palindrome.`
    }
}

checkButton.addEventListener("click", checkPalindrome);