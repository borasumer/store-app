const router = require('express').Router();
const User = require('../models/user');
const { registerValidation, loginValidation } = require('./validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


//! Validation
router.post('/register', async (req, res) => {

  const { error } = registerValidation(req.body);
  error ? (res.send(error.details[0].message)) : ('Validated Successfully');

  //Checking the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  emailExist ? (res.status(400).send('Email already exists')) : (null);

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  //Create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//!Login
router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  error ? (res.send(error.details[0].message)) : ('Logged in Successfully');
  //Checking the email is already in the database
  const user = await User.findOne({ email: req.body.email });
  !user ? (res.status(400).send('Email does not exist')) : (null);
  //Checking the password 
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  !validPassword ? (res.status(400).send('Invalid Password')) : (null);

  //Create an assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
});


module.exports = router;