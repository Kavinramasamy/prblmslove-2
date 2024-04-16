//Explain the concept of anagram and write 
//a function to check if two strings are anagrams of each other.

// function isAnagram(str1, str2) {
//     var str1 = str1.split('').sort().join("");
//     var str2 = str2.split('').sort().join("");
//     return (str1 === str2)
// }
// console.log(isAnagram('cat', 'act'));
// console.log(isAnagram('cab', 'aab'));


function isAnagram(str1, str2) {    //without using inbulit one
    if (str1 === str2) {
        return true;
    }

    let srt1Length = str1.length;
    let srt2Length = str2.length;

    if (srt1Length !== srt2Length) {
        return false;
    }

    var counts = {};

    for (let i = 0; i < srt1Length; i++) {
        let index = str1.charCodeAt(i) - 97;
        counts[index] = (counts[index] || 0) + 1;
    }

    for (let j = 0; j < srt2Length; j++) {
        let index = str2.charCodeAt(j) - 97;
        if (!counts[index]) {
            return false;
        }
        counts[index]--;
    }

    return true;
}
console.log(isAnagram('car', 'rac'));
console.log(isAnagram('abc', 'bcc'))
