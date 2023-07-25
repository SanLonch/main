let a = 3;
let b = 0;

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
console.log(addNumbers(a, b));     
console.log(subtractNumbers(a, b));
console.log(multiplyNumbers(a, b));
console.log(divideNumbers(a, b)); 

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

console.log("Мінімальне число: " + minValue);
console.log("Максимальне число: " + maxValue);
