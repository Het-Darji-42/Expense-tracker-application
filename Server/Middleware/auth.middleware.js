const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");

const userMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(404).json({
      message: "You're noy authirized, Login or Signup First",
    });
  }

  try {
    const secret = process.env.JWT_SECRET;
    const decode = await jwt.verify(token, secret);

    req.user = decode;
    next();
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: "Token Is Invalid",
      error: error.message,
    });
  }
};

module.exports = userMiddleware;
