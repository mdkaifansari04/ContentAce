import {
  promptValidation,
  contentPromptValidation,
} from "@src/validation/promptSchema";
import express from "express";
import { chat, generateContent } from "../../controller/ai/controller";

const router = express.Router();

router.post("/chat", promptValidation, chat);
router.post("/youtube", contentPromptValidation, generateContent);
router.post("/blog", contentPromptValidation, generateContent);
router.post("/email", contentPromptValidation, generateContent);
export default router;
