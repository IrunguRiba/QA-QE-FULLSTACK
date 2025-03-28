
//A function to determine if a given string is a palindrome

function isReverse(sentence){
    let sentence1=sentence.toLowerCase().split('').reverse().join('')
    let sentence2=sentence.toLowerCase().split('').join('')
    if(sentence1===sentence2){
        return true
    }
    else{
        return false
    }
}
console.log(isReverse("A man, a plan, a canal, panama"))
//reversed string
function reversed(name){
    let reversedName=""
for(let i=name.length-1; i>=0; i--){
reversedName+=name[i]
}
return reversedName
}
console.log(reversed("string"))
console.log(reversed("irungu"))
console.log(reversed("Reversed"))

//LONGEST Palindromic Substring
function longestPalindromicString(sentence) {
 let palindrome = "";
 function expand(l, r) { 
    while (l >= 0 && r < sentence.length && sentence[l] === sentence[r]) l--, r++;
     if (r - l - 1 > palindrome.length) palindrome = sentence.slice(l + 1, r);
    }
    for (let i = 0; i < sentence.length; i++) expand(i, i), expand(i, i + 1);
    return palindrome;
}

console.log(longestPalindromicString("babad"));
console.log(longestPalindromicString("cbbd"));

//Check if two strings are anagram

//Remove Dublictes
function duplicates(str) {
 let repeatedChars = [...new Set(str.split(''))];
 return repeatedChars.join('');
}
console.log(duplicates("programming"));
console.log(duplicates("Hello World"));
console.log(duplicates("aaaaaa"));
console.log(duplicates("abcd"));
console.log(duplicates("aabbcc"));
//. Count Palindromes in a String



