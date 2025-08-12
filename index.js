// Variables
let textInputElement = document.getElementById("text-input");
let checkButton = document.getElementById("check-btn");
let result = document.getElementById("result");
//let palindrome = false; //to check if a word is a palindrome
// Check input is valid
function isValidInput(input)
{
    if(!input)
    {
        alert("Please input a value");
        return false;
    }
    return true;
}
// check if it is palindrome
function isPalindrome(input)
{
    return input === input.split("").reverse().join("");
}
// Button event listener
checkButton.addEventListener("click", function (){
    let textInput = textInputElement.value.trim();

    if(isValidInput(textInput))
    {
        if(isPalindrome(textInput))
        {
            result.textContent = `"${textInput}" is a palindrome.`;
        }
        else
        {
            result.textContent = `"${textInput}" is not a palindrome.`;
        }
    }
});