const fs = require('fs');
const router = require('express').Router();
const db = require('../db/db.json')

router.get('/notes', (req, res) => {
    res.send(db)
});

router.post('/notes', (req, res) => {
    db.push(req.body)
    fs.writeFile('./db/db.json', JSON.stringify(db), (err) => {
        if (err) throw err 
        res.send('Completed')
    })
});

// router.delete('/notes/:id'), (req, res) => {

// }

module.exports = router