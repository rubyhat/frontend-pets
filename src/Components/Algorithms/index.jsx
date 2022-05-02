import bigO from "./images/big-o.webp";
import linearSearch from "./Items/01_linear";
import binarySearch from "./Items/02_binary";
import selectionSort from "./Items/03_selection_sort";
import bubbleSort from "./Items/04_bubble_sort";
import quickSort from "./Items/05_quick_sort";
import recursion from "./Items/06_recursion";
import wideGraph from "./Items/07_graph_in_wide";

const Algorithms = () => {
  // linearSearch();
  binarySearch();
  // selectionSort();
  // bubbleSort();
  quickSort();
  recursion();
  wideGraph();
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
          <ul className="pt-3">
            <li>
              <strong>
                Имеем массив [1,2,3,4,5,6,7,8,9,10]. Ищем 7, алгоритм:
              </strong>
            </li>
            <li>- делим весь массив по полам, получаем 5</li>
            <li>- сравниваем искомое число с полученным, 5 меньше 7</li>
            <li>- выкидываем левую часть массива</li>
            <li>- делим правую часть пополам и сравниваем</li>
            <li>- ... повторяем до тех пор, пока не найдем число</li>
          </ul>
        </div>
        <div className="text-base font-medium text-zinc-600 mb-3">
          <strong>Сравним O(n) с O(logn)</strong>. Если считать, что одна
          операция равна 1мс, то получаем:
          <div className="relative rounded-xl overflow-auto w-full md:w-2/4">
            <div className="shadow-sm overflow-hidden my-4">
              <table className="dark:bg-slate-800 border-collapse table-auto w-full text-sm">
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
                      10 секунд
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
        <div className="text-base font-medium text-zinc-600">
          <strong>Сравним O(log2n*2) с O(n*n)</strong>. Если считать, что одна
          операция равна 1мс, то получаем:
          <div className="relative rounded-xl overflow-auto w-full md:w-2/4">
            <div className="shadow-sm overflow-hidden my-4">
              <table className="dark:bg-slate-800 border-collapse table-auto w-full text-sm">
                <thead>
                  <tr>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      n
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      O(log2n*2)
                    </th>
                    <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">
                      O(n*n)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-800">
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      128
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                      600 мс
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      16 секунд
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                      1024
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                      10 секунд
                    </td>
                    <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                      17 минут
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="py-3">
          <h3 className="text-xl font-bold text-zinc-700">Структуры данных</h3>
          <p className="text-base font-medium text-zinc-600 mb-3">
            <strong>Граф</strong> это некая структура данных, представляющая
            собой множество вершин и набор ребер, то есть соединения между
            парами вершин. Ребра могут быть как однонаправленными, так и
            двунаправленными.
          </p>
          <p className="text-base font-medium text-zinc-600 mb-3">
            <strong>Структура данных "Очередь" (FIFO) — </strong>данная
            структура состоит из каких-то элементов, основной принцип
            заключается в том, что элементы всегда добавляются в конец
            структуры, а извлекаются из ее начала.
          </p>
          <p className="text-base font-medium text-zinc-600 mb-3">
            <strong>Структура данных "Стек" (LIFO) — </strong>структура данных,
            состоит из упорядоченного набора элементов, в котором добавление
            новых элементов и удаление существующих производится с одного конца,
            называемого вершиной стека. Притом первым из стека удаляется
            элемент, который был помещен туда последним, то есть в стеке
            реализуется стратегия «последним вошел — первым вышел».
          </p>
        </div>
        <p className="text-base font-medium text-zinc-600 mb-3">
          В данном репозитории, можно найти код, описывающий различные поиски,
          сортировки, рекурсии и графы с разным уровнем O(n), которые я изучил.{" "}
          <br />
          <a
            className="transition text-rose-700 hover:text-rose-600 underline"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/rubyhat/frontend-pets/tree/main/src/Components/Algorithms/Items"
          >
            https://github.com/rubyhat/frontend-pets
          </a>
        </p>
      </div>
    </div>
  );
};

export default Algorithms;
