// Richiesta numero di chilometri e età
const km = parseInt(prompt('Inserire il numero di chilometri'));
// console.log(km);
const age = parseInt(prompt("Inserire l'età"));
// console.log(age);
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
const priceForKm = 0.21;
let price = km * priceForKm;
// console.log(price);
// va applicato uno sconto del 20 % per i minorenni e uno sconto del 40 % per gli over 65.
const minorSale = 0.20; //1 = 100%
const over65sale = 0.40;
if (age < 18) { // Minorenni
    price *= (1 - minorSale);
    console.log(price);
}
else if (age > 65) { //Over 65
    price *= (1 - over65sale);
    console.log(price);
}
// L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.