import * as YoutubeContentGenerator from '@/data-access/content-generator';
import * as ChatModel from '@/data-access/chat-model';
import * as UserModel from '@/data-access/user';
import { useMutation } from '@tanstack/react-query';

export const useGenerateContent = () => {
  return useMutation({
    mutationKey: ['youtube'],
    mutationFn: YoutubeContentGenerator.generateYoutubeContent,
  });
};

export const useSendChatRequest = () => {
  return useMutation({
    mutationKey: ['chat'],
    mutationFn: ChatModel.sendChatRequest,
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationKey: ['user'],
    mutationFn: UserModel.update,
  });
};
