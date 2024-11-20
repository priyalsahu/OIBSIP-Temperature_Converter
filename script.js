function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;

    if (isNaN(tempInput)) {
        alert('Please enter a valid number');
        return;
    }

    if (inputUnit === 'C') {
        if (outputUnit === 'F') {
            result = (tempInput * 9/5) + 32;
            result = `${tempInput} °C = ${result.toFixed(2)} °F`;
        } else if (outputUnit === 'K') {
            result = tempInput + 273.15;
            result = `${tempInput} °C = ${result.toFixed(2)} K`;
        } else {
            result = `${tempInput} °C = ${tempInput} °C`;
        }
    } else if (inputUnit === 'F') {
        if (outputUnit === 'C') {
            result = (tempInput - 32) * 5/9;
            result = `${tempInput} °F = ${result.toFixed(2)} °C`;
        } else if (outputUnit === 'K') {
            result = (tempInput - 32) * 5/9 + 273.15;
            result = `${tempInput} °F = ${result.toFixed(2)} K`;
        } else {
            result = `${tempInput} °F = ${tempInput} °F`;
        }
    } else if (inputUnit === 'K') {
        if (outputUnit === 'C') {
            result = tempInput - 273.15;
            result = `${tempInput} K = ${result.toFixed(2)} °C`;
        } else if (outputUnit === 'F') {
            result = (tempInput - 273.15) * 9/5 + 32;
            result = `${tempInput} K = ${result.toFixed(2)} °F`;
        } else {
            result = `${tempInput} K = ${tempInput} K`;
        }
    }

    document.getElementById('result').innerText = result;
}
