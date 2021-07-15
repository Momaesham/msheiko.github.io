
# JavaScript

<div align="center">
<br>
<br>
<br>
<br>
<br>
<br>
<span>Особой красотой JavaScript не блещет, но он работает.</span>
<br>
 Дуглас Крокфорд
</div>

*****

# History

- 1992 Сmm
- 1995 CEnvi - Espresso Pages
- 1995 Netscape
- ECMAScript 1 (1997)	Первая редакция.
- ECMAScript 2 (1998)	Внесены редакционные правки.
- ECMAScript 3 (1999)	Добавлены регулярные выражения, try/catch.
- ECMAScript 4	Никогда не выходил.
- ECMAScript 5 (2009)
    - Добавлен "строгий режим".
    - Добавлена поддержка JSON.
    - Добавлен String.trim().
    - Добавлен Array.isArray().
    - Добавлены методы обхода элементов массива.
- ECMAScript 5.1 (2011)	Внесены редакционные правки.

*****

# History

- ECMAScript 2015
    - Добавлены ключевые слова let и const.
    - Добавлены значения параметров по умолчанию.
    - Добавлен Array.find(), Array.findIndex().
- ECMAScript 2016	
    - Добавлен оператор возведения в степень (**).
    - Добавлен Array.prototype.includes.
- ECMAScript 2017
    - Добавлен "паддинг" строки (дополнение до нужной длины).
    - Добавлены новые свойства объекта Object.
    - Добавлены асинхронные функции.
    - Добавлены разделяемая память и атомарные операции.
- ECMAScript 2018
    - Добавлены свойства rest / spread.
    - Добавлены асинхронные итерации.
    - Добавлен Promise.finally().
    - Добавления в объект RegExp.

*****

# TOOLS

- Visual Studio Code, Atom, Sublime Text, WebStorm (PhpStorm)
- Browser DEV TOOLS
- Node.js
- NPM
- Webpack, Gulp, Grunt, Bower

*****

# Source

### Learn

- learn.javascript.ru
- code-basics.com
- hexlet

### Docs

- MDN
- MSDN

*****

# Hello World

```javascript
 alert('Hello World');
```

*****

# Run

### Inline

```html
<script type="text/javascript">
    alert('Hello World');
</script>
```

### External file

```html
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
```

*****

# Арифметические операции

- \* — умножение
- / — деление
- \- — вычитание
- % — остаток от деления
- \*\* — возведение в степень

```javascript
console.log(8 / 2);  // => 4
console.log(3 ** 2); // => 9
console.log(2 * 4 * 5 * 10);
console.log(7 * 3 + (4 / 2) - (8 + (2 - 1))); //=>14
```

*****

# Переменные

- let
- const

Устаревший

- *var*

*****

### camelCase
camelCase должен начинаться со строчной буквы, а первая буква каждого последующего слова должна быть заглавной. Все слова при этом пишутся слитно между собой.

> Пример camelCase для имени переменной camel case var – camelCaseVar.
### snake_case

Чтобы писать в стиле snake_case, нужно просто заменить пробелы знаками подчеркивания. Все слова при этом пишутся строчными буквами. Можно использовать snake_case, смешивая его с camelCase и PascalCase, но, как по мне, при этом теряется сам смысл этого стиля.

> Пример snake_case для имени переменной snake case var – snake_case_var.
### kebab-case

kebab-case похож на snake_case, только в нем пробелы заменяются на дефисы. Слова также пишутся строчными буквами. Опять же, его можно смешивать с camelCase и PascalCase, но в этом нет смысла.

> Пример kebab-case для переменной kebab case var – kebab-case-var.
### PascalCase

В PascalCase каждое слово начинается с заглавной буквы (в отличие от camelCase, где первое слово начинается со строчной).

> Пример PascalCase для переменной pascal case var – PascalCaseVar.
*****

# Число (number)

```javascript
let n = 123;
n = 12.345;
```
Спец. значения
- Infinity
- \-Infinity
- NaN

```javascript
Infinity + 4; // Infinity
Infinity - 4; // Infinity
Infinity * Infinity; // Infinity
alert( "не число" * 2 + 5 ); // NaN
```
>Если где-то в математическом выражении есть ***NaN***, то результатом вычислений с его участием будет ***NaN***.
*****

# Строка (string)

```javascript
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
```
```javascript
let name = "Иван";
// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!
// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3
```

*****

# Логический (boolean) тип

> Может принимать только два значения: true (истина) и false (ложь).
```javascript
let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено
```
```javascript
let isGreater = 4 > 1;
alert( isGreater ); // true (результатом сравнения будет "да")
```

*****

# Специальные значения

- null
- undefined 

*****

# Conditional statements

- if
- if else
- switch

```javascript
let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');
if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}
```

*****

# Switch

```javascript
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]
  case 'value2':  // if (x === 'value2')
    ...
    [break]
  default:
    ...
    [break]
}
```
