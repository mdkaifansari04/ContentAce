import joi from "@hapi/joi";
import { validateSchema } from "@src/helper/validation";
import { NextFunction, Request, Response } from "express";

const userInputValidation = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const userSchema = joi.object().keys({
    userId: joi.string().required(),
    name: joi.string().required(),
    email: joi.string().required(),
    bio: joi.string().optional(),
  });

  validateSchema({ schema: userSchema, req, next });
};

export default userInputValidation;
