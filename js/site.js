
// Start or controller function(s)

// Get the values from the UI
function getValues(){
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // validate input
    // parse to integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
    }else{
        alert("You must enter integers")
    }

    // call displayNumbers

}


// Logic function(s)

// Generate numbers from the startValue to the endValue
function generateNumbers(sValue, eValue){
    
    let numbers = [];

    // get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);
    }

    return numbers;
}


// Display or view functions

// Display the numbers and mark even numbers BOLD
function displayNumbers(){

}