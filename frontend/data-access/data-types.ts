export type ApiResponse<T = unknown> = {
  status: number;
  body: T;
};

export interface CommonResponse {
  success: number;
  message: string;
}

export interface YoutubeGeneratorResponse extends CommonResponse {
  response: string;
}

export interface UserUpdateResponse extends CommonResponse {
  user: {
    _id: string;
    name: string;
    email: string;
    bio: string;
    userId: string;
    __v: number;
  };
}

export interface ChatModelResponse extends YoutubeGeneratorResponse {}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface CommonModelRequestBody {
  userPrompt: string;
  systemPrompt: string;
}

export interface GenerateContentBody extends CommonModelRequestBody {
  query: string;
}

export interface UserBody {
  userId: string;
  name: string;
  email: string;
  bio: string;
}

export interface ChatRequestBody extends CommonModelRequestBody {}
