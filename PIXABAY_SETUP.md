# Настройка Pixabay API

## Как получить API ключ:

1. Перейдите на сайт [Pixabay](https://pixabay.com/)
2. Зарегистрируйтесь или войдите в свой аккаунт
3. Перейдите в раздел API: https://pixabay.com/api/docs/
4. Скопируйте ваш API ключ

## Установка API ключа:

1. Откройте файл `src/js/pixabay-api.js`
2. Замените `'YOUR_PIXABAY_API_KEY'` на ваш реальный API ключ:

```javascript
const API_KEY = 'ваш-реальный-api-ключ';
```

## Тестирование:

После установки API ключа запустите проект:
```bash
npm run dev
```

И протестируйте поиск изображений!
