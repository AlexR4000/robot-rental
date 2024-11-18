/****************** YOUR NAME: */

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

let modelName = "XYZ";
let duration = 12;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element.
    - check the value of the modelName variable, and use that to calculate the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost;
    if (modelName === "XYZ") {
        totalCost = duration * 100;
    } else if (modelName === "CPRG") {
        totalCost = duration * 213;
    }
    costLabel.innerHTML = "$" + totalCost;
}

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable.
*/

let modelButton = document.getElementById("model-button");

function changeModel() {
    let modelText = document.getElementById("model-text");
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }
    recalculate();
}

modelButton.addEventListener("click", changeModel);

/****************** duration button logic ******************/

/* 
- first, create a variable to represent the "Change Duration" pseudo-button.
- then, create a function called changeDuration() that will
    - create a variable to represent the duration-text span element
    - prompt() the user for a new duration (in days)
    - save the result of the prompt() to the duration variable
    - change the innerHTML of the duration-text span element to this new value
    - recalculate() the total cost
*/

let durationButton = document.getElementById("duration-button");

function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = parseInt(prompt("Enter new duration (in days):"), 10);
    if (newDuration && newDuration > 0) {
        duration = newDuration;
    }
    durationText.innerHTML = duration + " days";
    recalculate();
}

durationButton.addEventListener("click", changeDuration);
