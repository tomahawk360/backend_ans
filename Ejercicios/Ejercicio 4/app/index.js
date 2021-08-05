//Importaciones
const http = require('http');
const sql = require('mysql');
const express = require('express');
const app = express();
const msg = require('./Backend-test.postman_collection.json');

//Set
app.set('port', process.env.PORT || 5000);

//Middleware
app.use(express.urlencoded({extended: false}));

//Conección a db
var connection = sql.createConnection({
    host: 'database-2',
    database: 'db_envio',
    user: 'root',
    password: 'toor123'
});

//Routers
app.post('/', (req, res) => {
    const request = http.request(msg, res => {
        res.on('data', (chunk) => {
            let sql = `INSERT INTO DB_ENVIO.RESPONSE VALUES (null, ${chunk})` 
            connection.query(sql, (req, res) => {
                if (err) {
                    throw err;
                };
                console.log('Response saved');
            });
        });
    });
});
//Listen
app.listen(app.get('port'), () => {
    console.log(`Servidor conectado en puerto ${app.get('port')}`);
    connection.connect((err) => {
        if(err) throw err;
        console.log('Database connected');
    });
});