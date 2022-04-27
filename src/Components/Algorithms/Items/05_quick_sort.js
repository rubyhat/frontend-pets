// Быстрая сортировка, берем элемент из середины массива и сравниваем его со всеми
// остальными элементами, сортируя на два массива, те что больше выбранного элемента
// и те что меньше. Затем склеиваем массив из меньших элементов с центральным элементом
// и с массивом бОльших элементов, используя рекурсию повторяем все до тех пор, пока
// длина массива не достигнет единицы.

const quickSort = () => {
  const array = [
    0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
    3, 32,
  ];
  let count = 0;

  const sort = (array) => {
    if (array.length <= 1) return array;

    let middleIndex = Math.floor(array.length / 2);
    let middleNum = array[middleIndex];
    let lessNums = [];
    let greaterNums = [];

    for (let i = 0; i < array.length; i++) {
      count += 1;
      if (i === middleIndex) continue;
      array[i] < middleNum
        ? lessNums.push(array[i])
        : greaterNums.push(array[i]);
    }

    return [...sort(lessNums), middleNum, ...sort(greaterNums)];
  };
  console.log("5. Быстрая сортировка");
  console.log("Массив: ", array);
  console.log("Отсортированный массив: ", sort(array));
  console.log("Количество иттераций: ", count);
  console.log("Длина массива: ", array.length); // O(log2n*n)
  console.log("\n");
};

export default quickSort;
