
const asyncHandler = require('express-async-handler');
const User = require('../models/UserModal')


const register = async (req, res) => {
 
  const { name, email, password, picture } = req.body;
  res.json({ name: name, email: email });
  
};

module.exports = {register};
