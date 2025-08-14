// Variables
let textInputElement = document.getElementById("text-input");
let checkButton = document.getElementById("check-btn");
let result = document.getElementById("result");
//let palindrome = false; //to check if a word is a palindrome

// check if it is palindrome
function isPalindrome(input)
{
    let cleaned = input.replace(/[^a-z0-9]/gi, "").toLowerCase();
    return cleaned === cleaned.split("").reverse().join("");
}
// Button event listener
checkButton.addEventListener("click", function (){
    let textInput = textInputElement.value;
    // Check input is valid
    if(!textInput.trim())
    {
        alert("Please input a value");
        return;
    }
    if(isPalindrome(textInput))
    {
        result.textContent = `${textInput} is a palindrome.`;
    }
    else
    {
        result.textContent = `${textInput} is not a palindrome.`;
    }
});