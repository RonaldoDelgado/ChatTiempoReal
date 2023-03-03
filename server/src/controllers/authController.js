import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { SECRET } from "../../config.js";
import Role from "../models/Roles.js";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "Estudiante" });
    newUser.roles = [role._id];
  }
  const saveUser = await newUser.save();

  res.status(200).json({ ...saveUser._doc });
};

export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );

  if (!userFound)
    return res.status(404).json({ message: "User no encontrado" });
  const matchPass = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPass)
    return res.status(400).json({ message: "Contraseña incorrecta" });

  res.json({ message: "iniciaste sesion" });
};
