function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("unit").value;
    const toUnit = document.getElementById("convertToUnit").value;
    let result = "";

    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        result = `${temperature} Celsius is ${((temperature * 9/5) + 32).toFixed(2)} Fahrenheit.`;
    } else if (fromUnit === "celsius" && toUnit === "kelvin") {
        result = `${temperature} Celsius is ${(temperature + 273.15).toFixed(2)} Kelvin.`;
    } else if (fromUnit === "celsius" && toUnit === "reaumur") {
        result = `${temperature} Celsius is ${(temperature * 4/5).toFixed(2)} Réaumur.`;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = `${temperature} Fahrenheit is ${((temperature - 32) * 5/9).toFixed(2)} Celsius.`;
    } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        result = `${temperature} Fahrenheit is ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} Kelvin.`;
    } else if (fromUnit === "fahrenheit" && toUnit === "reaumur") {
        result = `${temperature} Fahrenheit is ${((temperature - 32) * 4/9).toFixed(2)} Réaumur.`;
    } else if (fromUnit === "kelvin" && toUnit === "celsius") {
        result = `${temperature} Kelvin is ${(temperature - 273.15).toFixed(2)} Celsius.`;
    } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        result = `${temperature} Kelvin is ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} Fahrenheit.`;
    } else if (fromUnit === "kelvin" && toUnit === "reaumur") {
        result = `${temperature} Kelvin is ${((temperature - 273.15) * 4/5).toFixed(2)} Réaumur.`;
    } else if (fromUnit === "reaumur" && toUnit === "celsius") {
        result = `${temperature} Réaumur is ${(temperature * 5/4).toFixed(2)} Celsius.`;
    } else if (fromUnit === "reaumur" && toUnit === "fahrenheit") {
        result = `${temperature} Réaumur is ${((temperature * 9/4) + 32).toFixed(2)} Fahrenheit.`;
    } else if (fromUnit === "reaumur" && toUnit === "kelvin") {
        result = `${temperature} Réaumur is ${((temperature * 5/4) + 273.15).toFixed(2)} Kelvin.`;
    }

    document.getElementById("result").innerText = result;
}
