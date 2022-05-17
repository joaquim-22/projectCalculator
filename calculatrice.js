let output = document.querySelector(".output");
let ancienOutput = document.querySelector(".ancienOutput")
let equation = "";
let number = "";
let id = "";
let type  = "";
let historiqueElement = document.querySelector(".historique");
let resultElement = document.querySelector(".result");
let historique = "";
let result = "";

let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        id = this.getAttribute("data-id");
        type = this.getAttribute("data-type");

        switch (type) {
            case "clear":
                clear();
                break;

            case "allClear":
                allClear();
                break;

            case "operator":
                operator();
                break;

            case "racine":
                egalRacine();
                break;
            
            case "round":
                mathRound()
                break;

            case "point":
                pointSymbol();
                break;

            case "egal":
                egal();
                break;

            default:
                defaut();
                break;
        }
    });
}

function allClear() {
    number = ""
    equation = "";
    output.innerHTML = 0;
    ancienOutput.innerHTML = 0;
}

function clear() {
    output.innerHTML = output.innerHTML.slice(0, -1)
    number = output.innerHTML;
    equation = output.innerHTML;
    if(output.innerHTML.length == 0) {
        return output.innerHTML = 0;
    }
}

function operator() {
    equation += id;
    output.innerHTML = number + " " + id;
    number = "";
}

function egalRacine(){
    number = Math.sqrt(equation);
    equation = number;
    output.innerHTML = number;
}

function mathRound (){
    number = Math.round(number)
    output.innerHTML = number;
}

function pointSymbol () {
    if (output.innerHTML.includes('.')) return false;
    number += id;
    equation += id;
    output.innerHTML = number;
}

function egal() {
    newHistorique = document.createElement("p")
    historiqueText = document.createTextNode(equation)
    newHistorique.appendChild(historiqueText)
    historiqueElement.appendChild(newHistorique)

    number = eval(equation);

    if(number == undefined) {
        equation = "";
        number = "";
        return false
    }

    equation = number;

    newResult = document.createElement("p")
    resultText = document.createTextNode("= " + number)
    newResult.appendChild(resultText)
    resultElement.appendChild(newResult)

    output.innerHTML = number;
}

function defaut() {
    number += id;
    equation += id;
    ancienOutput.innerHTML = equation
    output.innerHTML = number;
}

document.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
        document.getElementById("egal").click();
    }

    else if (event.keyCode == 8) {
        document.getElementById("clear").click()
    }

    else if (event.keyCode == 46) {
        document.getElementById("allClear").click()
    }

    else {
        for (let i = 0; i < buttons.length; i++){
            let id = buttons[i].getAttribute("data-id");
            if (id == event.key) {
                console.log()
                buttons[i].click();
            }
        }
    }
});

//Error

window.addEventListener('error', () => {
    alert("Error !!");
    allClear();
})

// Toggle Recap

let historiqueButton = document.querySelector(".historiqueButton")
let windowHistorique = document.querySelector(".windowHistorique")
windowHistorique.style.display = "none"

historiqueButton.addEventListener("click", function toggle() {

    if(windowHistorique.style.display === "none"){
        windowHistorique.style.display = "block";
    }
    else {
        windowHistorique.style.display = "none"
    }
})