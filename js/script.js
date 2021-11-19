// Richiesta numero di chilometri e età
const km = parseInt(prompt('Inserire il numero di chilometri'));
console.log(km);
const age = parseInt(prompt("Inserire l'età"));
console.log(age);
// il prezzo del biglietto è definito in base ai km(0.21 € al km)
const priceForKm = 0.21;
const basePrice = km * priceForKm;
console.log(basePrice);
// va applicato uno sconto del 20 % per i minorenni e uno sconto del 40 % per gli over 65.
const minorSale = 0.20; //1 = 100%
const over65sale = 0.40;
let saleValue; //variabile per salvare lo sconto
if (age < 18) { // Minorenni
    saleValue = basePrice * minorSale;
}
else if (age > 65) { //Over 65
    saleValue = basePrice * over65sale;
}
console.log(saleValue);
// calcolo prezzo con arrotondamento a due cifre
const salePrice = parseFloat(basePrice - saleValue);
console.log(salePrice);
// Stampa dettagli utente e prezzo.
document.getElementById('ticket-price').innerHTML = `
<span>Numero km: </span>${km}<br>
<span>Anni: </span>${age}<br>
================================================
<p style = "padding: 0;margin: 0;">Sconti: 20% per i minorenni - 40% per gli over 65</p>
================================================<br>
<span>Prezzo base: </span>${basePrice}
<span>Valore dello sconto: </span>${saleValue}
<strong>Prezzo complessivo: </strong>${salePrice}
`;