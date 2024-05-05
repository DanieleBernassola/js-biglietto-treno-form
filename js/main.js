'use strict';
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Bottone che crea il ticket
const buttonGenerate = document.querySelector('.generate-form');
const buttonReset = document.querySelector('.reset-form');

// Avviene quando si clicca sul bottone genera
buttonGenerate.addEventListener('click', function () {
    console.log('hai cliccato su genera');

    const ticketResult = document.getElementById('generated-ticket');

    // Dati di input
    const userNameInput = document.getElementById('name-user');
    const kmInput = document.getElementById('km-input');
    const ageInput = document.getElementById('age-input');

    // Variabili per risultato del biglietto
    const userNameOutput = document.getElementById('name-output');
    const offerOutput = document.getElementById('offer-output');
    const carOutput = document.getElementById('car-output');
    const codeOutput = document.getElementById('code-output');
    const priceOutput = document.getElementById('price-output');

    // Dati per il prezzo del biglietto
    const priceKm = 0.21;
    const underDiscount = 20;
    const overDiscount = 40;

    let price = priceKm * Number(kmInput.value);

    // Se si verificano le condizioni applica i relativi sconti
    if (ageInput.value === 'under'){
        console.log('sconto under');
        price -= (price / 100) * underDiscount;
    } else if (ageInput.value === 'over') {
        console.log('sconto over');
        price -= (price / 100) * overDiscount;
    }

    console.log(ageInput.value);
    console.log(kmInput.value);
    console.log(price.toFixed(2));

    // Risultato biglietto
    userNameOutput.innerText = userNameInput.value;    
    offerOutput.innerText = ageInput.value;
    carOutput.innerText = Math.ceil(Math.random() * 20);
    codeOutput.innerText = Math.ceil(Math.random() * 89999 + 10000);
    priceOutput.innerText = `${price.toFixed(2)}€`;    

    ticketResult.classList.remove('hidden');
});

buttonReset.addEventListener('click', function() {
    const ticketResult = document.getElementById('generated-ticket');

    ticketResult.classList.add('hidden');
})
