
// CONTROLLER FUNCTION(S)
// Get the values from the UI
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // if valid input, generate and display numbers
    if (validateInput(startValue,endValue)) {
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        // call displayNumbers
        displayNumbers(numbers);
    }
}


// LOGIC FUNCTION(S)
// Generate numbers from the startValue to the endValue
function generateNumbers(sValue, eValue) {
    let numbers = [];

    // get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);
    }

    return numbers;
}
// Validate input
function validateInput(sValue, eValue) {
    let output = true;

    // check numbers are integer
    if (!Number.isInteger(Number(sValue)) || !Number.isInteger(Number(eValue))) {
        alert("You must enter integers!")
        output = false;
    }

    // check endValue is greater or equal to startValue
    if (sValue > eValue) {
        alert("End Value must be greater or equal to Start Value!")
        output = false;
    }

    if (eValue - sValue > 1000) {
        alert("The difference between values must be no greater than 1000!")
        output = false;
    }

    return output;
}


// VIEW FUNCTION(S)
// Display the numbers and mark even numbers BOLD
function displayNumbers(numbers) {
    let templateRows ="";

    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let num = numbers[index];

        // if / by 2 with no remainder, then num is even
        if (num % 2 == 0) {
            className = "even";
        }
        else {
            className = "odd";
        }

        templateRows += `<tr><td class="${className} text-center">${num}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}