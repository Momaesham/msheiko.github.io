# Введение
- оператор `typeof` и функция `typeof()`
- Явное преобразование типов `Number`, `String`
```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string
```
- математические операторы (унарные/бинарные)
- присваивание по цепочке

```javascript
let a, b, c;
a = b = c = 2 + 2;
```
- сокращенные мат операторы
```javascirpt
let n = 2;
n += 5; // теперь n = 7 (работает как n = n + 5)
n *= 2; // теперь n = 14 (работает как n = n * 2)
```
- инкремент / дикремент
```javascript
let counter = 2;
counter++;        // работает как counter = counter + 1, просто запись короче
alert( counter ); // 3

let counter = 2;
counter--;        // работает как counter = counter - 1, просто запись короче
alert( counter ); // 1
```
- постфиксная форма, префиксная форма инкремента и дикремента

# Сравнение

- `>= > < <= !=`
- `===`
### Null, undefined, Nan

```javascript
alert( null === undefined ); // false
```
>При нестрогом равенстве `==` Эти значения равны друг другу и не равны никаким другим значениям

```javascript
alert( null == undefined ); // true
```

# Логика

В JavaScript есть три логических оператора: `||` (ИЛИ), `&&` (И) и `!` (НЕ).

# Циклы

### While
```javascript
while (condition) {
  // код
  // также называемый "телом цикла"
}

let i = 0;
while (i < 3) { // выводит 0, затем 1, затем 2
  alert( i );
  i++;
}

do {
  // тело цикла
} while (condition);
```
> Одно выполнение тела цикла по-научному называется `итерация`

### For
Более сложный, но при этом самый распространённый цикл — цикл `for`.
```javascript
for (начало; условие; шаг) {
  // ... тело цикла ...
}

for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
  alert(i);
}
```

### Прерывание цикла

`break` / `contininue`

# Switch

Конструкция `switch` заменяет собой сразу несколько `if`

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

# Functions

```javascript
function имя(параметры) {
  ...тело...
}
```
> Переменные, объявленные внутри функции, видны только внутри этой функции.

> У функции есть доступ к внешним переменным

> Функция всегда получает копию переменной

> Функция может вернуть результат, который будет передан в вызвавший её код.


