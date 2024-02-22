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
