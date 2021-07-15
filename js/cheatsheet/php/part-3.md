# MySQL

![alt](https://upload.wikimedia.org/wikipedia/ru/d/d3/Mysql.png)

*****

Показать примеры схем

Рассказать про релативность

Про ключи и связи

Нормализация

```
 show databases
```

 ```mysql
 use DATABASE_NAME
 ```

Показать пример `information schems`

`create database`

`use database_name`

[create table](https://dev.mysql.com/doc/refman/5.5/en/create-table-select.html)

[extension](https://marketplace.visualstudio.com/items?itemName=bajdzis.vscode-database)

```mysql
CREATE TABLE posts (
    id INT AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    publish_date DATE,
    description TEXT,
    PRIMARY KEY(id)
)
```

```mysql
CREATE TABLE `test`.`users` ( 
	`id` INT NOT NULL , 
	`name` VARCHAR(10) NOT NULL , 
	`password` VARCHAR(100) NOT NULL , 
	`last_login` DATE NOT NULL , 
	PRIMARY KEY (`id`),
	UNIQUE (`name`)
) ENGINE = InnoDB;
```

Обновение таблицы

```mysql
ALTER TABLE `users` CHANGE `id` `id` INT(11) NOT NULL AUTO_INCREMENT;
```

```mysql
INSERT INTO `users`(`name`, `password`, `last_login`) VALUES ("user4","password4", CURRENT_TIMESTAMP)
```

Добавление столбца

```mysql
ALTER TABLE `users` ADD `role` ENUM('manager','admin','editor') NOT NULL AFTER `last_login`;
```


```mysql
ALTER TABLE `posts` ADD `user_id` INT NOT NULL AFTER `description`;
```


```mysql
ALTER TABLE `posts` ADD INDEX( `user_id`);
```

```mysql
ALTER TABLE `posts` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
```

posts

users

category



http://phpfaq.ru/pdo

```php
class User
{
    public $name;
    public $password;
    public $last_login;
    public $id;
};
$stmt = $pdo->query('SELECT name FROM users LIMIT 1');

$stmt->setFetchMode(PDO::FETCH_CLASS, 'User');
$user = $stmt->fetch();
```


```php
$user = $pdo->query('SELECT name FROM users LIMIT 1')->fetchObject('User');
```

```php
$users = $pdo->query('SELECT name FROM users')->fetchAll(PDO::FETCH_CLASS, 'User');
```

## Insert
As usual, positional placeholders are more concise and easier to use

```php
$sql = "INSERT INTO users (name, surname, sex) VALUES (?,?,?)";
$stmt= $pdo->prepare($sql);
$stmt->execute([$name, $surname, $sex]);
```

or you can chain execute() to prepare():

```php
$sql = "INSERT INTO users (name, surname, sex) VALUES (?,?,?)";
$pdo->prepare($sql)->execute([$name, $surname, $sex]);
```

### INSERT query with named placeholders

```php
$data = [
    'name' => $name,
    'surname' => $surname,
    'sex' => $sex,
];
$sql = "INSERT INTO users (name, surname, sex) VALUES (:name, :surname, :sex)";
$stmt= $pdo->prepare($sql);
$stmt->execute($data);
```

or you can chain execute() to prepare():

```php
$sql = "INSERT INTO users (name, surname, sex) VALUES (?,?,?)";
$pdo->prepare($sql)->execute($data);
```
### INSERTing multiple rows

```php
$data = [
    'John','Doe', 22,
    'Jane','Roe', 19,
];
$stmt = $pdo->prepare("INSERT INTO users (name, surname, age) VALUES (?,?,?)");
try {
    $pdo->beginTransaction();
    foreach ($data as $row)
    {
        $stmt->execute($row);
    }
    $pdo->commit();
}catch (Exception $e){
    $pdo->rollback();
    throw $e;
}
```
