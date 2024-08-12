let display = document.getElementById("calc-display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    if (display.value === "" && operator !== "-") return;
    display.value += operator;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
