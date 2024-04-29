Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

 - definisco una variabile kilometers e salvo il valore di un prompt
 - definisco una variabile age e salvo il valore di un prompt

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)

 - trasformo kilometers in numero da una stringa
 - verifico se kilometers e age sono numeri
 - definisco una variabile prezzoPieno e salvo la moltiplicazione kilometers * 0.21

va applicato uno sconto del 20% per i minorenni

 - trasformo age in numero da una stringa
 - definisco una variabile prezzoScontato
 

va applicato uno sconto del 40% per gli over 65.

 - SE age < 18
   - prezzoScontato = prezzoPieno - prezzoPieno * 20 / 100 e stampo
   ALTRIMENTI SE age > 65
     - prezzoScontato = prezzoPieno - prezzoPieno * 40 / 100 e stampo
   ALTRIMENTI
     - stampo prezzoPieno

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

 - utilizzo .toFixed(2) per arrotondare output a massimo due decimali