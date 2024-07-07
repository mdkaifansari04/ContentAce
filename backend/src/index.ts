import "dotenv/config";

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import cors from "cors"

//local imports
import router from "@src/api/v1/routes/index";
import { connectToDB } from "../config/db";

import errorHandler from "./middleware/error";
const app = express();
const PORT = process.env.PORT || 5000;
connectToDB();

//app passing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(compression());
app.use(helmet());
app.use(cors())

//app routes
app.use("/api/v1", router);

//global error handler
app.use(errorHandler);

//app server
app.listen(PORT, () => {
  console.log(`Server running on  http://localhost:${PORT}`);
});
