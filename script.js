function limitation(positive) {
    let tryNumber = document.getElementById('try');
    let tryValue = parseInt(tryNumber.innerText);
    if (positive) {
        --tryValue;
        tryNumber.innerText = tryValue;
        if (tryValue == 0) {
            error_messages[0].style.display = 'none';
            error_messages[1].style.display = 'none';
            error_messages[2].style.display = 'block';
            generatePin();
            tryValue = 3; 
        }
    } else {
        tryValue = 3; 
        tryNumber.innerText = tryValue;
    }       
}

function checkSimilarity(number1, number2) {
    let error_messages = document.getElementsByClassName('notify');
    if (number1 == number2) {
        error_messages[0].style.display = 'none';
        error_messages[1].style.display = 'block';
        document.getElementById('inputNumber').value = '';
        document.getElementById('showPin').value = '';
        limitation(false);
    }
    else {
        error_messages[0].style.display = 'block';
        error_messages[1].style.display = 'none';
        document.getElementById('inputNumber').value = '';
        limitation(true);
    }
}

function deleteSubmit(number) {
    const pin = document.getElementById('showPin').value;
    numberBox = document.getElementById('inputNumber');
    let value = numberBox.value;
    if (number == 'Submit') {
        checkSimilarity(value, pin);
    } else if (number == 'C') {
        numberBox.value = '';
    } else if (number == '<') {
        numberBox.value = value.slice(0, value.length-1);
    }
}

function getPin() {
    let pin =  Math.round(Math.random()*10000);
    pinNumber = pin + '';
    if (pinNumber.length == 4) {
        return pin;
    } else {
        return getPin();
    }  
}

function generatePin() {
    document.getElementById('showPin').value = getPin();
    error_messages = document.getElementsByClassName('notify');
    error_messages[0].style.display = 'none';
    error_messages[1].style.display = 'none';
    error_messages[2].style.display = 'none';
}

document.getElementById('calculator').addEventListener('click', function (event) {
    number = event.target.innerText;
    if (!isNaN(number)) {
        numberBox = document.getElementById('inputNumber');
        numberBox.value = numberBox.value + number;
    } else {
        deleteSubmit(number);
    }   
});

