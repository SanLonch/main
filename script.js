let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");

if (num1 === "" || num2 === "") {
  alert("Помилка: Одне з полів є порожнім!");
} else {
  let number1 = Number(num1);
  let number2 = Number(num2);

  if (Number.isNaN(number1) || Number.isNaN(number2)) {
    alert("Помилка: Введені значення не є числами!");
  } else {
    let sum = number1 + number2;
    let difference = number1 - number2;
    let product = number1 * number2;


    if (number2 === 0) {
      alert("Помилка: Друге число є нулем!");
      alert("Сума: " + sum + " Різниця: " + difference +" Додаток: " + product + " Ділення: " + "Error");

    } else if (number1 < number2) {
      let confirmResult = confirm("Ви впевнені, що хочете продовжити операцію?");
      if (confirmResult) {
        var division = number1 / number2;
        alert("Сума: " + sum + " Різниця: " + difference +" Додаток: " + product + " Ділення: " + division);
      }
    } else {
      alert(
        "Сума: " + sum + " Різниця: " + difference + " Додаток: " + product + " Ділення: " + division);
    }
  }
}
