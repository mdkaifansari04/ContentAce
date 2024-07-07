import { Schema } from "@hapi/joi";
import { CustomRequest } from "@src/interface/document";
import { NextFunction } from "express";
import ErrorResponse from "./errorResponse";

export const validateSchema = ({
  schema,
  req,
  next,
}: {
  schema: Schema;
  req: CustomRequest;
  next: NextFunction;
}) => {
  const { error, value } = schema.validate(req.body);
  if (error) return next(new ErrorResponse(error, 400));
  req.value = value;
  next();
};
