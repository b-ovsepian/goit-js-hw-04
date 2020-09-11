// == task-2 == //
// Написати метод some який приймає масив і ф-ю callback.
// Цей метод поверне true якщо хоча б один елемент масиву пройже
// перевірку з callback callback приймає елемент масиву

const some = function (array, condition) {
  for (const number of array) {
    if (condition(number)) {
      return console.log(true);
    } else continue;
  }
  return console.log(false);
};

some([1, 2, 3, 23, 5], (number) => number > 10); // true (перевіряємо чи елементи > 10)
some([12, 45, 67, 34], (number) => number < 10); // false (перевіряємо чи елементи < 10)
