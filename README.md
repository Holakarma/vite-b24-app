# React + Vite Bitrix24 app template

Шаблон для разработки приложений под Б24.

## Конфиг

`vite.config.js`
Добавлен middleware для ретрансляции POST в GET.
Конфигурация `https://` самоподписанным сертификатом.

## Начало работы

```npm install -g mkcert```

Создание центрального сертификата:
```mkcert create-ca```

Создаст в корне `cert.key` и `cert.crt`. Переместить в `certs/` или изменить путь в `vite.config.json`.

Запуск дев-сервера:
```
npm start
```
