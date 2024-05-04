'use strict';
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Bottone che crea il ticket
const buttonGenerate = document.querySelector('.generate-form');

// Avviene quando si clicca sul bottone genera
buttonGenerate.addEventListener('click', function () {
    console.log('hai cliccato su genera');

    // Dati di input
    const kmInput = document.getElementById('km-input');
    const ageInput = document.getElementById('age-input');

    // Dati per il prezzo del biglietto
    const priceKm = 0.21;
    const underDiscount = 20;
    const overDiscount = 40;

    let price = priceKm * Number(kmInput.value);

    // Se si verificano le condizioni applica i relativi sconti
    if (parseInt(ageInput.value) < 18){
        console.log('sconto under');
        price -= (price / 100) * underDiscount;
    } else if (parseInt(ageInput.value) >= 65) {
        console.log('sconto over');
        price -= (price / 100) * overDiscount;
    }

    console.log(ageInput.value);
    console.log(kmInput.value);
    console.log(price.toFixed(2));
});
