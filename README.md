# React + Vite Bitrix24 app template

Шаблон для разработки приложений под Б24.

## Конфиг

`vite.config.js`
Добавлен middleware для ретрансляции POST в GET.
Конфигурация `https://` самоподписанным сертификатом.

## Установка

### ssl:

Пример с библиотекой `mkcert`:
```
npm install -g mkcert
```

Создание центрального сертификата (также создаёт сертификаты в корне):
```
mkcert create-ca
```

Создание сертификата:
```
mkcert create-cert
```

Создаст в корне `cert.key` и `cert.crt`. Переместить в `certs/` или изменить путь в `vite.config.json`.

## Начало работы

Запуск дев-сервера:
```
npm start
```
