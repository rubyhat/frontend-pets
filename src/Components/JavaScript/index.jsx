const JavaScript = () => {
  return (
    <div className="javascript">
      <h1 className="text-3xl font-bold text-rose-700">Hello, JavaScript!</h1>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">JavaScript</h3>
        <p className="text-base font-medium text-zinc-600">
          Это мультипарадигменный язык программирования, в основном я использую
          функциональный стиль написания кода, придерживаеся ECMAScript 6+.
          JavaScript не предоставляет низкоуровневый доступ к памяти или
          процессору, потому что изначально был создан для браузеров, не
          требующих этого. Это однопоточный язык, в этом есть свои плюсы и
          минусы. Вкратце, движок браузера парсит скрипты, затем компилирует в
          машинный язык и после отрабатывает код.
        </p>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">Типы данных</h3>
        <div className="text-base font-medium text-zinc-600">
          Всего в JS выделяют 8 типов данных:
          <ul className="py-2">
            <li>
              <strong>Number</strong> - для любых чисел: целочисленных или чисел
              с плавающей точкой; целочисленные значения ограничены диапазоном
              ±(2^53-1).
            </li>
            <li>
              <strong>BigInt</strong> - для целых чисел произвольной длины.
            </li>
            <li>
              <strong>String</strong> - может содержать ноль или больше
              символов, нет отдельного символьного типа.
            </li>
            <li>
              <strong>Boolean</strong> - для true / false.
            </li>
            <li>
              <strong>null</strong> - для неизвестных значений – отдельный тип,
              имеющий одно значение null.
            </li>
            <li>
              <strong>undefined</strong> - для неприсвоенных значений –
              отдельный тип, имеющий одно значение undefined.
            </li>
            <li>
              <strong>Object</strong> - для более сложных структур данных.
            </li>
            <li>
              <strong>Symbol</strong> - для уникальных идентификаторов.
            </li>
          </ul>
          При помощи оператора <strong>typeof</strong> можно проверить тип
          аргумента. Имеется историческая ошибка с <strong>null</strong> и
          особым образом обрабатываются <strong>функции.</strong>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
