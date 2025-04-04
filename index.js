var express = require('express');
var router = express.Router();
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");



// Middleware
router.use(express.urlencoded({ extended: true })); // to parse form data
router.use(express.static("public"));
router.set("view engine", "ejs");

router.get('/login', function(req, res,next) {
  res.render('login', {title: 'Express'});
  next();
});

router.get('/profileforbooking', function(req,res,next){
  res.render('profileforbooking', {title:'Express'});
  next();
});

router.get('/prebooking', function(req,res,next){
  res.render('paymentgateway', { title: 'Express'});
  next();
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' } );
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB Error:", err));

// Load User model
const User = require("./models/User");

// Routes
router.get("/", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ email: username, password });

    if (user) {
      res.redirect("/profileforbooking");
    } else {
      res.send("❌ Invalid email or password");
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

router.get("/profileforbooking", (req, res) => {
  res.send("✅ Logged in successfully. Welcome to your profile!");
});

const PORT = process.env.PORT || 3000;
router.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


module.exports = router;

