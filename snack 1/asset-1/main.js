/*Creare un array di oggetti:

Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/




//oggetti che descrivono le bici con NOME E PESO

let biciCorsa = [
    {
        "nome": "Tarmac SL7",
        "peso": 800
    },
    {
        "nome": "Wilier Filante SLR",
        "peso": 870
    },
    {
        "nome": "Wilier Filante SLR",
        "peso": 800
    },
    {
        "nome": "Argon 18 Gallium Pro Disc",
        "peso": 760
    },
    {
        "nome": "Bianchi Specialissima Disc 2021",
        "peso": 750
    },
    {
        "nome": "Giant TCR 2021",
        "peso": 765
    },
    {
        "nome": "Trek Emonda 2021",
        "peso": 698
    },
    {
        "nome": "Orbea 2021",
        "peso": 1080
    },
];




//faccio un CICLO FOR per scoprire la BICI CON IL PESO MINORE

let pesoMinore = biciCorsa[0];
console.log(pesoMinore)

for( i = 0; i < biciCorsa.length; i++ ){
    let bici = biciCorsa[i];
    if( pesoMinore["peso"] > bici["peso"] ){
        pesoMinore = bici;
        
    }
} 
console.log(pesoMinore);  



//stampo le bici con il peso maggiormente MINORE
let {nome, peso} = pesoMinore

let box = document.getElementById("box");

box.innerHTML = `
<div>La ${nome} ha un peso di ${peso} grammi. Il più basso tra tutte le sue concorrenti.</div>
`