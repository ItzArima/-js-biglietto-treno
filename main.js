const distanza = parseInt(prompt("Quanti km devi percorrere?"));
const eta = parseInt(prompt("quanti anni hai?"));
console.log("km ed eta " + distanza + " " + eta);

if (eta < 18) {
    var sconto = ((distanza * 0.21) /100)* 20;
    console.log("sconto: " + sconto);  
    var prezzo = ((distanza * 0.21) - sconto);
}
else if (eta > 60){
    var sconto = ((distanza * 0.21) /100)* 40;
    console.log("sconto: " + sconto);  
    var prezzo = ((distanza * 0.21) - sconto);
}
else{
    var prezzo = (distanza * 0.21);
}
var prezzo = prezzo.toFixed(2);
document.write("Ciao! <br> Devi pagare: " + prezzo + "Euro");