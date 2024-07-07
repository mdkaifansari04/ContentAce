import axios from 'axios';
import {
  ApiResponse,
  GenerateContentBody,
  YoutubeGeneratorResponse,
} from './data-types';

const contentGeneratorApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_URL,
});

// prettier-ignore
export const generateYoutubeContent = async (option: GenerateContentBody) => {
  const {data} = await contentGeneratorApi.post<YoutubeGeneratorResponse>(`/ai/youtube?q=${option.query}`, option);
  console.log("server" ,data);
  return data;
};
