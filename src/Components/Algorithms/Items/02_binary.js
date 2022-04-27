const binarySearch = () => {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let count = 0;

  const search = (array, number) => {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
      middle = Math.floor((start + end) / 2);
      count += 1;

      if (array[middle] === number) {
        found = true;
        position = middle;
        return position;
      }

      if (array[middle] > number) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    return position;
  };
  console.log("2. Бинарный поиск");
  console.log("Массив: ", array);
  console.log("Искомое число: ", 13);
  console.log("Индекс в массиве: ", search(array, 13));
  console.log("Количество иттераций: ", count);
  console.log("\n");
};

export default binarySearch;
