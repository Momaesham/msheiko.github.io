# XAMPP Virtual Hosts

Path config `C:/xampp/apache/conf/extra`

find file `httpd-vhosts.conf`


```
<VirtualHost *:8080>
    DocumentRoot "e:/testVhost/"
    ServerName blog.localhost
    <Directory "e:/testVhost/">
        Order deny,allow
        Allow from all
        Require all granted
    </Directory>
</VirtualHost>
```

Hosts file path `C:\Windows\System32\drivers\etc\hosts`

insert `127.0.0.1       blog.localhost`
