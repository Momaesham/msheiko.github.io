# Решить прошлые задачки

> Дана строка. Если ее длина больше 10, то оставить в строке только первые 6 символов, иначе дополнить строку символами 'o' до длины 12.

> В данной строке найти количество цифр.

# Теория

- short if
- function expression
- nammed function

### Список типов

- `number` для любых чисел: целочисленных или чисел с плавающей точкой.
- `string` для строк. Строка может содержать один или больше символов, нет отдельного символьного типа.
- `boolean` для `true/false`.
- `null` для неизвестных значений – отдельный тип, имеющий одно значение `null`.
- `undefined` для неприсвоенных значений – отдельный тип, имеющий одно значение `undefined`.
- `object` для более сложных структур данных.
- `symbol` для уникальных идентификаторов.

# Object

### Конструктор

```javascript
let user = new Object(); // синтаксис "конструктор объекта"
let user = {};  // синтаксис "литерал объекта"
```

### Добавление ствойств

```javascript
let myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;


let myCar = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
}

> висячая запятая
```

### Получение свойств

```javascript
myCar.color; // undefined
myCar["year"]; // 1969
mycar.year; // 1969
```

> Имена свойств с пробелом
> Свойства из переменной
> Особенность объектов в том, что можно получить доступ к любому свойству. Даже если свойства не  cуществует – ошибки не будет! 
> 
### Удаление свойств

```javascript
delete myCar.year;
```

### Проверка существования свойства

```javascript
let user = {
    age :30
};
alert( user.noSuchProperty === undefined ); // true означает "свойства нет"

'age' in user //true означает "свойства есть"
```


### Перечисление всех свойств объекта

- ***циклы `for...in`***
Этот метод перебирает все перечисляемые свойства объекта и его цепочку прототипов
- ***`Object.keys()`***
Этот метод возвращает массив со всеми собственными (те, что в цепочке прототипов, не войдут в массив) именами перечисляемых свойств объекта o.
- ***`Object.getOwnPropertyNames()`***
Этот метод возвращает массив содержащий все имена своих свойств (перечисляемых и неперечисляемых) объекта o.

##### for

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // ключи
  alert( key );  // name, age, isAdmin
  // значения ключей
  alert( user[key] ); // John, 30, true
}

```
##### Object.keys(o)

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// expected output: Array ["a", "b", "c"]
```

##### Object.getOwnPropertyNames(o)

```javascript
const object1 = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]

```

### Вложенные объекты

```javascript
var myHonda = {
  color: "red",
  wheels: 4,
  engine: {
    cylinders: 4,
    size: 2.2
  }
};
```

### Копирование по ссылке

```javascript
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; 

console.log(user.name);
```

### Сравнение объектов

> Операторы равенства `==` и строгого равенства `===` для объектов работают одинаково.

>**Два объекта равны только в том случае, если это один и тот же объект.**

```javascript
let a = {};
let b = {}; // два независимых объекта

alert( a == b ); // false


---


let a = {};
let b = a; // копирование по ссылке

alert( a == b ); // true, обе переменные ссылаются на один и тот же объект
alert( a === b ); // true
```

# let и const

# Клонирование

### Кастомная функция

```javascript
let user = {
  name: "John",
  age: 30
};

let clone = {}; // новый пустой объект

// скопируем все свойства user в него
for (let key in user) {
  clone[key] = user[key];
}

// теперь в переменной clone находится абсолютно независимый клон объекта.
clone.name = "Pete"; // изменим в нём данные

alert( user.name ); // в оригинальном объекте значение свойства `name` осталось прежним – John
```
### Слияние

```javascript
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
```
### Клонирование

```javascript
let user = {
  name: "John",
  age: 30
};

let clone = Object.assign({}, user);
```


# Task #1


- Создайте пустой объект `user`
- Добавьте свойство `name` со значением *John*
- Добавьте свойство `surname` со значением *Smith*.
- Измените значение свойства `name` на *Pete*.
- Удалите свойство `name` из объекта.


# Методы

Метод — это функция, ассоциированная с объектом или, проще говоря, метод — это свойство объекта, являющееся функцией. Методы определяются так же, как и обычные функции, за тем исключением, что они присваиваются свойству объекта. Например вот так:


```javascript
var myObj = {
  myMethod: function(params) {
    // ...do something
  }
};
```

### Сокращенная запись метода

```javascript
// эти объекты делают одно и то же (одинаковые методы)

user = {
  sayHi: function() {
    alert("Привет");
  }
};

// сокращённая запись выглядит лучше, не так ли?
user = {
  sayHi() { // то же самое, что и "sayHi: function()"
    alert("Привет");
  }
};
```

# this

В JavaScript есть специальное ключевое слово `this`, которое вы можете использовать внутри метода, чтобы ссылаться на текущий объект. Предположим, у вас есть функция `validate`, которая сверяет свойство `value`, переданного ей объекта с некоторыми верхним и нижним значениями:

```javascript
let user = {
  name: "Джон",
  age: 30,

  sayHi() {
    // this - это "текущий объект"
    alert(this.name);
  }

};

user.sayHi(); // Джон
```

# Конструкторы

Обычный синтаксис `{...}` позволяет создать только один объект. Но зачастую нам нужно создать множество однотипных объектов, таких как пользователи, элементы меню и т.д.

> Функции-конструкторы являются обычными функциями. Но есть два соглашения:

- Имя функции-конструктора должно начинаться с большой буквы.
- Функция-конструктор должна вызываться при помощи оператора `new`.

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Вася");

alert(user.name); // Вася
alert(user.isAdmin); // false
```

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

var mycar = new Car("Eagle", "Talon TSi", 1993);
var kenscar = new Car("Nissan", "300ZX", 1992);
var vpgscar = new Car("Mazda", "Miata", 1990);
```


# TODO:
- Показать что читать