/*alert('This works!');

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = 'An error \n' +
                        'ocurred!'; 
parseInt == +var                        

SHORTCUTS:
- Contadores: 
    currentResult++
    currentResult--
Si el ++ va antes, edita la variable y luego la retorna.
Si va despues, retorna la variable y luego la edita.

Arrays:  you can use it to keep track of some elements
[1,2,3]
- Agregar = 
    logEntries = [1] <-- overwrite
    push(logEntries) <-- push an element
console.log(logEntries[0]);

typeof: Muestra el tipo de dato

*/

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {

  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push([logEntry]);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult; //Guarda el resultado para mostrarlo en la descripcion
  let mathOperator;

  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBSTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE" ||
    !enteredNumber //Falsy value
  ) {
    return;
  }

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBSTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("ADD");
}

function substract() {
  calculateResult("SUBSTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
