import { Request, Response } from "express";
import UserSchema from "../schemas/user";
const bcrypt = require("bcrypt");

module.exports = async (req: Request, res: Response) => {
  const nick: string = req.body.nick;
  const email: string = req.body.email;
  const password: string = req.body.password;
  const character: string = req.body.character;
  const hash = await bcrypt.hash(password, 10);
  UserSchema.create(
    { nick, email, password: hash, character },
    (error: any, user: any) => {
      if (error) res.status(409).json("This email already exists");
      else res.status(201).send();
    }
  );
};
