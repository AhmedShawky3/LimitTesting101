const express = require('express');
const router = express.Router();
const morgan = require('morgan');

const aimController = require("../Controllers/aimController")


router.get('', (req,res) =>{
    res.render('index');
});

router.get("/aimtrainer",aimController.aim_get);

router.get("/mazerunner",(req,res) =>{
    res.render('./games/mazerunner');
});

router.get("/redgreen",(req,res) =>{
    res.render('./games/redgreen');
});

router.get("/typeracer",(req,res) =>{
    res.render('./games/typeracer');
});

router.get("/whereiswaldo",(req,res) =>{
    res.render('./games/whereiswaldo');
});

router.get("/wordscramble",(req,res) =>{
    res.render('./games/wordscramble');
});

module.exports = router;