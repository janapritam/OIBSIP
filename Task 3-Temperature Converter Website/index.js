document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", convertTemperature);
  });
  
  function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelector = document.getElementById("unitSelector");
    const selectedUnit = unitSelector.value;
    
    let convertedTemp;
    let convertedUnit;
  
    if (selectedUnit === "celsius") {
      convertedTemp = (temperatureInput - 32) * 5/9;
      convertedUnit = "Celsius";
    } else if (selectedUnit === "fahrenheit") {
      convertedTemp = (temperatureInput * 9/5) + 32;
      convertedUnit = "Fahrenheit";
    } else if (selectedUnit === "kelvin") {
      convertedTemp = temperatureInput + 273.15;
      convertedUnit = "Kelvin";
    }
  
    const resultArea = document.getElementById("resultArea");
    resultArea.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${convertedUnit}`;
  }
  