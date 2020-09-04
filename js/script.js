/* Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l’utente deve inserire,
un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */


var listaNumeriCasuali = [];
var messaggioAlert = "";

for (i = 0; i < 5; i++) {
  var numeroCasuale = Math.floor(Math.random() * 100) + 1;
  listaNumeriCasuali.push(numeroCasuale);
  if (i == 4) {
    messaggioAlert += numeroCasuale;
  } else {
    messaggioAlert += numeroCasuale + " - ";
  }
}

alert("Memorizza questi numeri: " + messaggioAlert);
