var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, ) {
  res.send('respond with a resource');
});

module.exports = router;


const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/loginform")

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
});

module.exports = mongoose.model("User", UserSchema);