console.log('Simon Says')

let arrayRandomNumbers = [];
console.log(arrayRandomNumbers);

// Ciclo FOR che mi permette di stampare in console 5 numeri random diversi
for (let i = 0; i < 5; i++) {
   
// Genero un numero random compreso da 1 a 100 e lo stampo in console
    const randomNumber = getRandomInt(1, 100);
    // console.log(randomNumber);
// Pusho all'interno dell'array vuoto ogni numero generato
    arrayRandomNumbers.push(randomNumber);
}
//Inserisco un allert dell'array creato e lo stampo anche in console
alert(arrayRandomNumbers);
console.log(arrayRandomNumbers);

// Funzione per generare un numero random intero compreso tra due valori
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}