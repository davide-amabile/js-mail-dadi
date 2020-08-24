// generare numero random da 1 a 6 giocatore
numPlayer = Math.floor( (Math.random() * 6 ) + 1 );
console.log("Il tuo numero:" + numPlayer);

// generare numero computer
numCpu = Math.floor( (Math.random() * 6 ) + 1 );
console.log("Numero computer:" + numCpu);

// in caso di parità nessuno vince
if ( numPlayer === numCpu) {
  console.log("Nessun vincitore")
}
// se il numero del giocatore è maggiore del computer vince
else if (numPlayer > numCpu) {
  console.log("Complimenti!!! Hai vinto!!! ");
}
//  se il numero del giocatore è minore del computer perde
else if (numPlayer < numCpu) {
  console.log("Peccato hai perso. Ritenta");
}
