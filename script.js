let currentTotal = 0;
let screenValue = "0";
let lastOperator;

const screen = document.querySelector('.screen');

function buttonPress(value){
    if(isNaN(value)){
        performOperation(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = screenValue;
}

function performOperation(operation){
    switch(operation){
        case 'Clear':
            screenValue = 0;
            currentTotal = 0;
            break;
        case '=':
            if(lastOperator === null){
                return
            }
            performMath(parseInt(screenValue));
            lastOperator = null;
            screenValue = currentTotal;
            currentTotal = 0;
            break;
        case 'Delete':
            Delete();
            break;
        case '+':
        case '-':
        case 'x':
        case '/':
        case 'sin':
        case 'cos':
        case 'tan':
        case 'x^-1':
            handleMath(operation);
            break;
    }
}

function clearValues(){ 
        screenValue = '0';
        currentTotal = 0;
        //lastOperator = null;
}

function Delete(){
    if(screenValue.length === 1){
        screenValue = '0';
    } else{
        screenValue = screenValue.slice(0, -1);
    }
}

function handleMath(operation){
    if(screenValue === '0'){
        return;
    }

    const intScreenValue = parseInt(screenValue);

    if(currentTotal === 0){
        currentTotal = intScreenValue;
    }else{
        performMath(intScreenValue);
    }
    lastOperator = operation;
    screenValue = '0';
}

function performMath(intScreenValue){
    if(lastOperator === '+'){
        handleAddition(intScreenValue);
    }else if(lastOperator === '-'){
        handlesubtraction(intScreenValue);
    }else if(lastOperator === 'x'){
        handleMultiplication(intScreenValue);
    }else if(lastOperator === '/'){
        handleDivision(intScreenValue);
    }else if(lastOperator === 'sin'){
        handleSine(intScreenValue);
    }else if(lastOperator === 'cos'){
        handleCosine(intScreenValue);
    }else if(lastOperator === 'tan'){
        handleTangent(intScreenValue);
    }else if(lastOperator === 'x^-1'){
        handleInverse(intScreenValue);
    }
}

function handleAddition(value){
    currentTotal = currentTotal + value;
}

function handlesubtraction(value){
    currentTotal = currentTotal - value;
}

function handleMultiplication(value){
    currentTotal = currentTotal * value;
}

function handleDivision(value){
    currentTotal = currentTotal / value;
}

function handleSine(value){
    currentTotal = Math.sin((currentTotal + value) * (Math.PI / 180));
}

function handleCosine(value){
    currentTotal = Math.cos((currentTotal + value) * (Math.PI / 180));
}

function handleTangent(value){
    currentTotal = Math.tan((currentTotal + value) * (Math.PI / 180));
}

function handleInverse(value){
    currentTotal = (1 / (currentTotal + value));
}

function handleNumber(numberString){
    if(screenValue === '0'){
        screenValue = numberString;
    }else{
        screenValue = screenValue.concat(numberString);
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonPress(event.target.innerText);
    })
}

init();