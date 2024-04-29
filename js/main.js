'use strict';
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const buttonReadText = document.querySelector('.generate-form');
console.log(buttonReadText);

buttonReadText.addEventListener('click', function(){
    const elementInputKm = document.querySelector('[type="text"]');
    console.log(elementInputKm.value);
    const elementInputAge = document.querySelector('[type="number"]');
    console.log(elementInputAge.value);
})

const generaForm = document.getElementById('generaForm');
console.log(generaForm);

generaForm.addEventListener('submit', function (event){
    event.preventDefault();
})

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const prezzoPieno = elementInputKm * 0.21;
let prezzoScontato = prezzoPieno;

if(!isNaN(elementInputKm) && !isNaN(elementInputAge)) {
    console.log('chilometri e età sono dei numeri');
    console.log('Questo è il prezzo iniziale:', prezzoPieno);
    if(elementInputAge < 18) {
        // va applicato uno sconto del 20% per i minorenni
        prezzoScontato = prezzoPieno - (prezzoPieno * 20 / 100);
    } else if(elementInputAge >= 65){
        // va applicato uno sconto del 40% per gli over 65.
        prezzoScontato = prezzoPieno - (prezzoPieno * 40 / 100);
    }

} else {
    console.log('uno dei dati inseriti non è un numero')
}

prezzoScontato = prezzoScontato.toFixed(2);

console.log('Questo è il prezzo finale:', prezzoScontato);
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).