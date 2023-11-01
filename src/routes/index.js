const express = require('express');
const router = express.Router();
const userformRouter = require('./userform.router')

// colocar las rutas aquí

router.use('/users', userformRouter);


module.exports = router;