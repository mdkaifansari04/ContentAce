import { type ClassValue, clsx } from "clsx";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { BLOG_CARDS, EMAIL_CARDS, YOUTUBE_CARDS } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class Validator {
  static checkEmail(email: string) {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  static checkLength(value: string, length: number) {
    return value.length >= length ? true : false;
  }
}

export interface FormPrompt {
  title: string;
  description: string;
  href: string;
  type: string;
  hint: string;
}

export const getFormPrompt = (basePath: string, query: string) => {
  let formPromptArray;

  switch (basePath) {
    case "youtube":
      formPromptArray = YOUTUBE_CARDS.filter(
        (item: FormPrompt) => item.href === query
      );
      break;
    case "blog":
      formPromptArray = BLOG_CARDS.filter(
        (item: FormPrompt) => item.href === query
      );
      break;
    case "email":
      formPromptArray = EMAIL_CARDS.filter(
        (item: FormPrompt) => item.href === query
      );
      break;

    default:
      return null;
  }

  if (formPromptArray.length > 0) return formPromptArray[0];
  return null;
};
