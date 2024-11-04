let display = document.getElementById("display");
    let currentInput = "";
    let operator = "";
    let firstOperand = "";

    function appendValue(value) {
        currentInput += value;
        display.value = currentInput;
    }

    function appendOperator(op) {
        if (currentInput !== "") {
            firstOperand = currentInput;
            operator = op;
            currentInput = "";
        }
    }

    function calculate() {
        if (operator && firstOperand !== "") {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(firstOperand) + parseFloat(currentInput);
                    break;
                case '-':
                    result = parseFloat(firstOperand) - parseFloat(currentInput);
                    break;
                case '*':
                    result = parseFloat(firstOperand) * parseFloat(currentInput);
                    break;
                case '/':
                    result = parseFloat(firstOperand) / parseFloat(currentInput);
                    break;
            }
            display.value = result;
            currentInput = result.toString();
            firstOperand = "";
            operator = "";
        }
    }

    function clearDisplay() {
        currentInput = "";
        operator = "";
        firstOperand = "";
        display.value = "";
    }