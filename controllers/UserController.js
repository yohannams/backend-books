import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        const token = jwt.sign({ username: user.username }, "your-secret-key");

        res.status(200).json({ msg: "Login successful", token });
        return token;
      } else {
        res.status(401).json({ msg: "Invalid credentials" });
      }
    } else {
      res.status(404).json({ msg: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const register = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "Register success" });
  } catch (error) {
    console.log(error.message);
  }
};
