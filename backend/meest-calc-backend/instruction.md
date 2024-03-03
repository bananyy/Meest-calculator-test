# Використання конфігураційного файлу для з'єднання з базою даних (Не актуально)

## Конфігураційний файл

Конфігураційний файл `config.js` містить параметри підключення до бази даних для різних середовищ (наприклад, розробки та виробництва).

```javascript
const config = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '',
            database: 'size_table_db',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        }
    },
    production: {
        
    }
};

const environment = process.env.NODE_ENV || 'development';

module.exports = config[environment];
```

## Підключення до бази даних
У файлі db_connection.js ви можете підключитися до бази даних, використовуючи конфігураційний файл:

```javascript
const mysql = require('mysql2');
const config = require('./config');

const pool = mysql.createPool(config.database);

module.exports = pool;
```

Тепер можна використовувати цей файл для з'єднання з базою даних у вашому додатку.

```javascript
const pool = require('./db_connection');

pool.getConnection((err, connection) => {
    connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
        console.log('The solution is: ', rows[0].solution);
        connection.release();
    });
});
```

## Щоб встановити змінну середовища NODE_ENV і потім запустити вашу програму Node.js у командному рядку Windows, виконайте такі кроки:

Відкрийте командний рядок Windows.

Використовуйте команду set, щоб встановити змінну середовища NODE_ENV на development. Введіть таку команду:

```cmd
set NODE_ENV=development
```

Після встановлення змінної середовища запустіть вашу програму Node.js за допомогою команди node, а потім вкажіть ім'я файлу вашої програми. Наприклад, якщо точкою входу до вашої програми є файл app.js, введіть наступну команду:


```cmd
node app.js
```
