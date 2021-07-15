# Деструктуризация массива

```javascript
const arr = ['apple','cherry', 'pear', 'melon'];
let [apple, cherry] = arr;
console.log(apple);
console.log(cherry);
```
> Пропуск элемента `,`
> Остаточные значения `...`

### Присваивание объектам

```javascript
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya
```

### Object Entries

> `Object.entries(obj)` метод возвращает массив собственных перечисляемых свойств указанного объекта в формате `[key, value]`

```javascript
const object1 = {
  a: 'somestring',
  b: 42
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed

```

### Значения по умолчанию

```javascript
// значения по умолчанию
let [name = "Guest", surname = "Anonymous"] = ["Julius"];

alert(name);    // Julius (из массива)
alert(surname); // Anonymous (значение по умолчанию)
```

### Работа с объектами

> У нас есть существующий объект с правой стороны, который мы хотим разделить на переменные. Левая сторона содержит «шаблон» для соответствующих свойств. В простом случае это список названий переменных в `{...}`.

```javascript
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200


---


// изменён порядок в let {...}

let {height, width, title} = { title: "Menu", height: 200, width: 100 }

---

//шаблоны с :

let {width: w, height: h, title} = options;

```

# Оставшиеся параметры

Если последний именованный аргумент функции имеет префикс `...`, он автоматически становится массивом с элементами от `0` до `theArgs.length` в соответствии с актуальным количеством аргументов, переданных в функцию.

```javascript
function(a, b, ...theArgs) {
  // ...
}
```
---

```javascript
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a); 
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs); 
}

myFun("один", "два", "три", "четыре", "пять", "шесть");
```

- оставшиеся параметры включают только те, которым не задано отдельное имя
- объект `arguments` не является массивом, в то время как оставшиеся параметры являются экземпляром `Array` 

> Оставшиеся парамерты могут быть деструктуризованы (только массивы)

```javascript
function f(...[a, b, c]) {
  return a + b + c;
}

f(1)          // NaN (b и c равны undefined)
f(1, 2, 3)    // 6
f(1, 2, 3, 4) // 6 (четвёртый параметр не деструктурирован)
```
# Arguments

Объект `arguments` — это подобный массиву объект, который содержит аргументы, переданные в функцию.

```javascript
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);
```

# Геттеры и Сеттеры

> Свойства-аксессоры представлены методами: «геттер» – для чтения и «сеттер» – для записи

```javascript
let obj = {
  get propName() {
    // геттер, срабатывает при чтении obj.propName
  },

  set propName(value) {
    // сеттер, срабатывает при записи obj.propName = value
  }
};
```


```javascript
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
```

### defineProperty

[MDN Define Property](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

```javascript
let user = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

alert(user.fullName); // John Smith

for(let key in user) alert(key); // name, surname
```


# Date

> `new Date()` Создаёт экземпляр объекта `Date`, представляющего собой момент времени. Объекты `Date` основываются на значении количества миллисекунд, прошедших с 1 января 1970 года в часовом поясе UTC.

```javascript
const date1 = new Date('December 17, 1995 03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date('1995-12-17T03:24:00');
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// expected output: false;

console.log(date1 - date2);
// expected output: 0
```

### Синтаксис

```javascript
new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minute[, second[, millisecond]]]]]);


var today = new Date();
var birthday = new Date('December 17, 1995 03:24:00');
var birthday = new Date('1995-12-17T03:24:00');
var birthday = new Date(1995, 11, 17);
var birthday = new Date(1995, 11, 17, 3, 24, 0);
```

### Статические методы
```javascript
Date.now()
//Возвращает числовое значение, соответствующее текущему времени — количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
Date.parse()
//Разбирает строковое представление даты и возвращает количество миллисекунд с 1 января 1970 года 00:00:00 по местному времени.
Date.UTC()
//Принимает те же самые параметры, что и самый длиный вариант конструктора (то есть, от 2 до 7) и возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
```

### Основне методы

- `getYear()`
- `getFullYear()`
- `getMonth()`
- `getDate()`
- `getDay()` 
- `getTimezoneOffset()`
- `getHours()`
- `getMinutes()`
- `getSeconds()`
- `getMilliseconds()`