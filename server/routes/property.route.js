const router = require('express').Router();
const pool = require('../modules/database');

router.get('/', (req, res) => {
    pool.query(`select * from "listings";`)
        .then((results) => {
            res.send(results.rows);
        })
        .catch((error) => {
            console.log('error with sql select', error);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const prop = req.body;
    pool.query(`insert into "listings" ("cost", "sqft", "kind", "city", "image_path")
                VALUES ($1, $2, $3, $4, $5);`, [prop.cost, prop.sqft, prop.kind, prop.city, prop.image_path])
        .then((results) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('error with sql inset', error);
            res.sendStatus(500);
        });
});

router.delete('/', (req, res) => {
    pool.query(`delete from "listings" where "id" = ($1);`, [req.query.id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error deleting from database: ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;