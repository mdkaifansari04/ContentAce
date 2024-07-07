import ErrorResponse from "@src/helper/errorResponse";
import { CustomRequest } from "@src/interface/document";
import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../../models/userSchema";

export const register = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, password, userId } = req.value;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userExits = await User.findOne({ email });
    if (userExits) return next(new ErrorResponse("User already exist", 400));

    const user = await User.create({
      userId,
      name,
      email,
      password: hashedPassword,
    });

    if (!user) return next(new ErrorResponse("Error in saving the user", 401));
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY!);

    res
      .status(200)
      .json({ success: true, message: "Login Successfully", user, token });
  } catch (error: any) {
    console.error(error);
    next(new ErrorResponse(`Internal server error: ${error?.message}`, 500));
  }
};

export const login = (_req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ success: true, msessage: "Login Successfully" });
  } catch (error: any) {
    console.error(error);
    next(new ErrorResponse(`Internal server error: ${error?.message}`, 500));
  }
};
