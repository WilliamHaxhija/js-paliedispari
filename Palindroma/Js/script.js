// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci una parola.')
console.log(userWord);
console.log(userWord.length)
function isPalindrome (word) {
    let palindrome = '';
    for (let i = word.length - 1; i >= 0; i--) {
        let thisLetter = word[i];
        console.log(thisLetter);
        palindrome += thisLetter;  
    }
    console.log(palindrome);
    return palindrome;
}
if (userWord === isPalindrome(userWord)) {
    alert('Palindromo!')
} else {
    alert('Non è un palindromo!')
}

