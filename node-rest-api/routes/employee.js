var express = require('express');
var router = express.Router();
var employee = require('../controllers/employee.controller');

router.post('/create',employee.create);

router.get('/',employee.list);


module.exports = router;
