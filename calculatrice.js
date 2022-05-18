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
                mathRound();
                break;

            case "factorial":
                factorial();
                break;

            case "mathPi":
                pi()
                break;

            case "floor":
                mathFloor();
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
    number = "";
    equation = "";
    output.innerHTML = 0;
    ancienOutput.innerHTML = 0;
}

function clear() {
    output.innerHTML = output.innerHTML.slice(0, -1);
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
    newHistorique = document.createElement("p");
    historiqueText = document.createTextNode(equation + "√");
    newHistorique.appendChild(historiqueText);
    historiqueElement.appendChild(newHistorique);

    number = Math.sqrt(equation);

    newResult = document.createElement("p");
    resultText = document.createTextNode(number);
    newResult.appendChild(resultText);
    resultElement.appendChild(newResult);

    equation = number;
    output.innerHTML = number;
}

function mathRound (){
    newHistorique = document.createElement("p");
    historiqueText = document.createTextNode(equation + " Round");
    newHistorique.appendChild(historiqueText);
    historiqueElement.appendChild(newHistorique);

    number = Math.round(number);
    equation = number;

    newResult = document.createElement("p");
    resultText = document.createTextNode(number);
    newResult.appendChild(resultText);
    resultElement.appendChild(newResult);

    output.innerHTML = number;
}

function mathFloor (){
    newHistorique = document.createElement("p");
    historiqueText = document.createTextNode(equation + " Floor");
    newHistorique.appendChild(historiqueText);
    historiqueElement.appendChild(newHistorique);

    number = Math.floor(number);
    equation = number;

    newResult = document.createElement("p");
    resultText = document.createTextNode(number);
    newResult.appendChild(resultText);
    resultElement.appendChild(newResult);

    output.innerHTML = number;
}

function factorial (){
    newHistorique = document.createElement("p");
    historiqueText = document.createTextNode(equation + "!");
    newHistorique.appendChild(historiqueText);
    historiqueElement.appendChild(newHistorique);

    let val = 1;
    for (var i = 2; i <= equation; i++) {
        val = val * i; 
    }

    equation = val;
    ancienOutput.innerHTML = equation;
    number = val;
    output.innerHTML = number;

    newResult = document.createElement("p");
    resultText = document.createTextNode(val);
    newResult.appendChild(resultText);
    resultElement.appendChild(newResult);
}

function pi () {

    newHistorique = document.createElement("p");
    historiqueText = document.createTextNode(equation + "π");
    newHistorique.appendChild(historiqueText);
    historiqueElement.appendChild(newHistorique);

    number = Math.PI;
    ancienOutput.innerHTML = equation + number;
    equation += number;
    output.innerHTML = number;

    newResult = document.createElement("p");
    resultText = document.createTextNode(number);
    newResult.appendChild(resultText);
    resultElement.appendChild(newResult);
}

function pointSymbol () {
    if (output.innerHTML.includes('.')) return false;
    number += id;
    equation += id;
    output.innerHTML = number;
}

function egal() {
    newHistorique = document.createElement("p");
    historiqueText = document.createTextNode(equation);
    newHistorique.appendChild(historiqueText);
    historiqueElement.appendChild(newHistorique);

    number = eval(equation);

    if(number == undefined) {
        equation = "";
        number = "";
        return false;
    };

    equation = number;

    newResult = document.createElement("p");
    resultText = document.createTextNode(number);
    newResult.appendChild(resultText);
    resultElement.appendChild(newResult);

    output.innerHTML = number;
}

function defaut() {
    number += id;
    equation += id;
    ancienOutput.innerHTML = equation;
    output.innerHTML = number;
}

document.addEventListener("keydown", function(event) {
    if(event.key == "Enter") {
        document.getElementById("egal").click();
    }

    else if (event.key == "Backspace") {
        document.getElementById("clear").click();
    }

    else if (event.key == "Delete") {
        document.getElementById("allClear").click();
    }

    else {
        for (let i = 0; i < buttons.length; i++){
            let id = buttons[i].getAttribute("data-id");
            if (id == event.key) {
                buttons[i].click();
            }
        }
    }
});

//Error

window.addEventListener('error', () => {
    alert("Error !! ");
    newHistorique = "";
    allClear();
})

// Toggle Recap jQuery

$(".historiqueButton").on("click", function () {
    $(".windowHistorique").slideToggle("slow");
    });

//Toggle Buttons Scientifique

$(".scientifButton").on("click", function () {
    $(".scientifiqueButtons").toggle();
    });