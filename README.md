# ContentAce - Power Your Creativity

[![ContentAce Banner](https://res.cloudinary.com/dngfmzv2g/image/upload/v1720385460/Projects/ContentAce_Banner_hwsh7v.png)](https://github.com/mdkaifansari04/ContentAce)

ContentAce is your ultimate tool for generating captivating content across various platforms. From YouTube to social media, blogs to emails, ContentAce leverages the power of AI to streamline your content creation process. Whether you're a creator, marketer, or business, ContentAce helps you craft engaging and effective content effortlessly.

## ⚡ Project Status

<div align="center">

![GitHub contributors](https://img.shields.io/github/contributors/mdkaifansari04/ContentAce?style=for-the-badge&color=%2314B8A5)
![license MIT](https://img.shields.io/github/license/mdkaifansari04/ContentAce?style=for-the-badge&color=%2314B8A5)
![Stargazers](https://img.shields.io/github/stars/mdkaifansari04/ContentAce?style=for-the-badge&color=%2314B8A5)
![Forks](https://img.shields.io/github/forks/mdkaifansari04/ContentAce?style=for-the-badge&color=%2314B8A5)
![GitHub Open issues](https://img.shields.io/github/issues/mdkaifansari04/ContentAce?style=for-the-badge&color=%2314B8A5)
![GitHub Closed issues](https://img.shields.io/github/issues-closed/mdkaifansari04/ContentAce?style=for-the-badge&color=%2314B8A5)
![GitHub PR Open](https://img.shields.io/github/issues-pr/mdkaifansari04/ContentAce?style=for-the-badge&color=%2314B8A5)
![GitHub PR closed](https://img.shields.io/github/issues-pr-closed/mdkaifansari04/ContentAce?style=for-the-badge&color=%2314B8A5)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/mdkaifansari04/ContentAce?style=for-the-badge&color=%2314B8A5)
![GitHub top language](https://img.shields.io/github/languages/top/mdkaifansari04/ContentAce?style=for-the-badge&color=%2314B8A5)

</div>

## Table of Contents

- [Technology Used](#-technology-used)
- [Live Demo](#live-demo-)
- [Introduction](#-introduction)
- [What does it do?](#-what-does-it-do)
  - [Features](#features)
  - [Benefits](#benefits)
- [License](#%EF%B8%8F-license)
- [How to Contribute?](#-how-to-contribute)
  - [Setup](#setup)
- [Top Contributors](#-top-contributors)
- [Support](#-support)

## 🚀 Technology Used

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
  ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Clerk](https://img.shields.io/badge/Clerk-512DA8?style=for-the-badge&logo=clerk&logoColor=white)
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
  ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
  ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
  
</div>

- [Next.js 14](https://nextjs.org) - A React framework for building web applications with server-side rendering.
- [React Query](https://react-query.tanstack.com) - Data fetching library for React.
- [Zustand](https://zustand.surge.sh) - State management library for React.
- [Node.js](https://nodejs.org) - JavaScript runtime for building scalable network applications.
- [Express](https://expressjs.com) - Web framework for Node.js.
- [MongoDB](https://www.mongodb.com) - NoSQL database for modern web applications.
- [Zod](https://zod.dev) - TypeScript-first schema declaration and validation library.
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework for rapidly building custom user interfaces.
- [ShadCN](https://shadcn.dev) - Utility-first framework for building UI components.
- [JWT](https://jwt.io) - Compact, URL-safe means of representing claims to be transferred between two parties.
- [Framer Motion](https://www.framer.com/motion) - Animation library for React.
- [TypeScript](https://www.typescriptlang.org) - Typed superset of JavaScript that compiles to plain JavaScript.

## Live Demo 💻
Please wait a while I have to deploy the backend to AWS and manage containers over there and will update it in a while 😅

<br />
<br />

## 👋 Introduction

ContentAce is a platform designed to help content creators, marketers, and businesses generate compelling content for various platforms. Leveraging modern web technologies, it provides users with an intuitive interface and powerful AI-driven features to enhance content creation.

[![ContentAce Banner](.github/assets/browser.png)](https://github.com/mdkaifansari04/ContentAce)

## 🔨 What does it do?

ContentAce enables users to create engaging content for YouTube, blogs, social media, and emails. The platform supports various features to streamline the content creation process and enhance productivity.

### Features

- **YouTube Content Generator**: Generate ideas, titles, tags, descriptions, and more for YouTube videos.
- **Blog Content Generator**: Create blog posts, ideas, introductions, conclusions, and more.
- **Email Generator**: Draft cold emails, follow-ups, referral emails, and more.
- **Social Media Content Generator**: Generate post ideas, captions, hashtags, and more for social media platforms.(Yet to come)
- **Product Description Generator**: Craft compelling product descriptions for e-commerce sites. (Yet to come)

### Benefits

- **Time-Saving**: Quickly generate high-quality content without spending hours brainstorming.
- **Consistency**: Maintain a consistent tone and style across all your content.
- **SEO Optimization**: Generate SEO-friendly content to improve your online visibility.
- **Enhanced Creativity**: Get inspired with fresh ideas and creative suggestions from AI.

## 🛡️ License

ContentAce is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Setup

To set up the development environment, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/mdkaifansari04/ContentAce.git
cd ContentAce
```

2. Set up the MindsDB container running in the background.

3. Create the MindsDB model:

```sql
-- Used for creating the model
CREATE MODEL contentace
PREDICT sentiment
USING
  engine = 'minds_endpoint_engine',
  model_name = 'mistral-7b',
  prompt_template = 'You are an ai-model that works on system prompt : {{systemPrompt}} and give descriptive answer of the given question : {{question}}';
```

4. Insert a prompt into the MindsDB model:

```sql
-- Prompt
SELECT question, answer
FROM contentaceaimodel
WHERE systemPrompt = 'You are an AI assistant helping a YouTuber who creates videos on web development. The YouTuber aims to educate people on web development concepts and provide demonstrations. The YouTuber is looking for creative and engaging video ideas to help their audience learn effectively.' and question = 'Give some youtube content ideas on web development';
```

5. Navigate to the `frontend` folder and set up the environment variables in a `.env` file:

```sh
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_HOST_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_FEATURE_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

6. Navigate to the `backend` folder and set up the environment variables in a `.env` file:

```sh
PORT=5000
MONGO_URI=
SECRET_KEY=
GROQ_API_KEY=
MINDSDB_API_KEY=
MINDSDB_BASE_URL=http://127.0.0.1:47334/api/projects/mindsdb/models/contentace/predict
```

7. Start the backend server:

```sh
cd backend
npm install
npm run dev
```

8. Start the frontend server:

```sh
cd frontend
npm install
npm run dev
```

## 🙏🏽 Support

This project needs your support! Please star 🌟 this repository if you love it.
