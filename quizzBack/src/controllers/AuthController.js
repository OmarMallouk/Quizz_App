import { Users } from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const login = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await Users.findOne({
        username,
      });
  
      if (!user) {
        return res.status(404).send({
          message: "Invalid Credentials",
        });
      }
  
      const check = await bcrypt.compare(password, user.password);
  
      if (!check) {
        return res.status(400).send({
          message: "Invalid Credentials",
        });
      }
  
      const token = await jwt.sign({ userId: user.id }, "secret");
  
      return res.status(200).send({ user, token });
    } catch (error) {
      console.log(error.message);
  
      return res.status(500).send({
        message: "Something went wrong",
      });
    }
  };