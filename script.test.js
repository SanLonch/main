//23
// const num = require('./script');

// let num = ["jsihgs", "aggva", 36, "rokhe", 55, 76, 27, 88, 109, "qiohgiuqahv"];

// function findSum(num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (typeof num[i] === 'number') {
//       sum += num[i];
//     }
//   }
//   return sum;
// }

// function findMinMax(num) {
//   let numbersOnly = num.filter(
//     function (item) {
//       return typeof item === 'number';
//     });

//   let min = Math.min(...numbersOnly);
//   let max = Math.max(...numbersOnly);
//   return { min: min, max: max };
// }

// describe('Array Functions', function() {
//   it('should calculate the sum of numeric elements in the array', function() {
//     assert.strictEqual(findSum(num), 391);
//   });

//   it('should find the minimum and maximum numeric values in the array', function() {
//     assert.deepStrictEqual(findMinMax(num), { min: 27, max: 109 });
//   });
// });


//26
// const accumulator = require('./script');

// function testAccumulator() {
//     const accumulator = new Accumulator(5);
    
//     if (accumulator.value === 5) {
//       console.log("Тест конструктора Accumulator пройдено успішно");
//     } else {
//       console.error("Тест конструктора Accumulator НЕ пройдено. Очікуване значення:", 5, "Отримане значення:", accumulator.value);
//     }
    
//     accumulator.increment();
//     if (accumulator.value === 6) {
//       console.log("Тест метода increment для Accumulator пройдено успішно");
//     } else {
//       console.error("Тест метода increment для Accumulator НЕ пройдено. Очікуване значення:", 6, "Отримане значення:", accumulator.value);
//     }
    
//     accumulator.decrement();
//     if (accumulator.value === 5) {
//       console.log("Тест метода decrement для Accumulator пройдено успішно");
//     } else {
//       console.error("Тест метода decrement для Accumulator НЕ пройдено. Очікуване значення:", 5, "Отримане значення:", accumulator.value);
//     }
//   }
  
//   function testCancelableAccumulator() {
//     const cancelableAccumulator = new CancelableAccumulator(10);
    
//     if (cancelableAccumulator.value === 10) {
//       console.log("Тест конструктора CancelableAccumulator пройдено успішно");
//     } else {
//       console.error("Тест конструктора CancelableAccumulator НЕ пройдено. Очікуване значення:", 10, "Отримане значення:", cancelableAccumulator.value);
//     }
    
//     cancelableAccumulator.increment();
//     if (cancelableAccumulator.value === 11) {
//       console.log("Тест метода increment для CancelableAccumulator пройдено успішно");
//     } else {
//       console.error("Тест метода increment для CancelableAccumulator НЕ пройдено. Очікуване значення:", 11, "Отримане значення:", cancelableAccumulator.value);
//     }
    
//     cancelableAccumulator.clear();
//     if (cancelableAccumulator.value === 10) {
//       console.log("Тест метода clear для CancelableAccumulator пройдено успішно");
//     } else {
//       console.error("Тест метода clear для CancelableAccumulator НЕ пройдено. Очікуване значення:", 10, "Отримане значення:", cancelableAccumulator.value);
//     }
//   }
  
//   testAccumulator();
//   testCancelableAccumulator();
  

//28
const photos = require('./script');

describe('Image Zoom Functionality', () => {
  beforeAll(() => {
    setupZoomFunctionality();
  });

  it('should zoom in when clicked', () => {
    const photoElement = document.querySelector('.photo');
    photoElement.click();
    const initialTransform = photoElement.style.transform;

    jest.advanceTimersByTime(18);
    const afterTransform = photoElement.style.transform;

    expect(afterTransform).not.toBe(initialTransform);
  });

  it('should zoom out after zooming in', () => {
    const photoElement = document.querySelector('.photo');
    photoElement.click();

    jest.advanceTimersByTime(18 * 100);
    const afterZoomInTransform = photoElement.style.transform;

    photoElement.click();
    jest.advanceTimersByTime(18 * 100);
    const afterZoomOutTransform = photoElement.style.transform;

    expect(afterZoomOutTransform).not.toBe(afterZoomInTransform);
  });

  it('should stop zooming out at initial scale', () => {
    const photoElement = document.querySelector('.photo');
    photoElement.click();

    jest.advanceTimersByTime(18 * 100);
    const afterZoomInTransform = photoElement.style.transform;

    photoElement.click();
    jest.advanceTimersByTime(18 * 100);
    const afterZoomOutTransform = photoElement.style.transform;

    expect(afterZoomOutTransform).toBe(afterZoomInTransform);
  });
});
