//Importaciones
const sql = require('mysql');
const express = require('express');
const router = require('./router');
const app = express();


//Puerto
app.set('port', process.env.PORT || 5000);

//Middleware
app.use(express.urlencoded({extended: false}));

//Conección a db
var connection = sql.createConnection({
    host: 'database-3',
    database: 'compania',
    user: 'root',
    password: 'rot123'
});

//Routers
app.use('/update', router);

//Listen
app.listen(app.get('port'), () => {
    console.log(`Servidor conectado en puerto ${app.get('port')}`);
    connection.connect((err) => {
        if(err) throw err;
        console.log('Database connected');
    });
});