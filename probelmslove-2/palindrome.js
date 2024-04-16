//Write a function that checks if a given string is a palindrome.

function isPalindrome(string) {
    for (ind = 0; ind < string.length; ind++) {
        if (string[ind] != string[string.length - 1 - ind]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('malayalam'));
console.log(isPalindrome('awesome'));
