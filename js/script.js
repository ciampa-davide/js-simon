// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati

$(document).ready(
  function(){
    var numbers = [];
    var userNmr= [];
    for (var i = 0; i < 5; i++) {
      var remember = randomComputer(0, 9);
      console.log(remember);
      numbers.push(remember);
    }
    alert(numbers);

    var time = 5;
    var countdown = setInterval(function(){
      $(".square").text(time);
      time= time - 1;

      if(time == -1)
      for(i = 0; i < 5; i++){
        var nmr = prompt("E' ora di testare la tua memoria. Inserisci i numeri: ");
        userNmr.push(nmr);
      }
      console.log(userNmr)
    }, 1000)
  }
)


function randomComputer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
