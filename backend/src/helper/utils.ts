import { BLOG_PROMPTS, EMAIL_PROMPTS, YOUTUBE_PROMPTS } from "./constants";

interface FeedbackItem {
  question: string;
  description: string;
  correctAnswer: string;
}

interface FeedbackResponse {
  feedback: FeedbackItem[];
  recommendation: string;
  strongPoints: string[];
  weakPoints: string[];
}

interface FeedbackItem {
  question: string;
  description: string;
  correctAnswer: string;
}

interface FeedbackResponse {
  feedback: FeedbackItem[];
  recommendation: string;
  strongPoints: string[];
  weakPoints: string[];
}

export function parseFeedback(
  feedbackResponse: string | null
): FeedbackItem[] | undefined {
  if (!feedbackResponse) return;
  const feedback: FeedbackResponse = JSON.parse(feedbackResponse);

  const feedbackItems: FeedbackItem[] = feedback.feedback.map((item) => ({
    question: item.question,
    description: item.description,
    correctAnswer: item.correctAnswer,
  }));

  return feedbackItems;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface YoutubePrompt {
  query: string;
  basePrompt: string;
}

export const getBasePrompt = (query: string, basePath: string) => {
  let basePromptArray;

  switch (basePath) {
    case "youtube":
      basePromptArray = YOUTUBE_PROMPTS.filter(
        (item: YoutubePrompt) => item.query === query
      );
      break;
    case "blog":
      basePromptArray = BLOG_PROMPTS.filter(
        (item: YoutubePrompt) => item.query === query
      );
      break;
    case "email":
      basePromptArray = EMAIL_PROMPTS.filter(
        (item: YoutubePrompt) => item.query === query
      );
      break;

    default:
      return null;
  }

  if (basePromptArray.length > 0) return basePromptArray[0].basePrompt;
  return null;
};
