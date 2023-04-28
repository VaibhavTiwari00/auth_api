const express = require('express');

const {register} = require('../controllers/register.controllers');

const router = express.Router();


router.post('/', register);

module.exports = router;