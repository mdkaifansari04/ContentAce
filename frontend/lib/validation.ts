import { z } from 'zod';

export const feedbackSchema = z.object({
  description: z
    .string()
    .min(1, 'Please enter your feedback or request a feature'),
});

export const contactFormSchema = z.object({
  name: z.string().min(3, 'Please enter a valid name'),
  email: z.string().email('Please enter a valid email'),
  message: z.string().min(5, 'Please enter a valid message'),
});

export const userSchema = z.object({
  name: z.string().min(1, 'Please enter a valid name'),
  email: z.string().email('Please enter a valid email'),
  bio: z.string().min(5, 'Please enter a valid bio'),
});

export type FeedbackBody = z.infer<typeof feedbackSchema>;

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

export type UserFormBody = z.infer<typeof userSchema>;
