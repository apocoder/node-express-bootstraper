var mongoose = require('mongoose');
var Employee = require('../models/employee.model');

var employeeController = {};

employeeController.list = function (req,res) {
	Employee.find({}).exec(function (err,emplooyes) {
		if(err)console.log(err);
		res.json(emplooyes);
	})
}

employeeController.create = function  (req,res) {
	var employeeModel = Employee(req.body);
	employeeModel.save(function(err) {
		if(err)console.log(err);
		res.send(200);
	})
}

module.exports = employeeController;