// Snack 3

// Dato l'array di nomi:

// const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
// e dati due numeri min e max (min più piccolo di max).

// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.

// Eseguiamo questo esercizio prima con forEach e poi con filter.


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = 0;
const max = 5;

const newArray = [];

myArray.forEach(
    (element, index) => {
        console.log(element, index);
        if (index > min && index < max) {
            newArray.push[element];
        }
    });

console.log(newArray);



// filter

const newArray2 = myArray.filter(
    (element, index) => {
        if (index > min && index < max) {
            return true;
        }
    });


console.log(newArray2);