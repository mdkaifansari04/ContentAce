import express from "express";
import {
  createUser,
  getUserById,
  updateOrCreateUser,
} from "../../controller/user/controller";
import userInputValidation from "@src/validation/userSchema";

const router = express.Router();

router.post("/", userInputValidation, createUser);
router.get("/:id", getUserById);
router.put("/:id",userInputValidation, updateOrCreateUser);

export default router;
