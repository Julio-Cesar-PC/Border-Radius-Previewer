// Initialize container
const container = document.getElementById('container');

// Initialize inputs
const inputTLX = document.querySelector('.inputTLX');
const inputTRX = document.querySelector('.inputTRX');
const inputBLX = document.querySelector('.inputBLX');
const inputBRX = document.querySelector('.inputBRX');

const inputTLY = document.querySelector('.inputTLY');
const inputTRY = document.querySelector('.inputTRY');
const inputBLY = document.querySelector('.inputBLY');
const inputBRY = document.querySelector('.inputBRY');

inputTLX.value = 0;
inputTRX.value = 0;
inputBLX.value = 0;
inputBRX.value = 0;
inputTLY.value = 0;
inputTRY.value = 0;
inputBLY.value = 0;
inputBRY.value = 0;

// Initialize result
const result = document.getElementById('result');
updateResult();

// Initialize buttons
const btncopy = document.querySelector('#btnCopy')

// Copy to clipboard
btncopy.addEventListener('click', () => {
    navigator.clipboard.writeText(result.innerHTML);
    alert(`Copied ${result.innerHTML} to clipboard`);
});

// defining observer class
class Observer {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(subscriber  => subscriber !== observer);
    }

    notify() {
        this.observers.forEach(observer => observer());
    }
}

function update() {
    updateResult();
    container.style.borderRadius = `${inputTLX.value}% ${inputTRX.value}% ${inputBLX.value}% ${inputBRX.value}% / ${inputTLY.value}% ${inputTRY.value}% ${inputBLY.value}% ${inputBRY.value}%`;
}

// Initialize observer
const observer = new Observer();

// Subscribe to observer
observer.subscribe(update);

// Event listeners
inputTLX.addEventListener('input', () => {
    observer.notify();
});

inputTRX.addEventListener('input', () => {
    observer.notify();
});

inputBLX.addEventListener('input', () => {
    observer.notify();
});

inputBRX.addEventListener('input', () => {
    observer.notify();
});

inputTLY.addEventListener('input', () => {
    observer.notify();
});

inputTRY.addEventListener('input', () => {
    observer.notify();
});

inputBLY.addEventListener('input', () => {
    observer.notify();
});

inputBRY.addEventListener('input', () => {
    observer.notify();
});


function updateResult() {
    result.value = `border-radius: ${inputTLX.value}% ${inputTRX.value}% ${inputBLX.value}% ${inputBRX.value}% / ${inputTLY.value}% ${inputTRY.value}% ${inputBLY.value}% ${inputBRY.value}%`; 
}