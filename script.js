
  let num = ["jsihgs", "aggva", 36, "rokhe", 55, 76, 27, 88, 109, "qiohgiuqahv"]

  function findSum(num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      if (typeof num[i] === 'number') {
        sum += num[i];
      }
    }
    return sum;
  }
  

  function findMinMax(num) {
    let numbersOnly = num.filter(
      function (item) {
      return typeof item === 'number';
    });
  
    let min = Math.min(...numbersOnly);
    let max = Math.max(...numbersOnly);
    return { min: min, max: max };
  }
  var sumOfnum = findSum(num);
  var resultMinMax = findMinMax(num);
  console.log("Сума елементів масиву:", sumOfnum);
  console.log("Мінімальне числове значення:", resultMinMax.min);
  console.log("Максимальне числове значення:", resultMinMax.max);

  let lines = 5
  let f = '';

  for (let i = 1; i <= lines; i++) {
    for (let j = 1; j <= i; j++) {
      f += '#';
    }
    f += '\n';
  }

  alert(f);
