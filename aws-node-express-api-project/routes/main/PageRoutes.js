const express = require("express");
const {getHomePage} = require('../../controllers/main/MainController');
const router = express.Router();

// router.get("/register", function(req, res) {
// 	res.render("pages/index");
// });
 router.route('/').get(getHomePage)
 
module.exports = router;