# Arkanoid

```bash
pip install pygame
```

### Инициализация

Пустое окно, и начальный шаблон модуля

```python
import pygame

WIDTH, HEIGHT = 1200, 800
fps = 60

pygame.init()
sc = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()
    pygame.display.flip()
    clock.tick(fps)

```

Добавим картинку

```python
# background image
img = pygame.image.load('1.jpg').convert()
```

Разместим картинку на главное поверхности в начале координат
```python
for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()
>>> sc.blit(img, (0, 0))
```

Импортируем модуль случайных чисел
```python
from random import randrange as rnd
```

И зададим настройки главной платформы
Создадим экземляр класа Rect
Разместим платформу по середине нижней части экрана
```python
# paddle settings
paddle_w = 330
paddle_h = 35
paddle_speed = 15
paddle = pygame.Rect(WIDTH // 2 - paddle_w // 2, HEIGHT - paddle_h - 10, paddle_w, paddle_h)
```

Отобразим платформу после картинки
```python
pygame.draw.rect(sc, pygame.Color('darkorange'), paddle)
```

Добавим платформе управление, получим нажатия клавиш
И условия выхада за края экрана
>>> Вниз перед апдейтом дисплея
```python
# control
    key = pygame.key.get_pressed()
    if key[pygame.K_LEFT] and paddle.left > 0:
        paddle.left -= paddle_speed
    if key[pygame.K_RIGHT] and paddle.right < WIDTH:
        paddle.right += paddle_speed
```

Добавим шарик
Радиус, скорость и квадрат вписанный в шарик, будем рисовать шарик, но работать с квадратом. Сторону находим по теореме Пифагора
Разместим рандомно в середине экрана
Введем коэфициенты движения
```python
# ball settings
ball_radius = 20
ball_speed = 6
ball_rect = int(ball_radius * 2 ** 0.5)
ball = pygame.Rect(rnd(ball_rect, WIDTH - ball_rect), HEIGHT // 2, ball_rect, ball_rect)
dx, dy = 1, -1
```
Нарисуем после платформы
```python
pygame.draw.circle(sc, pygame.Color('white'), ball.center, ball_radius)
```

### Движение шарика
```python
    # ball movement
    ball.x += ball_speed * dx
    ball.y += ball_speed * dy
```

Добавим отскок шарика от платформы и сторон

```python
    # collision left right
    if ball.centerx < ball_radius or ball.centerx > WIDTH - ball_radius:
        dx = -dx
    # collision top
    if ball.centery < ball_radius:
        dy = -dy
    # collision paddle
    if ball.colliderect(paddle) and dy > 0:
        #dx, dy = detect_collision(dx, dy, ball, paddle)
        dy = -dy
```

### Разрушаемые блоки

Добавим блоки

```python
# blocks settings
block_list = [pygame.Rect(10 + 120 * i, 10 + 70 * j, 100, 50) for i in range(10) for j in range(4)]
color_list = [(rnd(30, 256), rnd(30, 256), rnd(30, 256)) for i in range(10) for j in range(4)]
```

Выведем блоки на экран
```python
[pygame.draw.rect(sc, color_list[color], block) for color, block in enumerate(block_list)]
```

### Коллизия 

```python
def detect_collision(dx, dy, ball, rect):
    if dx > 0:
        delta_x = ball.right - rect.left
    else:
        delta_x = rect.right - ball.left
    if dy > 0:
        delta_y = ball.bottom - rect.top
    else:
        delta_y = rect.bottom - ball.top

    if abs(delta_x - delta_y) < 10:
        dx, dy = -dx, -dy
    elif delta_x > delta_y:
        dy = -dy
    elif delta_y > delta_x:
        dx = -dx
    return dx, dy
```

Коллизия с блоками, метод вернет нам индекс блока с которым есть столкновение
```python
    hit_index = ball.collidelist(block_list)
    if hit_index != -1:
        hit_rect = block_list.pop(hit_index)
        hit_color = color_list.pop(hit_index)
        dx, dy = detect_collision(dx, dy, ball, hit_rect)
```
### Добавим выход

```python
 # win, game over
    if ball.bottom > HEIGHT:
        print('GAME OVER!')
        exit()
    elif not len(block_list):
        print('WIN!!!')
        exit()
```

# Результат

```python
import pygame
from random import randrange as rnd

WIDTH, HEIGHT = 1200, 800
fps = 60

paddle_w = 330
paddle_h = 35
paddle_speed = 15
paddle = pygame.Rect(WIDTH // 2 - paddle_w // 2, HEIGHT - paddle_h - 10, paddle_w, paddle_h)

# ball settings
ball_radius = 20
ball_speed = 6
ball_rect = int(ball_radius * 2 ** 0.5)
ball = pygame.Rect(rnd(ball_rect, WIDTH - ball_rect), HEIGHT // 2, ball_rect, ball_rect)
dx, dy = 1, -1

# blocks settings
block_list = [pygame.Rect(10 + 120 * i, 10 + 70 * j, 100, 50) for i in range(10) for j in range(4)]
color_list = [(rnd(30, 256), rnd(30, 256), rnd(30, 256)) for i in range(10) for j in range(4)]

pygame.init()
sc = pygame.display.set_mode((WIDTH, HEIGHT))
clock = pygame.time.Clock()
# background image
img = pygame.image.load('1.jpg').convert()

def detect_collision(dx, dy, ball, rect):
    if dx > 0:
        delta_x = ball.right - rect.left
    else:
        delta_x = rect.right - ball.left
    if dy > 0:
        delta_y = ball.bottom - rect.top
    else:
        delta_y = rect.bottom - ball.top

    if abs(delta_x - delta_y) < 10:
        dx, dy = -dx, -dy
    elif delta_x > delta_y:
        dy = -dy
    elif delta_y > delta_x:
        dx = -dx
    return dx, dy


while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()
    sc.blit(img, (0, 0))
    [pygame.draw.rect(sc, color_list[color], block) for color, block in enumerate(block_list)]
    pygame.draw.rect(sc, pygame.Color('darkorange'), paddle)
    pygame.draw.circle(sc, pygame.Color('white'), ball.center, ball_radius)

    # ball movement
    ball.x += ball_speed * dx
    ball.y += ball_speed * dy

    # collision left right
    if ball.centerx < ball_radius or ball.centerx > WIDTH - ball_radius:
        dx = -dx
    # collision top
    if ball.centery < ball_radius:
        dy = -dy
    # collision paddle
    if ball.colliderect(paddle) and dy > 0:
        dx, dy = detect_collision(dx, dy, ball, paddle)
        #dy = -dy

    hit_index = ball.collidelist(block_list)
    if hit_index != -1:
        hit_rect = block_list.pop(hit_index)
        hit_color = color_list.pop(hit_index)
        dx, dy = detect_collision(dx, dy, ball, hit_rect)

        # win, game over
    if ball.bottom > HEIGHT:
        print('GAME OVER!')
        exit()
    elif not len(block_list):
        print('WIN!!!')
        exit()
    # control
    key = pygame.key.get_pressed()
    if key[pygame.K_LEFT] and paddle.left > 0:
        paddle.left -= paddle_speed
    if key[pygame.K_RIGHT] and paddle.right < WIDTH:
        paddle.right += paddle_speed

    pygame.display.flip()
    clock.tick(fps)

```
