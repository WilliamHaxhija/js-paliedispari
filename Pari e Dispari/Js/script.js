//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Ricavo i dati dall'utente
const userEvenOrOdd = prompt('Pari o Dispari?');
console.log('utente - ' + userEvenOrOdd);
const userNumber = parseInt(prompt('Segli un numero da 1 a 5'));
console.log('utente - ' + userNumber);
//Genero numero per pc
const pcNumber = Math.floor(Math.random() * 5) + 1;
console.log('pc - ' + pcNumber);
//Sommo i numeri
const sumNumber = userNumber + pcNumber;
console.log('somma - ' + sumNumber);
//Creo una funzione che stabilisca se la somma è pari o dispari
function isEvenOrOdd (sum) {
    if (sum % 2 === 0) {
        sum = 'Pari';
    } else {
        sum = 'Dispari';
    }
    return sum;
}
let userMessage = isEvenOrOdd (sumNumber);
console.log(userMessage);
//Dichiaro chi ha vinto
if (userMessage === userEvenOrOdd) {
    alert('Hai vinto!');
} else {
    alert('Hai perso!');
}
