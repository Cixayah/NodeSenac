const mysql = require('mysql2')
require('dotenv').config();

module.exports = () => {
    const conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'senac',
        database: 'amigo_do_pet'
    });
    return connection
}