# Имена

В JavaScript требуется, чтобы вы дали имена  своим переменным, свойствам и  функциям.

- Ограничений на длину имен переменных в JavaScript нет, поэтому экономить на них не стоит.
- Имя может начинатся на a-z, A-Z, $, _

# Зарезервированные слова

>arguments await break case catch class const continue debugger default delete
>do else enum eval export extends false finally for function if implements
>import in Infinity instanceof interface let NaN new null package private
>protected public return static super switch this throw true try typeof
>undefined var void while with yield

# Числа

В JavaScript имеется только один числовой тип — ***number***

Number and number

```javascript

Number.MAX_VALUE == 1.7976931348623157e+308;
Number.MIN_VALUE == 5e-324;

NaN == NaN ?
```

*****

# Операторы инкремента и декремента

 ### Добавление или вычетание единцы к/из значению числовой переменной
 ```javascript
 let guessCount = 100;
 guessCount++; //=> 101
 guessCount--; //=> 100
 ```

*****

 # Полезные методы

 - **Number.NaN** представляет «не число». Эквивалентно глобальному объекту NaN.
 - **Number.isNaN()** определяет, является ли переданное значение NaN
 - **Number.parseInt()** разбирает строковый аргумент и возвращает целое число.
- **Number.isInteger()** определяет, является ли переданное значение целым числом.

*****
# Сравнениея

Операторы <, <=, > и <= в целом работают правильно, когда оба операнда являются или строками, или числами. В большинстве других случаев результат  абсурдный.

Я рекомендую отказаться от использования оператора ==, а также !=. Они перед сравнением выполняют приведение типов, поэтому могут давать ложные срабатывания (и ложные несрабатывания). Вместо них следует пользоваться операторами === и !==.

> сравнения строк 

# Строки

- кавычки
- специальные символы (\n,\t)
- неизменяемые

```javascript
String(thing)
new String(thing)
```
### доступ к символам
```javascript
return 'кот'.charAt(1); // вернёт "о"
```

### Полезные методы

- ***indexOf()*** возвращает индекс первого вхождения указанного значения в строковый объект String, на котором он был вызван, начиная с индекса fromIndex. Возвращает -1, если значение не найдено. *str.indexOf(searchValue, [fromIndex])*
- Свойство ***length*** представляет длину строки.
- ***slice()*** извлекает часть строки и возвращает новую строку. *str.slice(beginSlice[, endSlice])*
- Строковые методы ***toLowerCase ()*** и ***toUpperCase ()*** преобразовывают все символы в строке в нижний или верхний регистр соответственно.
- Метод ***replace()*** возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.  *str.replace(regexp|substr, newSubStr|function[, flags])*

# Массив

>Массивы обычно описываются как «объекты, подобные спискам»; они представляют собой в основном отдельные объекты, которые содержат несколько значений,

```javascript
var sequence = [1, 1, 2, 3, 5, 8, 13];
var random = ['tree', 795, [0, 1, 2]];
```

> Индексация с 0

- получение и изменение по индексу
- длина
- str.split
- str.join
- первый последни элементы (length-1)
- array.push
- array.pop
- unshift() и shift()

# Функции

- синтаксис
```javascript
function имя(параметры) {
  ...тело...
}


function showMessage() {
  alert( 'Всем привет!' );
}

showMessage();
showMessage();
```
- область видимости переменных (локальные, глобальные)
- параметры (дефолтные, лишние)
- возврат значения
```javascript
Пустой return аналогичен return undefined:
```
- callback
- arrow functions;
```javascript
let sum = (a, b) => a + b;

/* Более короткая форма для:

let sum = function(a, b) {
  return a + b;
};
*/

// тоже что и
// let double = function(n) { return n * 2 }
let double = n => n * 2;

alert( double(3) ); // 6


let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
  let result = a + b;
  return result; // при фигурных скобках для возврата значения нужно явно вызвать return
};

```


http://www.itmathrepetitor.ru/zadachi-po-programmirovaniyu/