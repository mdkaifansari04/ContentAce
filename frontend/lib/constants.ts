export const APP_NAME = 'ContentAce' as const;
export const APP_DESCRIPTION =
  "ContentAce is the ultimate platform for YouTube creators to enhance their content and grow their audience. Generate unique video ideas, craft engaging titles, and optimize your videos with tailored tags and descriptions. Boost your channel's performance with AI-driven tools that simplify content creation and maximize your reach. With ContentAce, you can focus on creating while we handle the rest.";

export const CHAT_SYSTEM_PROMPT =
  "You are Ace AI, a knowledgeable and helpful AI assistant. Provide accurate, relevant, and up-to-date information in a clear, concise, and friendly manner, ensuring responses are directly related to the user's query and include examples or explanations when necessary.";

export const DEFAULT_SYSTEM_PROMPT = `
You are an AI assistant helping a YouTuber who creates videos on web development. The YouTuber aims to educate people on web development concepts and provide demonstrations. The YouTuber is looking for creative and engaging video ideas to help their audience learn effectively.`;

export const YOUTUBE_CARDS = [
  {
    title: 'YouTube Content Ideas',
    description: 'Generate ideas for YouTube videos.',
    href: 'youtube-content-ideas',
    type: 'youtube',
    hint: 'Describe your YouTube channel, including its main theme, target audience, and any specific topics you typically cover.',
  },
  {
    title: 'YouTube Title Generation',
    description: 'Create optimized titles for YouTube videos.',
    href: 'youtube-title-generation',
    type: 'youtube',
    hint: 'Provide a brief summary of your video content, including key points and the main message you want to convey.',
  },
  {
    title: 'YouTube Tag Generation',
    description: 'Suggest relevant tags for videos.',
    href: 'youtube-tag-generation',
    type: 'youtube',
    hint: 'Mention the main keywords or themes of your video, including any specific terms your target audience might search for.',
  },
  {
    title: 'YouTube Description Generator',
    description: 'Write engaging and SEO-friendly descriptions.',
    href: 'youtube-description-generator',
    type: 'youtube',
    hint: 'Provide a detailed summary of your video content, including key points, main topics, and any calls to action or important links.',
  },
  {
    title: 'Thumbnail Text Generator',
    description: 'Generate catchy text for thumbnails.',
    href: 'thumbnail-text-generator',
    type: 'youtube',
    hint: 'Describe the main focus of your video and any attention-grabbing phrases or words you think would make a compelling thumbnail text.',
  },
  {
    title: 'Video Script Generator',
    description: 'Produce scripts for YouTube videos.',
    href: 'video-script-generator',
    type: 'youtube',
    hint: 'Provide a detailed outline or summary of your video, including the main points you want to cover and the overall tone or style you are aiming for.',
  },
  {
    title: 'SEO Optimization Tips',
    description: 'Provide suggestions for improving video SEO.',
    href: 'seo-optimization-tips',
    type: 'youtube',
    hint: "Describe your video content, including the main topics, keywords you want to rank for, and any SEO strategies you've used before.",
  },
  {
    title: 'Engagement Tips',
    description:
      'Offer best practices for engaging with audiences on social media.',
    href: 'engagement-tips',
    type: 'youtube',
    hint: 'Describe your current engagement strategies, including how you interact with your audience, any challenges you face, and your goals for improving engagement.',
  },
];

export const BLOG_CARDS = [
  {
    title: 'Blog Post Ideas',
    description: 'Generate ideas for blog posts related to YouTube content.',
    href: 'blog-post-ideas',
    type: 'blog',
    hint: 'Describe your YouTube channel and its main topics to generate relevant blog post ideas.',
  },
  {
    title: 'Blog Post Generator',
    description: 'Generate complete blog posts based on specified topics.',
    href: 'blog-post-generator',
    type: 'blog',
    hint: 'Provide a detailed summary or key points of the topic you want the blog post to cover.',
  },
  {
    title: 'Blog Content Planner',
    description: 'Plan and schedule blog posts for consistent publishing.',
    href: 'blog-content-planner',
    type: 'blog',
    hint: "Describe your blog's overall theme, target audience, and your desired posting frequency to create a content plan.",
  },
];

export const EMAIL_CARDS = [
  {
    title: 'Email Templates',
    description:
      'Generate email templates for communication with sponsors, collaborators, or fans.',
    href: 'email-templates',
    type: 'email',
    hint: "Describe the purpose of the email, the recipient's profile, and any specific message or tone you want to convey.",
  },
  {
    title: 'Referral Email',
    description:
      'Create email templates for referral programs and recommendations.',
    href: 'referral-email-generator',
    type: 'email',
    hint: 'Provide details about your referral program, the target audience, and any incentives or key points to include in the email.',
  },
  {
    title: 'Cold Email Generator',
    description:
      'Generate cold email templates for outreach and lead generation.',
    href: 'cold-email-generator',
    type: 'email',
    hint: 'Describe the purpose of the cold email, the type of leads you are targeting, and any specific message or offer you want to highlight.',
  },
];
