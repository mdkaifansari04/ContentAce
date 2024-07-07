import express from "express";
import aiRouter from "./ai/router";
import userRouter from "./user/router";

const router = express.Router();

router.use("/user", userRouter);
router.use("/ai", aiRouter);
export default router;
