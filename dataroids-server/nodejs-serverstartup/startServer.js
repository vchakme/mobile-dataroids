var express = require('express');
var mongodb = require('mongodb');
var status = require("http-status");
var fs = require("fs");

var app = express();
var uri = 'mongodb://localhost:27017/product_data';

console.log("......... starting server ....");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//endpoint to retrieve data by the examinee id (teid).
app.get("/api/examinee/teid/:teid", function(req, res) {
	console.log("......... incoming request for api/examinee/teid ....");
		mongodb.MongoClient.connect(uri, function(error, db) {
			if (error) {
				console.log(error);
				process.exit(1);
			}
			db.collection("wisc5mtcf").findOne({id: parseInt(req.params.teid, 10)},{wisc5_vci_ss:1, wisc5_vsi_ss:1, wisc5_fri_ss:1, wisc5_wmi_ss:1, wisc5_psi_ss:1, wisc5_fsiq_ss:1, wisc5_vci_cil:1, wisc5_vci_cih:1, wisc5_vsi_cil:1, wisc5_vsi_cih:1, wisc5_fri_cil:1, wisc5_fri_cih:1,wisc5_wmi_cil:1,wisc5_wmi_cih:1,wisc5_psi_cil:1,wisc5_psi_cih:1,wisc5_fsiq_cil:1,wisc5_fsiq_cih:1,gender:1,wisc5_doa:1,dob:1}, function(error, wisc5Data) {
				if (error) {
					return res.status(status.INTERNAL_SERVER_ERROR).json({error: error.toString()});
				}
				if (!wisc5Data) {
					return res.status(status.NOT_FOUND).json({error: 'Not Found'});
				}
				res.json({wisc5Data: wisc5Data})
		});
	});		
});

//endpoint to retrieve all examineess.
app.get("/api/examinees", function(req, res) {
	console.log("......... incoming request for api/examinees ....");
		mongodb.MongoClient.connect(uri, function(error, db) {
			if (error) {
				console.log(error);
				process.exit(1);
			}
			db.collection("wisc5mtcf").find({},{teid:1, dob:1, wisc5_doa:1, gender:1, wisc5_vci_ss:1, wisc5_vsi_ss:1, wisc5_fri_ss:1, wisc5_wmi_ss:1, wisc5_psi_ss:1, wisc5_fsiq_ss:1}).toArray(function(error, examineesData) {
				if (error) {
					return res.status(status.INTERNAL_SERVER_ERROR).json({error: error.toString()});
				}
				if (!examineesData) {
					return res.status(status.NOT_FOUND).json({error: 'Not Found'});
				}
				res.json({examineesData: examineesData})
		});
	});		
});

app.listen(3000);
console.log('Server listening on port 3000');