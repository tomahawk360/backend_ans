//Importaciones
const sql = require('mysql');
const express = require('express');
const router = express.Router();

//Router que actualiza la base de datos
router.route('/update')
    .put((req, res) => {
        let sql = `SELECT * FROM compania.countries LEFT JOIN compania.continents ON compania.countries.continent_id = compania.continents.id`;
        let countries_upd = connection.query(sql, (err, data) => {
            if (err) {
                throw err;
            };
        }) 
        for(let i = 0; i < countries_upd.lenght; i++) {
            let cont_adj = countries_upd[i].anual_adjustment;
            let cont_id = countries_upd[i].id;
            let sql2 = `UPDATE compania.employees SET salary = ((salary * ${cont_adj})/100) WHERE salary <= 5000 AND country_id = ${cont_id}`;
            connection.query(sql2, (err, data) => {
                if (err) {
                    throw err;
                };
            });
        }
    });

    //Exportacion
    module.exports = router;