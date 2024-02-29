const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const checkPalindrome = () => {
    const regex = /[^a-zA-Z0-9]/g;

    const textInputLowerCase = textInput.value
        .replace(regex, "")
        .toLowerCase()

    const textFilter = textInput.value
        .toLowerCase()
        .replace(regex, "")
        .split("")
        .reverse()
        .join("")

    if (textFilter === "") {
        alert("Please input a value")
    } else if (textFilter === textInputLowerCase) {
        result.innerHTML = `<span>${textInput.value}</span> is a palindrome.`
    } else {
        result.innerHTML = `<span>${textInput.value}</span> is not a palindrome.`
    }
}

checkButton.addEventListener("click", checkPalindrome);