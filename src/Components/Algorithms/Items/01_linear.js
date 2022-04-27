const linearSearch = () => {
  const array = [1, 4, 7, 2, 3, 9, 8, 11, 5, 10, 6];
  let count = 0;

  const search = (array, number) => {
    for (let i = 0; i < array.length; i++) {
      count += 1;
      if (array[i] === number) {
        return i;
      }
    }
    return null;
  };
  console.log("1. Линейный поиск");
  console.log("Массив: ", array);
  console.log("Искомое число: ", 6);
  console.log("Индекс в массиве: ", search(array, 6));
  console.log("Количество иттераций: ", count);
  console.log("\n");
};

export default linearSearch;
