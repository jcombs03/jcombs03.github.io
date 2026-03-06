// Global variable (at least I hope that's a thing in JS)
let counter = 0;


function updateCounter(){
    let counterDisplay = document.getElementById("counter");
    counterDisplay.innerText = counter;
}

function tickUp(){
    counter ++;
    updateCounter();
}

function tickDown(){
    counter --; // Does allow for negative numbers, never specified to care in instructions so I will not
    updateCounter();
}

// Prints numbers from 0 to counter
function runForLoop(){
    let forLoopResult = document.getElementById("forLoopResult");
    forLoopResult.innerText = ""; // Resets text
    for (let i = 0; i <= counter; i++){
        forLoopResult.textContent += i + " "; // AI suggested .textContent, as .innerText was not adding the spaces.
    }
}

// Prints odd numbers from 0 to counter
function showOddNumbers(){
    let oddNumberResult = document.getElementById("oddNumberResult");
    oddNumberResult.innerText = ""; // Resets text
    for (let i = 0; i <= counter; i++){
        if (i % 2 == 1){
            oddNumberResult.textContent += i + " ";
        }
    }
}

// Adds multiples of 5 to an array, then reverses and prints it
function addMultiplesToArray(){
    // Creates array and adds multiples of 5 to it
    const array = [];
    for (let i = 4; i <= counter; i++){
        if (i % 5 == 0){
            array.push(i);
        }
    }
    
    // Reverses the array then prints it
    array.reverse();
    console.log(array);
}

// Car constructor
function Car(type, mpg, color){
    this.cType = type;
    this.cMPG = mpg;
    this.cColor = color;
}

// Prints new car object using values from the text entry
function printCarObject(){
    const car = new Car(
        document.getElementById("carType").value,
        document.getElementById("carMPG").value,
        document.getElementById("carColor").value
    );
    console.log(car);
}

// Loads car based on button click
function loadCar(x){
    // Might be a better way to do this but I used a switch statement (does not scale well)
    switch(x){
        case 1: 
            console.log(carObject1);
            break;

        case 2: 
            console.log(carObject2);
            break;

        case 3: 
            console.log(carObject3);
            break;
    }
}

// Changes specific paragraph text color based on button click
function changeColor(x){
    let paragraph = document.getElementById("styleParagraph");

    switch(x){
        case 1: 
            paragraph.style.color = "red";
            break;

        case 2: 
            paragraph.style.color = "green";
            break;

        case 3: 
            paragraph.style.color = "blue";
            break;
    }
}