console.log('Simon Says')

let arrayRandomNumbers = [];
console.log(arrayRandomNumbers);

for (let i = 0; i < 5; i++) {
   
    const randomNumber = getRandomInt(1, 100);
    // console.log(randomNumber);

    arrayRandomNumbers.push(randomNumber);
}

alert(arrayRandomNumbers);
console.log(arrayRandomNumbers);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

setInterval(mySaluto, 30000);

function mySaluto () {
    console.log('Ciaoo');
}