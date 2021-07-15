# Создание проекта и autoload

```
{
    "require": {
        "vlucas/phpdotenv" : "*"
    },
    "autoload": {
        "psr-4": {"App\\": "src/"}
    }
}
```

my.env

```
### Database
DB_HOST     = "localhost"
DB_NAME     = "name-dev"
DB_USER     = "root"
DB_PASSWORD = ""

### Email
ADMIN_EMAIL = "admin@mail.com"
```

ConfigLoader.php

```php
<?php

namespace App\Utils;

use Exception;

class ConfigLoader
{
    private $data = [];
    public function __construct()
    {
        $lines = file("Utils/my.env",FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        $this->getKeys($lines);
    }
    private function getKeys($lines)
    {
        foreach ($lines as $line)
        {
            if(strstr($line,"###"))
            {
                continue;
            }
            $params = explode("=",$line);
            $key = trim($params[0]);
            $value = trim($params[1]);
            //echo "key = $key, value = $value \r\n";
            $this->data[$key] = $value;
        }
    }

    /**
     * @param $key
     * @return mixed
     * @throws Exception
     */
    public function get($key)
    {
        if(array_key_exists($key,$this->data)) {
            return $this->data[$key];
        }else{
            //return null;
            throw new Exception("Key not found in config array");
        }
    }
}
```

Массив `$_ENV` и `getenv()`

Добавление в глобальный массив

# Пакет dotenv

[Env guid](https://klisl.com/dotenv.html)

```php
$dotenv = Dotenv::create("Utils","my.env");
$dotenv->load();

echo getenv('ADMIN_EMAIL'); //admin@mail.com
echo $_ENV ['ADMIN_EMAIL'];  //admin@mail.com
echo $_SERVER ['ADMIN_EMAIL'];  //admin@mail.com

'connections' => array(
    'mysql' => array(
        'driver'    => 'mysql',
        'host'      => getenv('DB_HOST'),
        'database'  => getenv('DB_DATABASE'),
        'username'  => getenv('DB_USERNAME'),
        'password'  => getenv('DB_PASSWORD'),
        'charset'   => 'utf8',
        'prefix'    => '',
    ),
),
```

# File manager

```php
<?php

namespace App\Entity;

/**
 * Class DirectoryItem
 * @package App\Entity
 */
class DirectoryItem
{
    /**
     * @var string
     */
    private $name;
    /**
     * @var string
     */
    private $path;
    /**
     * @var string
     */
    private $icon;

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getPath(): string
    {
        return $this->path;
    }

    /**
     * @return string
     */
    public function getIcon(): string
    {
        return $this->icon;
    }


    /**
     * FileItem constructor.
     * @param string $path
     */
    public function __construct(string $path)
    {
        $this->path = $path;
        $temp = explode("/",$path);
        $this->name = array_pop($temp);
        $this->icon = "<i class='far fa-folder'></i>";
    }

    public function show()
    {
        $template = "<div class='item'>
                        <a href='index.php?path=%s/'>
                            %s
                            <span>%s</span>
                        </a>
                    </div>";
        echo sprintf($template,$this->getPath(),$this->getIcon(),$this->getName());
    }

}
```

```php
<?php

namespace App\Entity;

class FileItem extends DirectoryItem
{
    private $extension;

    public function __construct($path)
    {
        parent::__construct($path);
        $temp = explode(".",$this->getName());
        $this->extension = array_pop($temp);
    }
    public function getExtension() : string
    {
        return $this->extension;
    }
    public function getIcon(): string
    {
        $icons = [
            "png" => "<i class='far fa-file-image'></i>"
        ];
        if(array_key_exists($this->getExtension(),$icons))
        {
            return $icons[$this->getExtension()];
        } else {
            return "<i class='far fa-file'></i>";
        }
    }
    public function show()
    {
        $template = "<div class='item'>
                        %s
                        <span>%s</span>
                    </div>";
        echo sprintf($template,$this->getIcon(),$this->getName());
    }
}
```

# Widget

```php
<?php

namespace App\widget;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;

class WeatherWidget
{
    private const IP = "176.60.20.134";
    private $ip_data;

    /**
     * WeatherWidget constructor.
     * @throws GuzzleException
     */
    public function __construct()
    {
        $this->ip_data = json_decode($this->getLocationFromIp());
    }

    /**
     * @return string
     * @throws GuzzleException
     * @throws Exception
     */
    private function getLocationFromIp()
    {
        $url = "http://ip-api.com/json/";
        $client = new Client([
            'base_uri' => $url,
            'timeout'  => 20.0,
        ]);
        $response = $client->request("GET", self::IP);
        if($response->getStatusCode() == 200) {
           return $response->getBody()->getContents();
        }else{
            throw new Exception("Ip data not found");
        }
    }
    private function getWetaherFromLocation()
    {
        $url = "http://samples.openweathermap.org/data/2.5/weather";

            //?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22"
    }
    public function render()
    {
        var_dump($this->ip_data);
    }
}


// https://ipinfo.io/
//http://ip-api.com/docs/api:json
//$ip = $_SERVER['REMOTE_ADDR'];
//https://openweathermap.org

//d5774410ee1e18d6a0c9b7dd040a60b8
```

# Cache

`composer require Psr/simple-cache`

# Fake repository

`composer require php-di/php-di`

