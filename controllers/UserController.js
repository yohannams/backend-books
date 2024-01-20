import User from "../models/UserModel.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if (user) {
      const passwordMatch = await compare(password, user.password);
      //   const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.status(200).json({ msg: "Login successful" });
      } else {
        res.status(401).json({ msg: "Invalid credentials" });
      }
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
