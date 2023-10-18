// console.log('Simon Says')

// let arrayRandomNumbers = [];
// console.log(arrayRandomNumbers);

// for (let i = 0; i < 5; i++) {
   
//     const randomNumber = getRandomInt(1, 100);
//     // console.log(randomNumber);

//     arrayRandomNumbers.push(randomNumber);
// }

// alert(arrayRandomNumbers);
// console.log(arrayRandomNumbers);


// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
// }

// setTimeout(printMyNumbers, 3000);

// function printMyNumbers () {
//     alert([]);
// }
console.log('JS SIMONS');

const numbers = getRandomNumbers(1, 100, 5);
alert(numbers);

setTimeout(() => {

    const userNumbers = [];
    
    for (let i = 0; i < 5; i++) {
        console.log('Chiedo il numero', i + 1);

        const numero = parseInt(prompt('Inserisci uno dei numeri'));
        console.log(numero);

        if(!userNumbers.includes(numero)) {
            userNumbers.push(numero);
        }
    }

    console.log(numbers, userNumbers);

    const guessedNumbers = [];

    for (let i = 0; i < userNumbers.length; i++) {

        const currentNumber = userNumbers[i];
        console.log(numbers.includes(currentNumber), currentNumber);

        if(numbers.includes(currentNumber) && !guessedNumbers.includes(currentNumber)) {
            guessedNumbers.push(currentNumber);
        }
    }

    console.log(guessedNumbers);

    alert('Hai indovinato ' + guessedNumbers.length + ' numeri: ' + guessedNumbers.join(', '));
}, 3000)

function getRandomNumbers (min, max, num) {

    const numbers = [];
   
    while (numbers.length < num) {

        n = getRandomIntInclusive(min, max);

        if (!numbers.includes(n)) {
            numbers.push(n);
        }
    }

    return numbers;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}