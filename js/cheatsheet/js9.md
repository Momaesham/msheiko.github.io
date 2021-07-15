# XMLHttpRequest 

`XMLHttpRequest` это API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером.

```javascript
const xhr = new XMLHttpRequest();
```

- sync
- async
  

Метод `XMLHttpRequest.open()` инициализирует новый запрос или повторно инициализирует уже созданный.
```javascript
XMLHttpRequest.open(method, url[, async[, user[, password]]])

```

Метод `XMLHttpRequest.send()` отправляет запрос. Если запрос асинхронный (каким он является по-умолчанию), то возврат из данного метода происходит сразу после отправления запроса. Если запрос синхронный, то метод возвращает управление только после получения ответа. Метод `send()` принимает необязательные аргументы в тело запросов. Если метод запроса `GET` или `HEAD`, то аргументы игнорируются и тело запроса устанавливается в `null`.

```javascript
XMLHttpRequest.send(body)
```


```javascript
var request = new XMLHttpRequest();
request.open('GET', '/bar/foo.txt', false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  console.log(request.responseText);
}
```
# ООП

***Объектно-ориентированное программирование (ООП)*** — методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определённого класса, а классы образуют иерархию наследования.

***Класс*** — это элемент ПО, описывающий абстрактный тип данных и его частичную или полную реализацию.

На практике ***объектно-ориентированное программирование*** сводится к созданию некоторого количества классов, включая интерфейс и реализацию, и последующему их использованию


Классы в JavaScript были введены в ***ECMAScript 2015*** и представляют собой синтаксический сахар над существующим в JavaScript механизмом прототипного наследования.

[Clasees MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes)


# Объявления классов

### Declaration

```javascript
class MyClass {
  // методы класса
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

Вначале необходимо объявить ваш класс и только затем работать с ним, а код же вроде следующего сгенерирует исключение типа `ReferenceError`

### Expression

Можно создавать именованные и безымянные выражения

```javascript
// безымянный
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// именованный
var Rectangle = class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

# Constructor

Метод `constructor` — специальный метод, необходимый для создания и инициализации объектов, созданных, с помощью класса. В классе может быть только один метод с именем `constructor`.

# Наследование

Ключевое слово `extends` используется в *объявлениях классов и выражениях классов* для создания класса, дочернего относительно другого класса.

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' издает звук.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' лает.');
  }
}

var d = new Dog('Митци');
d.speak();
```


Ключевое слово `super` используется для вызова функций на родителе объекта.

```javascript
class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' издает звук.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' рычит.');
  }
}
```

# Статические методы

Ключевое слово `static`, определяет статический метод для класса. Статические методы вызываются без инстанцирования их класса, и не могут быть вызваны у экземпляров (`instance`) класса. Статические методы, часто используются для создания служебных функций для приложения.