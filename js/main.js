'use strict';
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const kilometers = Number(prompt('Inserisci i chilometri che vuoi percorrere'));
console.log(kilometers);
const age = Number(prompt('Inserisci la tua età'));
console.log(age);

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const prezzoPieno = kilometers * 0.21;
let prezzoScontato = prezzoPieno;

if(!isNaN(kilometers) && !isNaN(age)) {
    console.log('chilometri e età sono dei numeri');
    console.log('Questo è il prezzo iniziale:', prezzoPieno);
    if(age < 18) {
        // va applicato uno sconto del 20% per i minorenni
        prezzoScontato = prezzoPieno - (prezzoPieno * 20 / 100);
    } else if(age >= 65){
        // va applicato uno sconto del 40% per gli over 65.
        prezzoScontato = prezzoPieno - (prezzoPieno * 40 / 100);
    }

} else {
    console.log('uno dei dati inseriti non è un numero')
}

prezzoScontato = prezzoScontato.toFixed(2);

console.log('Questo è il prezzo finale:', prezzoScontato);
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).