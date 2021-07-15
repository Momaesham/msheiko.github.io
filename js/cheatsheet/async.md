# Асинхронность в JavaScript

![Асинхронность](https://habrastorage.org/files/799/52e/8ce/79952e8ce68e4794a61f05bf016604dc.png)

*****

# Асинхронность внутри

![](https://habrastorage.org/files/1f2/b37/3a6/1f2b373a6a7e4b889e1eb18c270bcfe8.png)

*****

# setTimeout

Выполняет код(или функцию), указанный в первом аргументе, асинхронно, с задержкой в delay миллисекунд.

```javascript
timeout_id = window.setTimeout(func|code, delay)
```
```javascript
// первый аргумент - строка
setTimeout('alert("прошла секунда")', 1000)

// первый аргумент - функция
function second_passed() {
  alert("прошла секунда")
}
setTimeout(second_passed, 1000)

```

### Отмена выполнения

```javascript
var timeout_id = setTimeout(...)
clearTimeout(timeout_id)
```

*****

# setInterval

Выполняет код много раз, через равные промежутки времени, пока не будет остановлен

```javascript
var intervalID = window.setInterval(func|code, delay)

```

```javascript
// (1)
setInterval('alert("прошла секунда")', 1000) 

// (2)
function sec() { 
  alert("прошла секунда")
}
setInterval(sec, 1000) // использовать функцию

```


### Отмена выполнения

```javascript
 var intervalID = setInterval(...)
clearInterval(intervalID)
```
*Функция выполняется в другом контексте, со значением this = window*

*****

# Основы XMLHttpRequest

```javascript
// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'phones.json', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); /
  / пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}
```

*****

# JSON.parse

 [json example](https://json.org/example.html)

 Превратит строку с данными в формате JSON в JavaScript-объект/массив/значение.

 ```javascript
var numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
alert( numbers[1] ); // 1
```
```javascript
var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
user = JSON.parse(user);
alert( user.friends[1] ); // 1
```

*****

# Promise

Promise – это специальный объект, который содержит своё состояние. Вначале pending («ожидание»), затем – одно из: fulfilled («выполнено успешно») или rejected («выполнено с ошибкой»).

![](https://learn.javascript.ru/article/promise/promiseInit.png)

```javascript
var promise = new Promise(function(resolve, reject) {
  // Эта функция будет вызвана автоматически

  // В ней можно делать любые асинхронные операции,
  // А когда они завершатся — нужно вызвать одно из:
  // resolve(результат) при успешном выполнении
  // reject(ошибка) при ошибке
})
```