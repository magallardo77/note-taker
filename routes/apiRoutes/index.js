const router = require('express').Router();
const fs = require('fs')

router.get("/notes", (req, res) => {
    const db = require("../../db/db.json");
    res.json(db);
})

router.post("/notes", (req, res) => {
    const db = require("../../db/db.json");
    req.body.id = Math.floor(Math.random()*1000);
    db.push(req.body);
    let data = JSON.stringify(db, null, 2);
    fs.writeFile("db/db.json", data, (err) => err ? console.error(err) : console.log(err))
    res.json(req.body)
})



module.exports = router;