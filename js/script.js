/* Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire,
un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */


// Definisco una variabile per sapere quanti numeri generare/indovinare
var quantiNumeri = 5;

// 1. Definisco una variabile che contenga l'array dei numeri generati
var listaNumeriCasuali = [];

// 2. Genero numeri casuali in base alla quantità scelta all'inizio e popolo l'array
for (var i = 0; i < quantiNumeri; i++) {
  var numeroCasuale = Math.floor(Math.random() * 100) + 1;
  listaNumeriCasuali.push(numeroCasuale);
}

// 3. Mostro un alert che contiene la lista di numeri generati, separati da "-"
var messaggioAlert = listaNumeriCasuali.join(" - ");

alert("Memorizza questi numeri: " + messaggioAlert);
console.log(messaggioAlert);

// 4. Creo un evento/funzione che viene eseguita dopo 30 secondi
setTimeout(controlloNumeri , 5000);

function controlloNumeri() {
  // Al suo interno, creo un array vuoto che conterrà i numeri chiesti all'utente
  var listaNumeriUtente = [];
  // Chiedo all'utente di inserire un numero alla volta, per il numero di volte definito
  // Popolo l'array con tutti i numeri inseriti
  for (var i = 0; i < quantiNumeri; i++) {
    var numeroUtente = parseInt(prompt("Inserisci un numero"));
    listaNumeriUtente.push(numeroUtente);
  }

  // Creo una variabile che traccerà la quantità di numeri esatti digitati
  var contoNumeriEsatti = 0;
  // Creo un array vuoto che conterrà i numeri esatti digitati
  var listaNumeriEsatti = [];

  // Confronto l'array dei numeri generati con quello dei numeri digitati dall'utente
  for (var i = 0; i < quantiNumeri; i++) {
    // Se uno dei numeri digitati è presente nella lista, incremento il counter dei numeri esatti
    // e pusho il numero nell'array dei numeri esatti
    if (listaNumeriCasuali.includes(listaNumeriUtente[i])) {
      contoNumeriEsatti += 1;
      listaNumeriEsatti.push(listaNumeriUtente[i]);
    }
  }

// 5. Infine, mostro un alert che contiene la quantità di numeri indovinati e i numeri stessi, separati da "-"
  var messaggioFinale = listaNumeriEsatti.join(" - ");

  alert("Hai indovinato " + contoNumeriEsatti + " numeri: " + messaggioFinale);

}
