//Importaciones
const faker = require('faker');
const sql = require('mysql');
const express = require('express');
const app = express();

//Puerto
app.set('port', process.env.PORT || 5000);

//Middleware
app.use(express.urlencoded({extended: false}));

//Conección a db
var connection = sql.createConnection({
    host: 'database',
    database: 'empresa',
    user: 'root',
    password: 'root123'
});

//Routers
app.post('/:N', (req, res) => {
    const {N} = req.params;
    
    for(let i = 0; i < N; i++) {
        let name = faker.name.findName();
        let email = faker.internet.email();
        let address = faker.address.streetAddress() + faker.address.city() + faker.address.country();
        let sql = `INSERT INTO empresa.accounts VALUES (null, ${name}, ${email}, ${address})`;
        connection.query(sql, (err, results) => {
            if (err) {
                res.status(400);
                throw err;
            };
            res.status(200).send(results);
        });
    };
});

//Listen
app.listen(app.get('port'), () => {
    console.log(`Servidor conectado en puerto ${app.get('port')}`);
    connection.connect((err) => {
        if(err) throw err;
        console.log('Database connected');
    });
});