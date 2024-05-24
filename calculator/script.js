document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = Array.from(document.getElementsByClassName("btn"));
    let displayValue = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            switch (button.id) {
                case "clear":
                    displayValue = "";
                    break;
                case "backspace":
                    displayValue = displayValue.slice(0, -1);
                    break;
                case "equals":
                    try {
                        displayValue = eval(displayValue);
                    } catch {
                        displayValue = "Error";
                    }
                    break;
                case "divide":
                case "multiply":
                case "subtract":
                case "add":
                    displayValue += {
                        "divide": "/",
                        "multiply": "*",
                        "subtract": "-",
                        "add": "+"
                    }[button.id];
                    break;
                default:
                    displayValue += button.innerText;
            }
            display.innerText = displayValue;
        });
    });
});
