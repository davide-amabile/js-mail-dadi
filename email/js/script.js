// chidere d'inserire l'email
var email = prompt("Inserire la tua email");

// creare array email
var listEmail = ["azzurro@gmail.com", "rosso@gmail.com", "giallo@gmail.com"];

// controllare se l'email è nella listEmail
for (var i = 0; i < listEmail.length; i++) {
  if (email === listEmail[i]) {
    console.log("Benvenuto");
  }
  else if (email != listEmail[i]) {
    console.log("Riprovare a reinserire l'email");
  }
}
