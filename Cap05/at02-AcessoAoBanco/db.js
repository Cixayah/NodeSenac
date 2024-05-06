// const mysql = require('mysql2')

// module.exports = () => {
//     const conn = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'amigo_do_pet'
//     });
//     console.log('Funcionou')
//     return conn;
// }

const mysql = require('mysql2');
require('dotenv').config();

module.exports = () => {
    const conn = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
    });
    console.log('A conexão com o database Railway funcionou!');
    return conn;
};
