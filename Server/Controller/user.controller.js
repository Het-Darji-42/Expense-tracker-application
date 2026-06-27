const express = require("express");
const userModel = require("../Model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const isUserExist = await userModel.findOne({ email });
    if (isUserExist) {
      return res.status(409).json({
        success: false,
        message: "User Already Existed",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = await userModel.create({
      username,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User Created",
      user: createUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server Side Error",
      error: error.message,
    });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  const isUserExist = await userModel.findOne({ email });
  if (!isUserExist) {
    return res.status(404).json({
      success: false,
      message: "Invalid Credential :U",
    });
  }

  const decryptPass = await bcrypt.compare( password, isUserExist.password);
  if (!decryptPass) {
    return res.status(404).json({
      success: false,
      message: "Invalid Credential :p",
    });
  }

  const token = await jwt.sign(
    { userId: isUserExist._id },
    process.env.JWT_SECRET,
    { expiresIn: "3d" },
  );

  return res.status(200).json({
    success: true,
    message: "User Login Successfully",
    user: {
      id: isUserExist._id,
      username: isUserExist.username,
      email: isUserExist.email,
    },
    token,
  });
  try {
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Side Error",
      error: error.message,
    });
  }
};

module.exports = { Login, Register };
