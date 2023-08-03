let a = -5;
let b = 6;

function isNumeric(value) {
  return typeof value === 'number' && !isNaN(value);
}

function addNumbers(a, b) {
  if (isNumeric(a) && isNumeric(b)) {
    return a + b;
  } else {
    throw new Error ('Обидва аргументи повинні бути числами.');
  }
}

function subtractNumbers(a, b) {
  if (isNumeric(a) && isNumeric(b)) {
    return a - b;
  } else {
    throw new Error ('Обидва аргументи повинні бути числами.');
  }
}

function multiplyNumbers(a, b) {
  if (isNumeric(a) && isNumeric(b)) {
    return a * b;
  } else {
    throw new Error ('Обидва аргументи повинні бути числами.');
  }
}

function divideNumbers(a, b) {
  if (isNumeric(a) && isNumeric(b)) {
    if (b !== 0) {
      return a / b;
    } else {
      return('Ділення на нуль неможливе.');
    }
  } else {
    throw new Error ('Обидва аргументи повинні бути числами.');
  }
}

function getColor(value) {
  if (value > 0) {
    const brightness = Math.floor(value / (Math.abs(value) + 1) * 255);
    return `rgb(0, ${brightness}, 0)`;
  } else if (value < 0) {
    const brightness = Math.floor(Math.abs(value) / (Math.abs(value) + 1) * 255);
    return `rgb(${brightness}, 0, 0)`;
  } else {
    return 'rgb(0, 0, 0)';
  }
}

const outputDiv = document.getElementById('output');

try {
  const addResult = addNumbers(a, b);
  const subtractResult = subtractNumbers(a, b);
  const multiplyResult = multiplyNumbers(a, b);
  const divideResult = divideNumbers(a, b);

  outputDiv.innerHTML += `<p style="color: ${getColor(addResult)}">Результат додавання: ${addResult}</p>`;
  outputDiv.innerHTML += `<p style="color: ${getColor(subtractResult)}">Результат віднімання: ${subtractResult}</p>`;
  outputDiv.innerHTML += `<p style="color: ${getColor(multiplyResult)}">Результат множення: ${multiplyResult}</p>`;
  outputDiv.innerHTML += `<p style="color: ${getColor(divideResult)}">Результат ділення: ${divideResult}</p>`;
} catch (error) {
  outputDiv.innerHTML += `<p style="color: red">${error.message}</p>`;
}

const numbers = [3, 8, 248, -10, -5, 209, 4];

function findMin(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

const minValue = findMin(numbers);
const maxValue = findMax(numbers);

outputDiv.innerHTML += `<p style="color: ${getColor(minValue)}">Мінімальне число: ${minValue}</p>`;
outputDiv.innerHTML += `<p style="color: ${getColor(maxValue)}">Максимальне число: ${maxValue}</p>`;
