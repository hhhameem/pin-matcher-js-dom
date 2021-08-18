function limitation() {
        error_messages[0].style.display = 'none';
        error_messages[1].style.display = 'none';
        error_messages[2].style.display = 'block';
        generatePin();
}

function checkSimilarity(number1, number2) {
    let error_messages = document.getElementsByClassName('notify');
    let tryNumber = document.getElementById('try');
    let tryValue = parseInt(tryNumber.innerText);
    if (number1 == number2) {
        error_messages[0].style.display = 'none';
        error_messages[1].style.display = 'block';
        document.getElementById('inputNumber').value = '';
        document.getElementById('showPin').value = '';
    }
    else {
        error_messages[0].style.display = 'block';
        error_messages[1].style.display = 'none';
        document.getElementById('inputNumber').value = '';
        --tryValue;
        if (tryValue == 0) {
            limitation();
            tryValue = 3; 
        }
        tryNumber.innerText = tryValue;
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

