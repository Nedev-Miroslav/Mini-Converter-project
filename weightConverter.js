function attachEventsListeners() {
    let [inputWeightField, convertButton, outputWeightField] = document.getElementsByTagName("input");

    let [inputUnitOption, outputUnitOption] = document.getElementsByTagName("select");

    let convertionRates =  {
        "t": 1000,
        "kg": 1,
        "g": 0.001,
        "oz": 0.0283495
     
    };

    convertButton.addEventListener("click", () => {

        let inputWeight = inputWeightField.value;
        let inputUnits = inputUnitOption.value;
        let outputUnits = outputUnitOption.value;
       document.getElementById("outputWeight").disabled = false;

        let result = inputWeight * convertionRates[inputUnits] / convertionRates[outputUnits];

        outputWeightField.value = result;
        
        
    });
}