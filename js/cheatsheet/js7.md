# DOM

Объектная модель документа (`Document Object Model, DOM`) – это фундаментальный прикладной программный интерфейс, обеспечивающий возможность работы с содержимым `HTML`- и `XML`-документов

# Типы DOM

![htmlElement](/data/htmlelement.png)

# EventTarget

`EventTarget` - это интерфейс, реализуемый объектами, которые могут генерировать события и могут иметь подписчиков на эти события.

Наиболее частые генераторы событий - `Element`, `document`, и `window`,  но другие объекты так же могут использоваться в качестве источников событий , например `XMLHttpRequest`, `AudioNode`, и другие.

> Не может быть создан

[MDN EventTarget](https://developer.mozilla.org/ru/docs/Web/API/EventTarget)

# Node

`Node` это интерфейс, от которого наследуют несколько типов `DOM`, он так же позволяет различным типам быть обработанными(или протестированными).

Следующие интерфейсы полностью наследуют от `Node` его методы и свойства: `Document`, `Element`, `CharacterData` (which `Text`, `Comment`, и `CDATASection inherit`), `ProcessingInstruction`, `DocumentFragment`, `DocumentType`, `Notation`, `Entity`, `EntityReference`

> Не может быть созадн

[MDN Node](https://developer.mozilla.org/ru/docs/Web/API/Node)


# HTMLELement

Интерфейс `HTMLElement` представляет собой любой элемент `HTML`. Некоторые элементы напрямую используют этот интерфейс, другие - через промежуточный интерфейс.

![htmlElement](/data/htmlelement.png)


# Element

Интерфейс `Element` представляет собой один из объектов в `Document`. Этот интерфейс описывает методы и свойства, общие для всех видов элементов. Конкретные модели поведения описаны в интерфейсах, которые наследуют от `Element`, и добавляют дополнительную функциональность.

[MDN Element](https://developer.mozilla.org/ru/docs/Web/API/Element)

# HTMLElement

Интерфейс `HTMLElement` представляет собой любой элемент `HTML`. Некоторые элементы напрямую используют этот интерфейс, другие - через промежуточный интерфейс.

[MDN HtmlElement](https://developer.mozilla.org/ru/docs/Web/API/HTMLElement)

# Html Specific Elements

Интерфейс `HTMLInputElement` предоставляет специальные свойства и методы (расширяющие интерфейс `HTMLElement` который также доступен через наследование) для управления размещением и отображением элементов `input`.

# Attrubute

`Атрибут` является частью тега, позволяющей менять его поведение или добавлять метаданные. `Атрибут` всегда представлен в виде `название=значение`, которые определяют соответственно идентификатор атрибута и присвоенное ему значение.

- `elem.attributes` - получает коллекцию атрибутов
- `elem.hasAttribute(name)` – проверяет наличие атрибута.
- `elem.getAttribute(name)` – получает значение атрибута.
- `elem.setAttribute(name, value`) – устанавливает значение атрибута.
- `elem.removeAttribute(name)` – удаляет атрибут.

> Имена регистронезависимы
> Значение всегда строка
> `Атрибут` и свойство `value`
> `checked` => `boolean`

# DataSet

Свойство `HTMLElement.dataset` предоставляет доступ как для чтения, так и для изменения всех пользовательских дата-атрибутов `custom data attributes (data-*)` , установленных у элемента

```javascript
<div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>John Doe</div>

let el = document.querySelector('#user');

// el.id == 'user'
// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''

el.dataset.dateOfBirth = '1960-10-03'; // set the DOB.

// 'someDataAttr' in el.dataset === false
el.dataset.someDataAttr = 'mydata';
// 'someDataAttr' in el.dataset === true
```

# Styles


Свойство `className` отвечает за значение атрибута `class` элемента.

```javascript
var cName = elem.className;
elem.className = cName;
```

Свойство `classList` возвращает псевдомассив `DOMTokenList`, содержащий все классы элемента.

```javascript
var elementClasses = elem.classList;
```

[MDN Class list](https://developer.mozilla.org/ru/docs/Web/API/Element/classList)

- `elem.classList.add/remove("class")` – добавить/удалить класс.
- `elem.classList.toggle("class")` – добавить класс, если его нет, иначе удалить.
- `elem.classList.contains("class")` – проверка наличия класса, возвращает `true/false`.


Свойство `elem.style` – это объект, который соответствует тому, что написано в атрибуте `"style"`

> Для обнуления присвоить пустую строку


Метод `Window.getComputedStyle()` возвращает объект содержащий значения всех CSS свойств элемента, полученные после применения всех активных таблиц стилей и завершения базовых вычислений значений, которые они могут содержать. Некоторые CSS свойства доступны через API предоставляемые объектом или индексацию по именам CSS свойств.

[MDN GetComputedStyle](https://developer.mozilla.org/ru/docs/Web/API/Window/getComputedStyle)


# События

### Аттрибут тега

```javascript
<input value="Нажми меня" onclick="alert('Клик!')" type="button">
```

Через отдельную функцию

```javascript
<script>
  function countRabbits() {
    for(let i=1; i<=3; i++) {
      alert("Кролик номер " + i);
    }
  }
</script>

<input type="button" onclick="countRabbits()" value="Считать кроликов!">
```

Используя свойство объекта

```javascript
<input id="elem" type="button" value="Нажми меня!">
<script>
  elem.onclick = function() {
    alert('Спасибо');
  };
</script>
```

# This

Внутри обработчика события `this` ссылается на текущий элемент, то есть на тот, на котором, как говорят, «висит» (т.е. назначен) обработчик.

В коде ниже `button` выводит своё содержимое, используя `this.innerHTML`
```javascript
<button onclick="alert(this.innerHTML)">Нажми меня</button>
```


# AddEventLIstener

Метод `EventTarget.addEventListener()` регистрирует определенный обработчик события, вызванного на `EventTarget`

[MDN AddEventListener](https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener)
[Event.types](https://developer.mozilla.org/en-US/docs/Web/Events)

```javascript
var btn = document.querySelector('button');

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}   

btn.addEventListener('click', bgChange);
```


```javascript
elem.addEventListener( "click" , () => alert('Спасибо!'));
// ....
elem.removeEventListener( "click", () => alert('Спасибо!'));
```

Обработчик не будет удалён, т.к. в `removeEventListener` передана не та же функция, а другая, с одинаковым кодом, но это не важно.

Вот так правильно:
```javascript
function handler() {
  alert( 'Спасибо!' );
}

input.addEventListener("click", handler);
// ....
input.removeEventListener("click", handler);
```
Обратим внимание – если функцию обработчик не сохранить где-либо, мы не сможем её удалить. Нет метода, который позволяет получить из элемента обработчики событий, назначенные через `addEventListener`.


# Event

Интерфейс `Event` представляет собой любое событие, которое происходит в `DOM`

Когда происходит событие, браузер создаёт объект `event`, записывает в него детали и передаёт его в качестве аргумента функции-обработчику.

```javascript
<input type="button" value="Нажми меня" id="elem">

<script>
  elem.onclick = function(event) {
    // вывести тип события, элемент и координаты клика
    alert(event.type + " на " + event.currentTarget);
    alert("Координаты: " + event.clientX + ":" + event.clientY);
  };
</script>
```

[Event MDN](https://developer.mozilla.org/ru/docs/Web/API/Event)


```javascript
element.onclick = function1;
element.onclick = function2;

addEventListener('click', function1);
addEventListener('click', function2);
```

# Всплытие

Когда на элементе происходит событие, обработчики сначала срабатывают на нём, потом на его родителе, затем выше и так далее, вверх по цепочке предков.

```javascript
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```


- `event.target` – это «целевой» элемент, на котором произошло событие, в процессе всплытия он неизменен.
- `this` – это «текущий» элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик.

# Прекращение всплытия

`event.stopPropagation()` Прекращает дальнейшую передачу текущего события.

```javascript
<body onclick="alert(`сюда всплытие не дойдёт`)">
  <button onclick="event.stopPropagation()">Кликни меня</button>
</body>
```


---

`event.stopImmediatePropagation()` Останавливает цепочку вызова событий для последующих слушателей DOM элемента.

Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены.

То есть, `event.stopPropagation()` препятствует продвижению события дальше, но на текущем элементе все обработчики будут вызваны.

Для того, чтобы полностью остановить обработку, существует метод `event.stopImmediatePropagation()`. Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.


# Погружение

```javascript
<style>
  body * {
    margin: 10px;
    border: 1px solid blue;
  }
</style>

<form>FORM
  <div>DIV
    <p>P</p>
  </div>
</form>

<script>
  for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => alert(`Погружение: ${elem.tagName}`), true);
    elem.addEventListener("click", e => alert(`Всплытие: ${elem.tagName}`));
  }
</script>
```