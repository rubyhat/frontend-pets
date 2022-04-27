// Сортировка выбором, сравниваем элемент массива с каждым другим элементом в массиве,
// если нашли число меньше, то меняем элементы местами.

const selectionSort = () => {
  const array = [
    0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
    3, 32,
  ];
  let count = 0;

  const sort = (array) => {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let k = i + 1; k < array.length; k++) {
        if (array[k] < array[minIndex]) {
          minIndex = k;
        }
        count += 1;
      }
      let temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
    return array;
  };

  console.log("3. Сортировка выбором");
  console.log("Массив: ", array);
  console.log("Отсортированный массив: ", sort(array));
  console.log("Количество иттераций: ", count);
  console.log("Длина массива: ", array.length); // O(1/2n^2)
  console.log("\n");
};

export default selectionSort;
