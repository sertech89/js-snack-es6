/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/



//creo un ARRAY con squadre di calcio

let squadreSerieA = [{
    "nome": "Atalanta",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Bologna",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Cagliari",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Empoli",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Fiorentina",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Genoa",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Inter",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Juventus",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Lazio",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Milan",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Napoli",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Roma",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Salernitana",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Sampdoria",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Sassuolo",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Spezia",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Torino",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Udinese",
    "puntiFatti": 0,
    "falliSubiti": 0,
},
{
    "nome": "Venezia",
    "puntiFatti": 0,
    "falliSubiti ": 0,
},
{
    "nome": "Verona",
    "puntiFatti": 0,
    "falliSubiti": 0,
},

]

//genero NUMERI RANDOM per falli e punti

function getRandom(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}


console.log(getRandom(25, 120));
console.log(getRandom(10, 70));

let team = document.getElementById("team");

for( i = 0; i < squadreSerieA.length; i++ ){
let punti = getRandom(25, 120);
let falli = getRandom(10, 70);

squadreSerieA[i]["puntiFatti"] = punti;
squadreSerieA[i]["falliSubiti"]= falli;
let {nome, falliSubiti} = squadreSerieA[i];

team.innerHTML += `
<div>Il <span style="font-weight: bold;">${nome}</span>ha subito <span style="font-weight: bold;">${falliSubiti}</span> falli durante la stagione.</div>
`
}    

console.log(squadreSerieA);