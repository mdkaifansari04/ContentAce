import ErrorResponse from "@src/helper/errorResponse";
import { CustomRequest } from "@src/interface/document";
import { NextFunction, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import User from "@src/api/v1/models/userSchema";

interface Payload extends JwtPayload {
  userId?: string;
}

const protect = async (
  req: CustomRequest,
  _res: Response,
  next: NextFunction
) => {
  try {
    let token = null;

    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) return next(new ErrorResponse("Token not provided", 400));
    const decoded: Payload | string = jwt.verify(
      token,
      process.env.SECRET_KEY!
    );

    if (!decoded)
      return next(new ErrorResponse("Authentication failed, Try again", 400));

    if (typeof decoded !== "string") {
      const user = await User.findById(decoded.userId);
      if (!user) return next(new ErrorResponse("User not found", 404));
      req.userId = decoded.userId;
      next();
    } else {
      return next(new ErrorResponse("Invalid token provided", 400));
    }
  } catch (error) {
    next(new ErrorResponse(`Internal server error : ${error}`, 500));
  }
};
export default protect;
