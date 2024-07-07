import joi from "@hapi/joi";
import { validateSchema } from "@src/helper/validation";
import { CustomRequest } from "@src/interface/document";
import { NextFunction, Response } from "express";

//schema
const promptSchema = joi.object().keys({
  systemPrompt: joi.string().required(),
  userPrompt: joi.string().required(),
});

const additionalSchema = joi.object().keys({
  query: joi.string().required(),
});

//middleware
export const promptValidation = (
  req: CustomRequest,
  _res: Response,
  next: NextFunction
) => {
  validateSchema({ schema: promptSchema, req, next });
};

export const contentPromptValidation = (
  req: CustomRequest,
  _res: Response,
  next: NextFunction
) => {
  const youtubeSchema = promptSchema.concat(additionalSchema);

  validateSchema({ schema: youtubeSchema, req, next });
};
