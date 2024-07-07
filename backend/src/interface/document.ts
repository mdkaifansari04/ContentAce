import { Request } from "express";

export interface CustomRequest extends Request {
  userId?: String;
  value?: any;
}
