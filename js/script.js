const numberRegex =  /^[0-9]+$/;
const inputFieldCelcius = document.getElementById("inputFieldCelcius");
const inputFieldFahrenheit = document.getElementById("inputFieldFahrenheit");
var labelDescCelcius = document.getElementById("CelciusDesc");
var labelDescFahrenheit = document.getElementById("FahrenheitDesc");

inputFieldCelcius.addEventListener('keypress', function(eventCelcius){
    if(!numberRegex.test(eventCelcius.key)){
        eventCelcius.preventDefault();
    }
})

inputFieldFahrenheit.addEventListener('keypress', function(eventFahrenheit){
    if(eventFahrenheit.key){
        eventFahrenheit.preventDefault();
    }
})

function startConvert(){
    if(labelDescCelcius.innerHTML === "Temperature in Celcius (°C):"){
        let celciusValue=parseInt(inputFieldCelcius.value);
        let fahrenheitValue = celciusValue * (9/5) + 32;
        document.getElementById("inputFieldFahrenheit").value = fahrenheitValue;
        resultText.textContent = "Suhu Celcius x (9/5) + 32";
    }else{
        let celciusValue=parseInt(inputFieldCelcius.value);
        let fahrenheitValue = (celciusValue - 32) * (5/9);
        document.getElementById("inputFieldFahrenheit").value = fahrenheitValue;
        resultText.textContent = "(Suhu Fahrenheit - 32) x 5/9";
    }
}

function reverse(){
    if (labelDescCelcius.innerHTML === "Temperature in Celcius (°C):"){
        labelDescCelcius.innerHTML = "Temperature in Fahrenheit (°F):";
        labelDescFahrenheit.innerHTML = "Temperature in Celcius (°C):";
    } else{
        labelDescCelcius.innerHTML = "Temperature in Celcius (°C):";
        labelDescFahrenheit.innerHTML = "Temperature in Fahrenheit (°F):";
    }
}

function reset(){
    inputFieldCelcius.value = "0";
    inputFieldFahrenheit.value = "";
    document.getElementById("CelciusDesc").innerHTML = "Temperature in Celcius (°C):";
    document.getElementById("FahrenheitDesc").innerHTML = "Temperature in Fahrenheit (°F):";
    resultText.textContent = "";
}