const express = require('express');

const Model = require('../models/productModel')

const router =express.Router();

router.post('/add', (req, res) => {
    // res.send("Hello from Product's Add Route");
    console.log(req.body);
    
});

router.get('/all', (req, res) => {
    res.send("Hello from Product's All Route");
});

router.get('/byid', (req, res) => {
    res.send("Hello from Product's By ID Route");
});

router.get('/update', (req, res) => {
    res.send("Hello from Product's Update Route");
});

router.get('/delete', (req, res) => {
    res.send("Hello from Product's Delete Route");
});
module.exports = router;

