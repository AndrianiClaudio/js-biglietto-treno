// Richiesta numero di chilometri
const km = parseInt(prompt('Inserire il numero di chilometri'));
// console.log(km);
if(!isNaN(km)) { //inserimento val. numerico 
    if(km > 0) { //inserimento km. corretto
        const age = parseInt(prompt("Inserire l'età"));
        // console.log(age);
        if(!isNaN(age)) { //inserimento val.corretto
            if(age >= 0 && age < 140) {
                // il prezzo del biglietto è definito in base ai km(0.21 € al km)
                const priceForKm = 0.21;
                const basePrice = (km * priceForKm).toFixed(2);
                // console.log(basePrice);
                let saleValue = 0; //dichiarazione variabile per salvare lo sconto
                // va applicato uno sconto del 20 % per i minorenni e uno sconto del 40 % per gli over 65.
                if (age < 18) { // Minorenni
                    let sale = 0.20; //1 = 100%
                    saleValue = (basePrice * sale).toFixed(2);
                }
                else if (age > 65) { //Over 65
                    let sale = 0.40;
                    saleValue = (basePrice * sale).toFixed(2);
                }
                // console.log(saleValue);
                // calcolo prezzo con arrotondamento a due cifre
                const salePrice = (basePrice - saleValue).toFixed(2);
                // console.log(salePrice);
                // Stampa dettagli utente e prezzo.
                document.getElementById('ticket-price-container').innerHTML = `
            <!-- stampa dati utente -->
            <div id='ticket-data'>
                <span>Distanza coperta: ${km} Km - Anni: ${age}</span>
            <hr>
            </div>
            <!-- stampa dettagli prezzo -->
            <div id='ticket-price'>
                <p>Sconti: 20% per i minorenni - 40% per gli over 65</p>
                <span>Prezzo base: ${basePrice} &euro; - Valore dello sconto: ${saleValue} &euro;</span>
                <hr>
                <strong>Prezzo complessivo: ${salePrice} &euro;</strong>
            </div>
            `;
           }
           else { //inserimento etá corretto
                document.getElementById('print-error').innerHTML = '<strong>Errore! Inserire una et&aacute; corretta. Ricarica la pagine a riprova.</strong>';
           }
        } else { //errore: inserimento valore non numerico!
            document.getElementById('print-error').innerHTML = '<strong>Errore! Inserito un valore non numerico. Ricarica la pagine a riprova.</strong>';
        }
    }
    else { //errore: inserimento valore non numerico!
        document.getElementById('print-error').innerHTML = '<strong>Errore! Inserire valore per Km positivo. Ricarica la pagine a riprova.</strong>';
    }
} else { //errore: km deve essere maggiore di 0
    document.getElementById('print-error').innerHTML = '<strong>Errore! Inserito un valore non numerico. Ricarica la pagine a riprova.</strong>';
}