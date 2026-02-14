// ===============================
// GLOBAL COUNTER
// ===============================
let counter = 0;

// update counter display
function updateCounter() {
    document.getElementById("counter").innerText = counter;
}

// ===============================
// SIMPLE FUNCTIONS
// ===============================
function increaseCounter() {
    counter++;
    updateCounter();
}

function decreaseCounter() {
    counter--;
    updateCounter();
}

// ===============================
// SIMPLE FOR LOOP
// ===============================
function runForLoop() {

    let result = "";

    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }

    document.getElementById("forLoopResult").innerText = result;
}

// ===============================
// REPETITION WITH CONDITION
// ===============================
function showOddNumbers() {

    let result = "";

    for (let i = 1; i <= counter; i++) {

        if (i % 2 !== 0) {
            result += i + " ";
        }
    }

    document.getElementById("oddResult").innerText = result;
}

// ===============================
// ARRAYS
// ===============================
function reverseMultiplesOfFive() {

    let arr = [];

    for (let i = counter; i >= 5; i--) {

        if (i % 5 === 0) {
            arr.push(i);
        }
    }

    console.log(arr);
}

// ===============================
// OBJECTS AND FORM FIELDS
// ===============================
function printCarObject() {

    let car = {

        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}

// ===============================
// LOAD CAR DATA
// ===============================
let car1 = { cType: "truck", cMPG: "28", cColor: "red" };
let car2 = { cType: "sedan", cMPG: "35", cColor: "blue" };
let car3 = { cType: "SUV", cMPG: "22", cColor: "black" };

function loadCar(car) {

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

// ===============================
// CHANGING STYLES
// ===============================
function changeColor(color) {

    document.getElementById("colorParagraph").style.color = color;
}

// ===============================
// INITIAL SETUP
// ===============================
window.onload = function () {

    updateCounter();

    // button connections

    document.getElementById("increaseBtn").onclick = increaseCounter;
    document.getElementById("decreaseBtn").onclick = decreaseCounter;

    document.getElementById("forLoopBtn").onclick = runForLoop;

    document.getElementById("oddBtn").onclick = showOddNumbers;

    document.getElementById("arrayBtn").onclick = reverseMultiplesOfFive;

    document.getElementById("printCarBtn").onclick = printCarObject;

    document.getElementById("loadCar1Btn").onclick = function() { loadCar(car1); };
    document.getElementById("loadCar2Btn").onclick = function() { loadCar(car2); };
    document.getElementById("loadCar3Btn").onclick = function() { loadCar(car3); };

    document.getElementById("redBtn").onclick = function() { changeColor("red"); };
    document.getElementById("greenBtn").onclick = function() { changeColor("green"); };
    document.getElementById("blueBtn").onclick = function() { changeColor("blue"); };
};
