// Сортировка пузырьком, один из самых неэффективных методов.
// Пробегаемся по всему массиву и сравниваем числа парами меняя их местами.

const bubbleSort = () => {
  const array = [
    0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
    3, 32,
  ];
  let count = 0;

  const sort = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < array.length; k++) {
        if (array[k + 1] < array[k]) {
          let temp = array[k];
          array[k] = array[k + 1];
          array[k + 1] = temp;
        }
        count += 1;
      }
    }
    return array;
  };

  console.log("4. Сортировка пузырьком");
  console.log("Массив: ", array);
  console.log("Отсортированный массив: ", sort(array));
  console.log("Количество иттераций: ", count);
  console.log("Длина массива: ", array.length); // O(n^2)
  console.log("\n");
};

export default bubbleSort;
