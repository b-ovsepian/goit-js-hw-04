// == task-4 == //
// Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.

// Якщо прогрес доставки 100 показувати строку "Done"

// Якщо прогрес доставки < 100 показувати строку "In progress"

// Якщо прогрес доставки null показувати строку "Ready for delivery"

const ordersA = [
  { name: "Phone", price: 12300, deliveryProgress: 50, type: 0 },
  { name: "Computer", price: 230000, deliveryProgress: 100, type: 1 },
  { name: "Tablet", price: 5000, deliveryProgress: null, type: 2 },
];

const ordersB = [
  { name: "Phone", price: 12300, deliveryProgress: 50, type: 0 },
  { name: "Tablet", price: 5000, deliveryProgress: null, type: 2 },
];
const showDeliveryStatus = function (array) {
  const resultArr = [];
  for (const object of array) {
    if (object.deliveryProgress === 100) {
      resultArr.push("Done");
    } else if (object.deliveryProgress === null) {
      resultArr.push("Ready for delivery");
    } else resultArr.push("In progress");
  }
  return console.log(resultArr.join(", "));
};
showDeliveryStatus(ordersA); // "In Progress", "Done", "Ready for delivery"
showDeliveryStatus(ordersB); // "In progress", "Ready for delivery"
