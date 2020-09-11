// == task-1 == //
// Написати метод every який приймає масив і ф-ю callback (в якій ми будемо робити різні перевірки)
// Цей метод повертає true якщо кожен елемент масиву пройшов перевірку з callback.
// Якщо хоча б один елемент не проходить перевірку то повертає false, callback приймає елемент масиву

const every = function (array, condition) {
  for (const number of array) {
    if (condition(number)) {
      continue;
    } else return console.log(false);
  }
  return console.log(true);
};

every([1, 2, 3, 4, 5], (number) => number < 10); // true (перевіряємо чи елементи < 10)
every([2, 45, 67, 34], (number) => number > 10); // false (перевіряємо чи елементи > 10)
