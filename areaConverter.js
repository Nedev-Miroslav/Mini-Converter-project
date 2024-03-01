function attachEventsListeners() {
    let [inputAreaField, convertButton, outputAreaField] = document.getElementsByTagName("input");

    let [inputUnitOption, outputUnitOption] = document.getElementsByTagName("select");

    let convertionRates =  {
        "sqkm": 1000000,
        "sqm": 1,
        "ar": 100,
        "dc": 1000,
        "he": 10000,

    };

    convertButton.addEventListener("click", () => {

        let inputArea = inputAreaField.value;
        let inputUnits = inputUnitOption.value;
        let outputUnits = outputUnitOption.value;
       document.getElementById("outputArea").disabled = false;

        let result = inputArea * convertionRates[inputUnits] / convertionRates[outputUnits];

        outputAreaField.value = result;
        
        
    });
}
