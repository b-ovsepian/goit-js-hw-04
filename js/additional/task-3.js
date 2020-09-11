// == task-3 == //
// Створити метод compact який приймає масив і вертає новий
// де відсутні будь - які значення що при переведені в bool дають false

const compact = function (array) {
  const resultArr = [];
  for (const element of array) {
    if (element) {
      resultArr.push(element);
    } else continue;
  }
  return console.log(resultArr);
};

compact([1, 0, "", null, "Hello"]); // [1,'Hello']
