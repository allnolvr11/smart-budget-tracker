const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get("/get", async(req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM roles`)
        return res.status(200).json(result.rows)
    } catch (err) {
        console.error("Error Fetching roles",err)
        res.status(500).json({error: "Something went wrong!"})
    }
})

module.exports = router;