import { CHAT_SYSTEM_PROMPT, COMMON_BASE_PROMPT } from "@src/helper/constants";
import ErrorResponse from "@src/helper/errorResponse";
import { getBasePrompt } from "@src/helper/utils";
import { CustomRequest } from "@src/interface/document";
import axios from "axios";
import { NextFunction, Response } from "express";
import Groq from "groq-sdk";
import path from "path";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const chat = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userPrompt, systemPrompt } = req.value;
    const response = await generateResponse(
      `${CHAT_SYSTEM_PROMPT}  ${systemPrompt}`,
      userPrompt
    );

    res.status(200).json({
      success: true,
      message: "Generated response successfully",
      response,
    });
  } catch (error) {
    console.error(error);
    next(new ErrorResponse(`Internal server error`, 500));
  }
};

const generateResponse = async (systemPrompt: string, userPrompt: string) => {
  const response = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
    model: "llama3-8b-8192",
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    stop: null,
    stream: false,
  });

  return response.choices[0].message.content;
};

export const demo = async (
  _req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const baseURL =
      "http://127.0.0.1:47334/api/projects/mindsdb/models/contentace/predict";
    // const apiKey = process.env.MINDSDB_API_KEY;

    const response = await axios.post(
      baseURL,
      {
        data: [
          {
            systemPrompt:
              "You are an AI assistant helping a YouTuber who creates videos on web development. The YouTuber aims to educate people on web development concepts and provide demonstrations. The YouTuber is looking for creative and engaging video ideas to help their audience learn effectively.",
          },
          {
            question: "Can you suggest some video ideas for web development?",
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const generatedContent = JSON.stringify(response.data[0].answer);
    res.status(200).json({ response: generatedContent });
  } catch (error) {
    console.error(error);
    next(new ErrorResponse(`Internal server error`, 500));
  }
};

export const generateContent = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { systemPrompt, userPrompt, query } = req.value;
    const basePath = path.basename(req.originalUrl);
    const basePrompt = getBasePrompt(query, basePath);

    const response = await axios.post(
      process.env.MINDSDB_BASE_URL!,
      {
        data: [
          {
            systemPrompt: systemPrompt,
          },
          {
            question: `${basePrompt ?? COMMON_BASE_PROMPT} ${userPrompt}`,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "Content generated successfully",
      response: response.data[0].answer || "",
    });
  } catch (error) {
    console.error(error);
    next(new ErrorResponse(`Internal server error ${error}`, 500));
  }
};
