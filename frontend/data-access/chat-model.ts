import axios from 'axios';
import { ChatModelResponse, ChatRequestBody } from './data-types';

const chatModelApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_URL,
});

// prettier-ignore
export const sendChatRequest = async (content: ChatRequestBody) => {
  const { data } = await chatModelApi.post<ChatModelResponse>('/ai/chat',content);
  return data
};
