/*
* Palindroma
- Chiedere all’utente di inserire una parola.
- Creare una funzione per capire se la parola inserita è palindroma.

* Pari e Dispari
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
- Generiamo un numero random (sempre da 1 a 5) per il computer (ovviamente usando una funzione).
- Sommiamo i due numeri.
- Stabiliamo se la somma dei due numeri è pari o dispari (ovviamente usando una funzione).
- Dichiariamo chi ha vinto.
*/

const button = document.querySelector('.btn');
console.log(button);

const word = document.getElementById('word');
console.log(word);

button.addEventListener('click', function() {
    const inputWord = document.getElementById('word').value;
    console.log(inputWord);

    let inputReverse = '';
    for (i = inputWord.length - 1; i >= 0; i--) {
        inputReverse += inputWord[ i ]
    } if (inputReverse === inputWord) {
        console.log('la parola è palindroma')
    } else {
        console.log('la parola non è palindroma')
    }
})

