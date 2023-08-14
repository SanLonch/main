// //23
// let num = ["jsihgs", "aggva", 36, "rokhe", 55, 76, 27, 88, 109, "qiohgiuqahv"]

// function findSum(num){
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
//     return typeof item === 'number';
//   });

//   let min = Math.min(...numbersOnly);
//   let max = Math.max(...numbersOnly);
//   return { min: min, max: max };
// }
// var sumOfnum = findSum(num);
// var resultMinMax = findMinMax(num);
// console.log("Сума елементів масиву:", sumOfnum);
// console.log("Мінімальне числове значення:", resultMinMax.min);
// console.log("Максимальне числове значення:", resultMinMax.max);

// let lines = 5
// let f = '';

// for (let i = 1; i <= lines; i++) {
//   for (let j = 1; j <= i; j++) {
//     f += '#';
//   }
//   f += '\n';
// }

// alert(f);


//26
// class Accumulator {
//     constructor(initialValue) {
//       this.value = initialValue;
//     }
  
//     increment() {
//       this.value++;
//     }
  
//     decrement() {
//       this.value--;
//     }
//   }
  
//   class CancelableAccumulator extends Accumulator {
//       constructor(initialValue) {
//         super(initialValue);
//         this.initialValue = initialValue;
//       }
    
//       clear() {
//         this.value = this.initialValue;
//       }
//     }
  
//   const accumulator = new Accumulator(5);
//   console.log(accumulator.value);
  
//   accumulator.increment();
//   console.log(accumulator.value);
  
//   accumulator.decrement();
//   console.log(accumulator.value);
  
//   const cancelableAccumulator = new CancelableAccumulator(10);
//   console.log(cancelableAccumulator.value);
  
//   cancelableAccumulator.increment();
//   console.log(cancelableAccumulator.value);
  
//   cancelableAccumulator.clear();
//   console.log(cancelableAccumulator.value);


//28
const photos = document.querySelectorAll('.photo');

const initialScale = 1.0;
const targetScale = 1.5;
const animationSpeed = 0.05;

photos.forEach((photo) => {
  let isZoomed = false;
  let currentScale = initialScale;
  let intervalId;

  photo.addEventListener('click', () => {
    clearInterval(intervalId);

    intervalId = setInterval(() => {
      if (isZoomed) {
        currentScale = currentScale - animationSpeed;
        if (currentScale <= initialScale) {
          currentScale = initialScale;
          isZoomed = false;
          clearInterval(intervalId);
        }
      } else {
        currentScale = currentScale + animationSpeed;
        if (currentScale >= targetScale) {
          currentScale = targetScale;
          isZoomed = true;
          clearInterval(intervalId);
        }
      }
      photo.style.transform = `scale(${currentScale})`;
    }, 18);
  });
});
