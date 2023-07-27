if([].length){
  console.log("В об'єкті є елементи")
}else{
  console.log("Об'єкт пустий")
}

let user = {
  name: 'Олександр',
  age: 16,
  sayHello: function() {
    console.log('Привіт, я ' + this.name + ', мені ' + this.age + ' років')
  }
}
user.sayHello();

const calculator = {

  ask: function() {
    this.num1 = parseFloat(prompt('Введіть перше число:'));
    this.num2 = parseFloat(prompt('Введіть друге число:'));
  },

  sum: function() {
    return this.num1 + this.num2;
  },

  mul: function() {
    return this.num1 * this.num2;
  }
};
calculator.ask();
console.log('Сума чисел:', calculator.sum());
console.log('Добуток чисел:', calculator.mul());
