import bigO from "./images/big-o.webp";
import linearSearch from "./Items/01_linear";
import binarySearch from "./Items/02_binary";
import selectionSort from "./Items/03_selection_sort";
import bubbleSort from "./Items/04_bubble_sort";
import recursion from "./Items/06_recursion";

const Algorithms = () => {
  // linearSearch();
  // binarySearch();
  // selectionSort();
  // bubbleSort();
  recursion();
  return (
    <div className="algorithms">
      <h1 className="text-3xl font-bold text-rose-700">Hello, algorithms!</h1>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">Алгоритм</h3>
        <p className="text-base font-medium text-zinc-600">
          Это набор последовательных действий, которые решают определенную
          задачу.
        </p>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">
          Оценка сложности алгоритма
        </h3>
        <p className="text-base font-medium text-zinc-600">
          Сложность алгоритма описывается при помощи О(n). В скобках указано
          количество операций, за которые алгоритм приходит к финальному
          результату, в рассчет всегда берется наихудшая ситуация. Чем быстрее
          растет график, тем менее эффективный алгоритм.
        </p>
        <img className="w-100 my-3" src={bigO} alt="graph" />
        <p className="text-base font-medium text-zinc-600 mb-3">
          <strong>Линейный поиск O(n).</strong> Например, имеется массив
          неотсортированных чисел от 1 до 10, требуется найти число 3. В лучшем
          случае, число найдется за одну иттерацию, если это число будет стоять
          первым в массиве, в худшем случае число найдется за 10 иттераций, что
          равно длине массива, если число оказалось последним.
        </p>
        <div className="text-base font-medium text-zinc-600 mb-3">
          <strong>Бинарный поиск O(log2n).</strong> Данный поиск работает в разы
          быстрее, чем линейный поиск, но в данном случае необходимо чтобы
          массив был отсортирован.
          <ul>
            <li>
              <strong>
                Имеем массив [1,2,3,4,5,6,7,8,9,10]. Ищем 7, алгоритм:
              </strong>
            </li>
            <li>- делим весь массив по полам, получаем 5</li>
            <li>- сравниваем искомае число с полученным, 5 меньше 7</li>
            <li>- выкидываем левую часть массива</li>
            <li>- делим правую часть пополам и сравниваем</li>
            <li>- 8 больше чем 7</li>
            <li>- ... повторяем до тех пор, пока не найдем число</li>
          </ul>
        </div>
        <div className="text-base font-medium text-zinc-600 mb-3">
          <strong>Сравним O(n) с O(logn)</strong>. Если считать, что одна
          операция равна 1мс, то получаем:
          <div className="relative rounded-xl overflow-auto w-full md:w-2/4">
            <div className="shadow-sm overflow-hidden my-8">
              <table className="border-collapse table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      n
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Линейный
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      Бинарный
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      100
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                      100 мс
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      7 мс
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      10 000
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                      10 сек
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      14 мс
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-200 dark:border-slate-600 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      1 000 000
                    </td>
                    <td className="border-b border-slate-200 dark:border-slate-600 p-4 text-slate-500 dark:text-slate-400">
                      11 дней
                    </td>
                    <td className="border-b border-slate-200 dark:border-slate-600 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      32 мс
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithms;
