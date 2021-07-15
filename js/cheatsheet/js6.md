
# Js in Browser

![Browser](/data/browser.jpg)

![Browser2](/data/windowObjects.svg)

# DOM

DOM (Document Object Model) это API который представляет и взаимодействует со всеми HTML или XML документами. DOM это модель документа загруженная в browser и представляющая документ как узел дерева, где каждый узел представляет часть (e.g. an element документа, строку текста, или комментарий).

![DOM](/data/javascript-full-tree.png)


`window` and `document`


```javascript
<html>
  <head>
    <script>
    // запуск данной функции при загрузке документа
       window.onload = function() {
    // создание нескольких элементов 
    // в пустой HTML странице
       heading = document.createElement("h1");
       heading_text = document.createTextNode("Big Head!");
       heading.appendChild(heading_text);
       document.body.appendChild(heading);
      }
    </script>
  </head>
  <body>
  </body>
</html>
```


```javascript
document.body.style.background = 'red'; // сделать фон красным
```

# Live example

> Последний элемент, выбранный во вкладке `Elements`, доступен в консоли как `$0`; предыдущий, выбранный до него, как `$1` и т.д.

# Навигация, перебор элементов

### Root elements

- `<html>` = `document.documentElement`

- `<body>` = `document.body`

- `<head>` = `document.head`


# Childs


- `childNodes`
- `firstChild`
- `lastChild`

Узлы (`node`) и элементы (`elements`)

```javascript
for (let node of document.body.childNodes) {
  console.log(node);
}
```

> Не работают методы массивов
> Только для чтения


# Соседи 

- `nextSibling` cледующий узел того же родителя (следующий сосед)
- `previousSibling` предыдущий сосед

Родитель доступен через `parentNode`.
```javascript
// родителем <body> является <html>
alert( document.body.parentNode === document.documentElement ); // выведет true

// после <head> идёт <body>
alert( document.head.nextSibling ); // HTMLBodyElement

// перед <body> находится <head>
alert( document.body.previousSibling ); // HTMLHeadElement
```


# Elements

- `children` – коллекция детей, которые являются элементами.
- `firstElementChild`, `lastElementChild` – первый и последний дочерний элемент.
- `previousElementSibling`, `nextElementSibling` – соседи-элементы.
- `parentElement` – родитель-элемент.


# Селекторы

- `document.getElementbyId(id)`
- `querySelectorAll()`
- `querySelector()`


```javascript
  let elements = document.querySelectorAll('ul > li:last-child');

  for (let elem of elements) {
    console.log(elem.innerHTML);
  }
```

# Основные свойства

 - `innerHTML` позволяет получить HTML-содержимое элемента в виде строки. Работает сеттер
 - `outerHTML`содержит HTML элемента целиком
    >  запись в `outerHTML` не изменяет элемент. Вместо этого элемент заменяется целиком во внешнем контексте.
- `nodeValue` и `data`  содержимое текстового узла
- `textContent` предоставляет доступ к тексту внутри элемента за вычетом всех `<тегов>`
- `hidden` указывает на то, видим ли мы элемент или нет

# Создание элементов

- `document.createElement(tag)`
- `document.createTextNode(text)`

# Добавление элементов

- `node.append(...nodes or strings)` – добавляет узлы или строки в конец `node`,
- `node.prepend(...nodes or strings)` – вставляет узлы или строки в начало `node`,
- `node.before(...nodes or strings)` - вставляет узлы или строки до `node`,
- `node.after(...nodes or strings)` - вставляет узлы или строки после `node`,
- `node.replaceWith(...nodes or strings)` - заменяет `node` заданными узлами или строками.

# Удаление 

`node.remove()`