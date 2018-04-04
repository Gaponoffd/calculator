
var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operation'),
    decimalBtn = document.querySelector('#decimal'),
    clearBtns = document.querySelectorAll('.clear-btn'),
    display = document.querySelector('#display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';

for(var i=0; i<numbers.length; i++){
    var number = numbers[i];
    number.addEventListener('click', function(e) {
        numberPress(e.target.textContent);
    });
};
for(var i=0; i<operations.length; i++){
    var operation = operations[i]
    operation.addEventListener('click', function(e) {
        operationPress(e.target.textContent)
    });
};
for(var i=0; i<clearBtns.length; i++){
    var clearBtn = clearBtns[i];
    clearBtn.addEventListener('click', function(e) {
        clearBtnPress(e.srcElement.id);
    });
};
decimalBtn.addEventListener('click', decimalBtnPress);

function numberPress(number) {
    if(MemoryNewNumber) {
        display.value = number;
        MemoryNewNumber = false;
    } else {
        if(display.value === '0'){
            display.value = number;
        } else {
            display.value += number;
        } 
    }
    console.log(MemoryNewNumber)
};
function operationPress(op) {
    var localOrerationMemory = parseFloat(display.value);
    if(MemoryNewNumber && MemoryPendingOperation!== '='){
        localOrerationMemory = MemoryCurrentNumber;
    } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+') {
            MemoryCurrentNumber += parseFloat(localOrerationMemory);
        } else if(MemoryPendingOperation === '-') {
            MemoryCurrentNumber -= parseFloat(localOrerationMemory);
        } else if(MemoryPendingOperation === '*') {
            MemoryCurrentNumber *= parseFloat(localOrerationMemory);
        } else if(MemoryPendingOperation === '/') {
            MemoryCurrentNumber /= parseFloat(localOrerationMemory);  
        } else {
            MemoryCurrentNumber = localOrerationMemory;
        }
        display.value = MemoryCurrentNumber;
        MemoryPendingOperation = op;
        
    }
}
function decimalBtnPress() {
    var localDecimaMemory = display.value;
    if (MemoryNewNumber) {
        localDecimaMemory = '0.';
        MemoryNewNumber = false;
    } else {
        if (localDecimaMemory.indexOf('.') === -1)
        localDecimaMemory += '.';
    }
    display.value = localDecimaMemory;
}
function clearBtnPress(id) {

    if(id === 'ce') {
        display.value = '0';
        MemoryNewNumber = true;
    } else if (id === 'c') {
        display.value = '0';
        MemoryNewNumber = true;
        MemoryCurrentNumber = 0;
        MemoryPendingOperation = '';
    }
    console.log('клик по ' + id + '!');
}

    