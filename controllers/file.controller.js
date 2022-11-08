// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const generator = require('generate-password');
// const fs = require("fs");

// const User = require('../models/user.model');

// /**
//  * use to register the users
//  * @param {Object} req
//  * @param {Object} res
//  * @returns {Object} res
//  */

// const uploadFile = async(req, res)=>{
//     fs.unlink(`${process.env.UPLOAD_DIR}/${req.body.previousname}`, (err) => {
// 		if (err) {
// 			console.error(err.message);
// 			return res.status(500).send();
// 		}
// 	});
// 	res.status(200).json("File updated");
// }

// module.exports = {uploadFile};