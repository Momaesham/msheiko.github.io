# PHP: Hypertext Preprocessor 
![](https://lh3.googleusercontent.com/proxy/ZlbzvQ5OvkX0iU-h5GZddTBWQqLQRZgHRHVW_cWQOI5fCWMldpzZDOUnZj_qzyUypr10lYLcnCDHgkbEMN4aIQ4lUU7dAJV1cEJGLcfIZWzhjhZK)
*****

# History

1. 1994 Rasmus Lerdorf release Personal Home Page Tools
2. 1997 Endi Gustmans and Zeev Suraski PHP 3.0
3. 1999 ZendEngine PHP 4.0 (Zend Technologies)
4. 2004 PHP 5.0
5. ? - PHP6
7. 2014-2015 PHP 7.0
8. PHP 7.0-7.3

*****

# Syntax

* \<?php ?> and \<? ?>
* Разделение инструкций
* Изолирование от HTML
* comments
* {}
* $
* =
* \<?=

<%, %>, <%=, и теги скриптов <\script language='php'>
*****

# Types

* **int**
* **float**
* **bool**
* **string**
* **array**
* **callable**
* object
* null
* iterable
* resource
* **callback**

*camelCase and PascalCase

*****

# Arithmetic operators

|Пример|	Название|	Результат|
|:---:|:---|---|
|+$a	|Идентичность|	Конвертация $a в int или float, что более подходит.|
|-$a	|Отрицание|	Смена знака $a.|
|$a + $b|	Сложение|	Сумма $a и $b.|
|$a - $b|	Вычитание|	Разность $a и $b.|
|$a * $b|	Умножение|	Произведение $a и $b.|
|$a / $b|	Деление|	Частное от деления $a на $b.|
|$a % $b|	Деление по модулю|	Целочисленный остаток от деления $a на $b.|
|$a ** $b|	Возведение в степень|	Возведение $a в степень $b. Добавлено в PHP 5.6.|
*****

# Assignment operators

```php
<?php

$a = 3;

$a = ($b = 4) + 5;

?>
```
```php
<?php

$a = 3;
$a += 5; //  $a = $a + 5;
$b = "Привет";
$b .= "-привет!"; //$b в "Привет-привет!", как и $b = $b."There!";

?>
```
```php
<?php
$a = 3;
$b = &$a; // $b - это ссылка на $a
$a = 4;
?>
```

*****
# Operators comparison
|Пример|	Название|	Результат|
|:---:|---|---|
|$a == $b|	Равно	|TRUE если $a равно $b после преобразования типов.|
|$a === $b|	Тождественно равно|	TRUE если $a равно $b и имеет тот же тип.|
|$a != $b|	Не равно|	TRUE если $a не равно $b после преобразования типов.|
|$a <> $b|	Не равно|	TRUE если $a не равно $b после преобразования типов.|
|$a !== $b|	Тождественно не равно|	TRUE если $a не равно $b, или они разных типов.|
|$a < $b|	Меньше|	TRUE если $a строго меньше $b.|
|$a > $b|	Больше|	TRUE если $a строго больше $b.|
|$a <= $b|	Меньше или равно|	TRUE если $a меньше или равно $b.|
|$a >= $b|	Больше или равно|	TRUE если $a больше или равно $b.|
|$a <=> $b|	spaceship| Magic Доступно c PHP 7.|

*****
# Operators increment

|Пример	|Название	|Действие|
|:---:|---|---|
|++$a|	Префиксный инкремент|	Увеличивает $a на единицу, затем возвращает значение $a.|
|$a++|	Постфиксный инкремент|	Возвращает значение $a, затем увеличивает $a на единицу.|
|--$a|	Префиксный декремент|	Уменьшает $a на единицу, затем возвращает значение $a.|
|$a--|	Постфиксный декремент|	Возвращает значение $a, затем уменьшает $a на единицу.|

*****
# Operators logical

|Пример|	Название|	Результат|
|:---:|:---:|---|
|$a and $b|	И	|TRUE, если и $a, и $b TRUE.|
|$a or $b|	Или	|TRUE, если или $a, или $b TRUE.|
|$a xor $b|	Исключающее или|	TRUE, если $a, или $b TRUE, но не оба.|
|! $a|	Отрицание|	TRUE, если $a не TRUE.|
|$a && $b|	И|	TRUE, если и $a, и $b TRUE.|
|$a \|\|  $b|	Или|	TRUE, если или $a, или $b TRUE.|

*****
# Operators string
```php
<?php
$a = "Привет, ";
$b = $a . "Мир!"; // $b теперь содержит строку "Привет, Мир!"

$a = "Привет, ";
$a .= "Мир!";     // $a теперь содержит строку "Привет, Мир!"
?>
```
*****

# Control structures

* if
* else
* elseif/else if
* Альтернативный синтаксис управляющих структур
* while
* do-while
* for
* foreach
* break
* continue
* switch
* declare
* return
* require
* include
* require_once
* include_once
* goto

*****

# if

```php
if (выражение)
  инструкция
```
Выражение вычисляется в булево значение. Если выражение принимает значение TRUE, PHP выполнит инструкцию, а если оно принимает значение FALSE - проигнорирует.

```php
<?php
if ($a > $b)
  echo "a больше b";
?>
```
```php
<?php
if ($a > $b) {
  echo "a больше b";
  $b = $a;
}
?>
```
*****
# else

Выполнить одно выражение, если определенное условие верно, и другое выражение, если условие не верно.
```php
<?php
if ($a > $b) {
  echo "a больше, чем b";
} else {
  echo "a НЕ больше, чем b";
}
?>
``` 
## elseif/else if
```php
<?php
if ($a > $b) {
    echo "a больше, чем b";
} elseif ($a == $b) {
    echo "a равен b";
} else {
    echo "a меньше, чем b";
}
?>
```

*****

# Alternative syntax
### if
```php
<?php if ($a == 5): ?>
A равно 5
<?php endif; ?>
```
### elseif
```php
<?php
if ($a == 5):
    echo "a равно 5";
    echo "...";
elseif ($a == 6):
    echo "a равно 6";
    echo "!!!";
else:
    echo "a не равно ни 5 ни 6";
endif;
?>
```
*****
# while
Выполнять вложенные выражения повторно до тех пор, пока выражение в самом while является TRUE.
```php
while (expr)
    statement
```
```php
<?php
$i = 1;
while ($i <= 10) {
    echo $i++; 
}
````
```php
$i = 1;
while ($i <= 10):
    echo $i;
    $i++;
endwhile;
?>
```
*****
# do while
```php
<?php
$i = 0;
do {
    echo $i;
} while ($i > 0);
?>
```
*****
# for
```php
for (expr1; expr2; expr3)
    statement
```
* Первое выражение (expr1) всегда вычисляется (выполняется) только один раз в начале цикла.
* В начале каждой итерации оценивается выражение expr2. Если оно принимает значение TRUE, то цикл продолжается и выполняются вложенные операторы. Если оно принимает значение FALSE, выполнение цикла заканчивается.
* В конце каждой итерации выражение expr3 вычисляется (выполняется).
```php
for ($i = 1; $i <= 10; $i++) {
    echo $i;
}
```
*****
# foreach
```php
foreach (array_expression as $value)
    statement
    ---
foreach (array_expression as $key => $value)
    statement
```
* Первый цикл перебирает массив, задаваемый с помощью array_expression. На каждой итерации значение текущего элемента присваивается переменной $value и внутренний указатель массива увеличивается на единицу (таким образом, на следующей итерации цикла работа будет происходить со следующим элементом).
* Второй цикл дополнительно присвоит ключ текущего элемента переменной $key на каждой итерации.
```php
$array = [1, 0, 'apple'];
foreach ( $array as $v )
{
	echo $v . ';';
}
```
*передача по ссылке

[foreach manual](http://php.net/manual/ru/control-structures.foreach.php)

*****
# break
* break прерывает выполнение текущей структуры ***for, foreach, while, do-while*** или ***switch***.
* break принимает необязательный числовой аргумент, который сообщает ему выполнение какого количества вложенных структур необходимо прервать. Значение по умолчанию 1, только ближайшая структура будет прервана.
```php
<?php
$i = 0;
while (++$i) {
    switch ($i) {
        case 5:
            echo "Итерация 5<br />\n";
            break; 
        case 10:
            echo "Итерация 10; выходим<br />\n";
            break 2;
        default:
            break;
    }
}
?>
```
*****
# continue
* ***continue*** используется внутри циклических структур для пропуска оставшейся части текущей итерации цикла и, при соблюдении условий, начала следующей итерации.
* ***continue*** принимает необязательный числовой аргумент
```php
<?php
for ($i = 0; $i < 5; ++$i) {
    if ($i == 2)
        continue
    print "$i\n";
}
?>
```
*****
# switch
```php
<?php
if ($i == 0) {
    echo "i равно 0";
} elseif ($i == 1) {
    echo "i равно 1";
} elseif ($i == 2) {
    echo "i равно 2";
}
switch ($i) {
    case 0:
        echo "i равно 0";
        break;
    case 1:
        echo "i равно 1";
        break;
    case 2:
        echo "i равно 2";
        break;
    default:
        echo 'default';
}
?>
```
*использует нестрогое сравнение (==).
