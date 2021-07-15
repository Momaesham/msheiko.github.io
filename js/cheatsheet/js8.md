# Float

```javascript
 0.1 + 0.2 === 0.3
 ```

 # JSON

 Объект `JSON` содержит методы для разбора объектной нотации `JavaScript` (`JavaScript Object Notation` — сокращённо `JSON`) и преобразования значений в `JSON`. Его нельзя вызвать как функцию или сконструировать как объект, и кроме своих двух методов он не содержит никакой интересной функциональности.

- `JSON.stringify` для преобразования объектов в `JSON`.
- `JSON.parse` для преобразования `JSON` обратно в объект.

> Только двойные кавычки `"`
> Свойства объектов в кавычках
> Поддерживает вложеность объектов


Объект может предоставлять метод `toJSON` для преобразования в `JSON`

# Делегирование событий
# Behavior

# Действия браузера по умолчанию

```javascript
<a href="/" onclick="return false">Нажми здесь</a>
или
<a href="/" onclick="event.preventDefault()">здесь</a>
```

# Mouse events

`mousedown` -> `mouseup` -> `click`

`mousedown` -> `mouseup` -> `click` -> `dblclick`

> `which` нажатая кнопка мыши

# Модификаторы клавиш 

Свойства объекта `event`
- `shiftKey`: `Shift`
- `altKey`: `Alt` (или `Opt` для Mac)
- `ctrlKey`: `Ctrl`
- `metaKey`: `Cmd` для Mac

```javascript
<button id="button">Нажми Alt+Shift+Click на мне!</button>

<script>
  button.onclick = function(event) {
    if (event.altKey && event.shiftKey) {
      alert('Ура!');
    }
  };
</script>
```

# Forms

`document.forms` именнованая коллекция всех форм документа

- доступ по индексу
- доступ по имени

```javascript
document.forms.my - форма с именем "my" (name="my")
document.forms[0] - первая форма в документе
```

`form.elements` - любой элемент доступен в именованной коллекции

```javascript
<form name="my">
  <input name="one" value="1">
  <input name="two" value="2">
</form>

<script>
  // получаем форму
  let form = document.forms.my; // <form name="my"> element

  // получаем элемент
  let elem = form.elements.one; // <input name="one"> element

  alert(elem.value); // 1
</script>
```

`element.form` элементы хранят ссылку на свою форму в свойстве form.

# Focus

`focus` - событие, когда элемент получает фокус
`blur` - событие, когда элемент теряет фокус

Методы `elem.focus()` и `elem.blur()` устанавливают/снимают фокус.

> `tabindex`

### focusin/focusout

События `focus` и `blur` не всплывают.

```javascript
<!-- добавить класс при фокусировке на форме -->
<form onfocus="this.className='focused'">
  <input type="text" name="name" value="Имя">
  <input type="text" name="surname" value="Фамилия">
</form>

<style> .focused { outline: 1px solid red; } </style>
```

# События

- Событие `change` срабатывает по окончании изменения элемента.
  >Для других элементов: `select, input type=checkbox/radio` событие запускается сразу после изменения значения:
- Событие `input` срабатывает каждый раз при изменении значения.
- `cut, copy, paste` - события происходят при вырезании/копировании/вставке данных.

# Submit

При отправке формы срабатывает событие `submit`
Метод `form.submit()` позволяет инициировать отправку формы из JavaScript


# Scroll

Событие прокрутки `scroll` позволяет реагировать на прокрутку страницы или элемента. Есть много хороших вещей, которые при этом можно сделать.
```javascript
window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
});
```