// Variables
let textInputElement = document.getElementById("#text-input");
let checkButton = document.getElementById("#check-btn");
let result = document.getElementById("#result");
//let palindrome = false; //to check if a word is a palindrome
// Check input is valid
function isValidInput(input)
{
    if(input === null)
    {
        //alert("Please input a value");
        return false;
    }
    else if(input.length === 1)
    {
        return true;
    }
}
// get input value
function getInput(input)
{
    if(isValidInput(input))
    {
        let textInput = textInputElement.value;
    }
    else
    {
        return false;
    }
}
// Button event listener
// check if it is palindrome
function isPalindrome(input)
{
    
}
// update result