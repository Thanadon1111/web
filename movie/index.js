const express = require("express");
const router = express.Router();

const listAction = require('./controller.js');


router.get('/', listAction);

module.exports = router ;