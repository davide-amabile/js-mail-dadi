// chidere d'inserire l'email
var email = prompt("Inserire la tua email");

// creare array email
var listEmail = ["azzurro@gmail.com", "rosso@gmail.com", "giallo@gmail.com"];

var mailSistema = false;

// controllare se l'email è nella listEmail
for (var i = 0; i < listEmail.length; i++) {
  if (email === listEmail[i]) {
    mailSistema = true;
  }
}

if (  mailSistema = true) {
  console.log("benvenuto");
} else if ( mailSistema = false) {
  console.log("reinserisci l'email");
}
