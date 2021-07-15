# 1

![Task 1](/data/formula/1.png)

# 2

![Task 1](/data/formula/2.png)

# 3

![Task 1](/data/formula/3.png)

# 4

![Task 1](/data/formula/4.png)


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
let {height, width, title} = { title: "Menu", height: 200, width: 100 }z  
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