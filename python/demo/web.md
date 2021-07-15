```bash
pip install Flask
```

minimal template

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(host='0.0.0.0')
```

показать роутинг
показать параметры

добавить статик файлы

```html
    <link href="{{ url_for('static', filename='uikit.css') }}" rel="stylesheet"/>
    <link href="{{ url_for('static', filename='responsive.css') }}" rel="stylesheet"/>
```

```python
url_for('static', filename='style.css')


from flask import render_template
return render_template('hello.html', name=name)
```

# template

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link href="{{ url_for('static', filename='uikit.css') }}" rel="stylesheet"/>
    <link href="{{ url_for('static', filename='responsive.css') }}" rel="stylesheet"/>

    <title>Hello, world!</title>
  </head>
  <body>

     <div class="container mt-5">

          <div class="row">
          
          </div>

    </div>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    <!-- Option 2: jQuery, Popper.js, and Bootstrap JS
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
    -->
  </body>
</html>
```

# Single product template
```html
<div class="col-md-3">
	<figure class="card card-product">
		<div class="img-wrap"> 
			<img src="images/items/3.jpg">
			<a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
		</div>
		<figcaption class="info-wrap">
			<a href="#" class="title">Good item name</a>
			<div class="action-wrap">
				<a href="#" class="btn btn-primary btn-sm float-right"> Order </a>
				<div class="price-wrap h5">
					<span class="price-new">$1280</span>
					<del class="price-old">$1980</del>
				</div> <!-- price-wrap.// -->
			</div> <!-- action-wrap -->
		</figcaption>
	</figure> <!-- card // -->
</div> <!-- col // -->
```

# Читаем json

```python
import json 
file = open('data.json', 'r', encoding='utf8')
data = json.load(file)
print(data[0].get('title'))



@app.route('/')
def index_page():
    return render_template('shop.html', items=data)
```

выведем элементы
```html
<ul>
{% for item in items %}
  <li>{{ item.get('title') }}</li>
{% endfor %}
</ul>
```

#Полный список


```python
 <div class="row">
        {% for id, item in items %}
            <div class="col-md-3">
                <figure class="card card-product">
                    <div class="img-wrap">
                        <img src="{{ item.get('images')[0] }}">
                        <a class="btn-overlay" href="/shop/{{ id }}"><i class="fa fa-search-plus"></i> Просмотр</a>
                    </div>
                    <figcaption class="info-wrap">
                        <a href="#" class="title">{{ item.get('title') }}</a>
                        <div class="action-wrap">
                            <a href="#" class="btn btn-primary btn-sm float-right"> Купить </a>
                            <div class="price-wrap h5">
                                <span class="price-new">{{ item.get('price') }}</span>
                            </div> <!-- price-wrap.// -->
                        </div> <!-- action-wrap -->
                    </figcaption>
                </figure> <!-- card // -->
            </div> <!-- col // -->
        {% endfor %}
    </div>
```


# Details

```html
<div class="row">
        <div class="card">
            <div class="row no-gutters">
                <aside class="col-sm-5 border-right">
                    <article class="gallery-wrap">
                        <div class="img-big-wrap">
                            <div><a href="{{ item.get('images')[0] }}" data-fancybox=""><img src="{{ item.get('images')[0] }}"></a></div>
                        </div> <!-- slider-product.// -->
                        <div class="img-small-wrap">
                            {% for image in item.get('images')%}
                                <div class="item-gallery"><img src="{{image}}"></div>
                            {% endfor %}
                        </div> <!-- slider-nav.// -->
                    </article> <!-- gallery-wrap .end// -->
                </aside>
                <aside class="col-sm-7">
                    <article class="p-5">
                        <h3 class="title mb-3">{{ item.get('title') }}</h3>

                        <div class="mb-3">
                            <var class="price h3 text-warning">
                               <span class="num">{{ item.get('price') }}</span>
                            </var>
                            <span>/ шт</span>
                        </div> <!-- price-detail-wrap .// -->
                        <dl>
                            <dt>Описание</dt>
                            <dd><p>{{ item.get('description') }}</p></dd>
                        </dl>
                        <dl class="row">
                            <dt class="col-sm-3">Материал</dt>
                            <dd class="col-sm-9">{{ item.get('material') }}</dd>

                            <dt class="col-sm-3">Тип</dt>
                            <dd class="col-sm-9">{{ item.get('type') }}</dd>

                            <dt class="col-sm-3">Форма</dt>
                            <dd class="col-sm-9">{{ item.get('form') }}</dd>

                            <dt class="col-sm-3">Цвет</dt>
                            <dd class="col-sm-9">{{ item.get('color') }}</dd>
                        </dl>
                        <hr>
                        <div class="row">
                            <div class="col-sm-5">
                                <dl class="dlist-inline">
                                    <dt>Количество:</dt>
                                    <dd>
                                        <select class="form-control form-control-sm" style="width:70px;">
                                            <option> 1</option>
                                            <option> 2</option>
                                            <option> 3</option>
                                        </select>
                                    </dd>
                                </dl>  <!-- item-property .// -->
                            </div> <!-- col.// -->
                            <div class="col-sm-7">
                                <dl class="dlist-inline">
                                    <dt>Размер:</dt>
                                    <dd>
                                        <label class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                                   id="inlineRadio1" value="option2">
                                            <span class="form-check-label">1м</span>
                                        </label>
                                        <label class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                                   id="inlineRadio2" value="option2">
                                            <span class="form-check-label">2м</span>
                                        </label>
                                        <label class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="inlineRadioOptions"
                                                   id="inlineRadio3" value="option2">
                                            <span class="form-check-label">2.5м</span>
                                        </label>
                                    </dd>
                                </dl>  <!-- item-property .// -->
                            </div> <!-- col.// -->
                        </div> <!-- row.// -->
                        <hr>
                        <a href="#" class="btn  btn-outline-primary"> <i class="fas fa-shopping-cart"></i> Купить
                        </a>
                    </article> <!-- card-body.// -->
                </aside> <!-- col.// -->
            </div> <!-- row.// -->
        </div> <!-- card.// -->
    </div>
```
