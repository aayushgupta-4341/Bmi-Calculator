let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
let button = document.querySelector("#btn");
let result = document.querySelector("#result");
let statusText = document.querySelector("#status");

button.addEventListener("click", function(){

    let height = heightInput.value;
    let weight = weightInput.value;

    if(height === "" || weight === ""){
        alert("Please enter both values");
        return;
    }

    // convert cm to meter
    let heightInMeter = height / 100;

    let bmi = weight / (heightInMeter * heightInMeter);

    bmi = bmi.toFixed(2);

    result.innerText = "Your BMI: " + bmi;

    if(bmi < 18.5){
        statusText.innerText = "You are Underweight";
    }
    else if(bmi >= 18.5 && bmi < 24.9){
        statusText.innerText = "You are Normal";
    }
    else if(bmi >= 25 && bmi < 29.9){
        statusText.innerText = "You are Overweight";
    }
    else{
        statusText.innerText = "You are Obese";
    }

});