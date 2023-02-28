const numberOneInput = document.getElementById("numberOne");
const numberTwoInput = document.getElementById("numberTwo");
const addValuesButton = document.getElementById("addValues");
const resultDiv = document.getElementById("result");
const errorBox = document.getElementById("error");

const handleAdditionError = (inputs, numbers) => {
    const fullMessage = inputs.reduce((message, str, index) => {
        if (inputsAreValid(numbers[index])) {
            return message + "";
        }
        else {
            return message + `${str} is not a number. `;
        }
    }, "Please enter two valid numbers! ");

    errorBox.classList.remove("Invisible");
    errorBox.innerText = fullMessage;
};

const hideErrors = () => {
    errorBox.classList.add("Invisible");
};

hideErrors();
addValuesButton.addEventListener("click", () => {
    hideErrors();
    const inputs = [numberOneInput.value, numberTwoInput.value];
    const parsedInputs = parsedInputs(...inputs);
    if (inputsAreValid(...parseInputs)) {
        const [numA, numB] = parsedInputs;
        resultDiv.innerText = "";
        handleAdditionError(inputs, parsedInputs);
    }
});
