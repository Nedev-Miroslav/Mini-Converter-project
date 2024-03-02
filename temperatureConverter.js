function attachEventsListeners() {
    let [inputTemperatureField, convertButton, outputTemperatureField] = document.getElementsByTagName("input");
    let [inputUnitOption, outputUnitOption] = document.getElementsByTagName("select");

    
    convertButton.addEventListener("click", () => {
        let inputTemperature = Number(inputTemperatureField.value);
        let inputUnits = inputUnitOption.value;
        let outputUnits = outputUnitOption.value;
        document.getElementById("outputTemperature").disabled = false;
        
        const conversionRates = {
            'C': { 'C': inputTemperature * 1, 'F': inputTemperature * 9 / 5 + 32, 'K': inputTemperature + 273.15 },
            'F': { 'C': ((inputTemperature - 32) * 5 / 9), 'F': inputTemperature * 1, 'K': (((inputTemperature - 32) * 5) / 9 + 273.15) },
            'K': { 'C': (inputTemperature - 273.15).toFixed(2), 'F': ((inputTemperature - 273.15) * 9 / 5 + 32), 'K': inputTemperature * 1 }
        };
        const result = conversionRates[inputUnits][outputUnits];
        outputTemperatureField.value = result;
    });
}