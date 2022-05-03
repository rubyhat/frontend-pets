const JavaScript = () => {
  // callbacks & callbacks hell
  // event loop
  // function declaration & expression
  // context
  // область видимости
  // ссылки
  // лямбда функции
  // localStorage, sessions, cookies
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
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">Чистая функция</h3>
        <div className="text-base font-medium text-zinc-600">
          Это строительные блоки в функциональном программировании. Функция
          должна удовлетворять двум условиям, чтобы считаться «чистой»:
          <ul className="py-2">
            <li>
              — Каждый раз функция возвращает одинаковый результат, когда она
              вызывается с тем же набором аргументов
            </li>
            <li>— Нет побочных эффектов</li>
          </ul>
          Чистые функции возвращают одинаковый результат при одинаковых входных
          данных. Например функция, принимающая два аргумента, а внутри
          складывающая их и возвращающая результат сложения, будет чистой
          функцией. Сколько бы раз не вызвали функцию с одними и теми же
          аргументами, она всегда вернет один и тот же результат.
          <p className="py-2">
            Нечистая функция - непостоянный результат, это не круто. Например
            функция принимающая один аргумент, а внутри этот аргумент умножается
            на <strong>Math.random()</strong> и возвращается результат. С
            большей вероятностью, каждый новый вызов вернет новый, не похожий на
            предыдущий, результат.
          </p>
          <p>Примеры побочных эффектов:</p>
          <ul className="py-2">
            <li>— Видоизменение входных параметров</li>
            <li>— console.log</li>
            <li>— HTTP вызовы (AJAX/fetch)</li>
            <li>— Изменение в файловой системе</li>
            <li>— Запросы DOM</li>
          </ul>
          <p>
            По сути, любая работа, выполняемая функцией, не связана с
            вычислением конечного результата.
          </p>
        </div>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">
          Функциональное программирование
        </h3>
        <p className="text-base font-medium text-zinc-600">
          Вкратце, это подход к программированию, при использовании которого
          функции можно передавать другим функциям в качестве параметров и
          использовать функции в качестве значений, возвращаемых другими
          функциями.
        </p>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">
          First-Class Functions
        </h3>
        <p className="text-base font-medium text-zinc-600">
          В JavaScript, как и во многих других языках функции являются
          объектами. Технически, с функциями можно делать все то же, что и с
          объектами, но не стоит это использовать. Если нужен объект, то создаем
          объект.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Функции можно передавать как параметры другим функциям, можно
          назначать переменным, хранить их в массивах, именно поэтому функции в
          js - это <strong>объекты первого класса.</strong>
        </p>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">
          Higher-Order Function
        </h3>
        <p className="text-base font-medium text-zinc-600">
          Функция которая принимает функцию как аргумент или возвращает функцию
          в виде выходного значения. Например стандартные функции map, filter,
          reduce являются функциями высшего порядка.
        </p>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">Область видимости</h3>
        <p className="text-base font-medium text-zinc-600">
          Область видимости — это зона доступности переменных, важная концепция,
          определяющая доступность переменных. Данная концепция лежит в основе
          замыканий, разделяя переменные на глобальные и локальные. Доступность
          переменных ограничена областью видимости, в которой они определены.
          Также области видимости могут быть вложены одна в другую.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Блок кода <strong>{"{...code...}"}</strong> в JavaScript определяет
          область видимости переменных, объявленных с помощью ключевых слов
          const и let. <strong>(ES6)</strong>
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Ключевое слово <strong>var (ES5)</strong> не имеет блочной области
          видимости, блок кода не создает области видимости для переменных,
          объявленных с помощью ключевого слова var. Но это делает функция.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Функции в JavaScript создают область видимости для всех переменных,
          независимо от того, с помощью какого ключевого слова они объявлены
          (var, const или let).
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Модули ES6 также создают область видимости для переменных, функций и
          классов. Модульная область видимости инкапсулирует модули. Это
          означает, что частные переменные (которые не экспортируются)
          используются для собственных нужд модуля и защищены от доступа извне.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Глобальная область видимости является самой внешней областью. Она
          доступна для любой внутренней или локальной области видимости.
          Например, window и document являются глобальными переменными
          (объектами), предоставляемыми браузером.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Лексическая область видимости состоит из внешних областей,
          определенных статически. Любая функция, независимо от места
          выполнения, имеет доступ к переменным из ее лексической области
          видимости (в этом заключается суть замыканий).
        </p>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">Strict mode (ES5)</h3>
        <div className="text-base font-medium text-zinc-600">
          <ul>
            <li>
              - Устраняет некоторые скрытые ошибки в JavaScript, изменяя их на
              явную выдачу ошибок, которые будут в последствии выданы движком.
            </li>
            <li>
              - Устраняет ошибки, которые затрудняют движкам JavaScript
              выполнять оптимизацию.
            </li>
            <li>
              - Запрещает некоторый синтаксис, который с большой долей
              вероятности будет уже идти из коробки в будущих версиях
              JavaScript.
            </li>
          </ul>
        </div>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">
          Замыкание (clojures)
        </h3>
        <p className="text-base font-medium text-zinc-600">
          Замыкание - это функция, содержащая в себе ссылки на переменные из
          внешней области видимости. Т.е. она "замыкает" внешние переменные в
          себе. Это один из двух видов анонимных функций: есть лямбда-функции,
          есть замыкания (clojures).
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          При вызове функции, в ней создаются переменные локальной области
          видимости, т.е. доступные только самой функции. Под эти переменные
          движок JavaScript выделяет память. Когда обычная функция завершает
          свое выполнение, освобождает память, которую выделял раньше, если на
          переменные не осталось ссылок.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          В случае с замыканием, функция возвращается обратно, т.е. ссылки
          остаются, поэтому движок не может освободить память и переменные
          остаются доступными функции, и более никому. Поэтому это и называется
          замыкание, т.к. переменные замкнуты на саму функцию.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Другими словами, чтобы создать замыкание, необходимо вложить функцию в
          функцию, обратиться из вложенной функции к переменным оборачивающей и
          вложенную функцию вернуть наружу. До тех пор, пока возвращенная
          функция остается в доступе, замыкание существует.
        </p>
      </div>
      <div className="py-3">
        <h3 className="text-xl font-bold text-zinc-700">Hoisting</h3>
        <p className="text-base font-medium text-zinc-600">
          Это механизм в JavaScript, в котором переменные и объявления функций,
          передвигаются вверх своей области видимости перед тем, как код будет
          выполнен.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Неважно где были объявлены функция или переменные, все они
          передвигаются вверх своей области видимости, вне зависимости от того
          локальная она или же глобальная.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Механизм передвигает только объявления функции или переменной.
          Назначения переменным остаются на своих местах. JavaScript сначала
          объявляет, а уже затем инициализирует переменные. Объявление
          переменных происходит перед выполнением кода.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Необъявленной переменной при выполнении кода назначается значение
          <strong>undefined</strong> , а так же и тип
          <strong>undefined</strong>. А <strong>ReferenceError </strong>
          появляется при попытке доступа к предварительно необъявленной
          переменной.
        </p>
        <p className="text-base font-medium text-zinc-600 mt-2">
          Необъявленные переменные не существуют до тех пор, пока код
          назначающий их не будет выполнен. Следовательно, указание значения для
          необъявленной переменной, тут же создаёт её как глобальную переменную,
          когда назначение будет выполнено. Это говорит о том, что все
          необъявленные переменные это по факту глобальные переменные.
        </p>
      </div>
    </div>
  );
};

export default JavaScript;
