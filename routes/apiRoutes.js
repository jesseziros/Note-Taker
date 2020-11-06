const fs = require('fs');
const router = require('express').Router();
const db = require('../db/db.json')
const uuid = require('uuid/v1')

router.get('/notes', (req, res) => {
    res.send(db)
    console.log(db)
});

router.post('/notes', (req, res) => {
    req.body.id = uuid();
    db.push(req.body)
    console.log(req.body)
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
        if (err) throw err 
        res.send('Completed')
    })
});

router.delete('/notes/:id', (req, res) => {
    console.log("Hey")
    for (let i = 0; i < db.length; i++) {
        if (req.params.id == db[i].id) {
            db.splice(i, 1)
        }
    }
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
        if (err) throw err;
        res.send(db)
    })
})

module.exports = router