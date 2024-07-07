export const CHAT_SYSTEM_PROMPT = `
I'm here to make your content creation and marketing experience seamless and efficient. Whether you're generating ideas for YouTube, crafting engaging social media posts, or optimizing email campaigns, I've got you covered!

Here are a few ways I can assist you:

1. **Generating Content Ideas:** Need inspiration for your next YouTube video, blog post, or social media update? Ask me for creative and engaging content ideas tailored to your audience and niche.

2. **Creating Optimized Titles and Descriptions:** Struggling with titles and descriptions? I can help you craft compelling and SEO-friendly titles and descriptions that attract viewers and readers.

3. **Suggesting Relevant Tags:** Enhance your content's visibility with the right tags. I can suggest trending and relevant tags for your YouTube videos and social media posts to boost your discoverability.

4. **Writing Scripts and Emails:** Need a script for your next video or an email template for outreach? I can generate detailed scripts and professional email templates to suit your needs.

5. **Offering SEO and Engagement Tips:** Want to improve your content’s performance? I can provide valuable SEO tips and engagement strategies to help you reach a wider audience and increase interaction.

6. **Planning and Scheduling Content:** Stay organized with a comprehensive content planner. I can help you plan and schedule your blog posts, videos, and social media updates for consistent publishing.

Feel free to start a conversation with me anytime you need assistance. Together, let's make your content creation and marketing journey productive and enjoyable!
`.trim();

export const COMMON_BASE_PROMPT =
  "Generate comprehensive, engaging, and optimized content for the following feature: " as const;

export const YOUTUBE_PROMPTS = [
  {
    query: "youtube-content-ideas",
    basePrompt:
      "Generate a list of unique and engaging content ideas that would captivate the audience for a YouTube video on the following topic: ",
  },
  {
    query: "youtube-title-generation",
    basePrompt:
      "Create an optimized and catchy title that maximizes click-through rates and accurately represents the content for a YouTube video about: ",
  },
  {
    query: "youtube-tag-generation",
    basePrompt:
      "Suggest a set of relevant and trending tags that will help improve the discoverability and SEO ranking of a YouTube video about: ",
  },
  {
    query: "youtube-description-generator",
    basePrompt:
      "Write an engaging and SEO-friendly description that includes key information and calls to action for a YouTube video about: ",
  },
  {
    query: "thumbnail-text-generator",
    basePrompt:
      "Generate catchy and appealing text for a YouTube video thumbnail that will grab viewers' attention and encourage them to click on a video about: ",
  },
  {
    query: "video-script-generator",
    basePrompt:
      "Produce a detailed and structured script that includes an introduction, key points, and conclusion for a YouTube video on the topic: ",
  },
  {
    query: "seo-optimization-tips",
    basePrompt:
      "Provide comprehensive SEO optimization tips, including keyword usage, metadata, and engagement strategies, for improving the visibility of a YouTube video about: ",
  },
  {
    query: "engagement-tips",
    basePrompt:
      "Offer detailed best practices and strategies for engaging with audiences on social media, including comments, shares, and interactions, for a YouTube video about: ",
  },
] as const;

export const EMAIL_PROMPTS = [
  {
    query: "email-templates",
    basePrompt:
      "Generate professional and customizable email templates suitable for communication with sponsors, collaborators, or fans. Ensure the templates are versatile and cover various common scenarios: ",
  },
  {
    query: "referral-email-generator",
    basePrompt:
      "Create effective and engaging email templates for referral programs and recommendations. Ensure the emails encourage recipients to refer others and highlight the benefits of participating: ",
  },
  {
    query: "cold-email-generator",
    basePrompt:
      "Generate compelling and persuasive cold email templates for outreach and lead generation. Ensure the emails capture the recipient's interest and provide a clear call to action: ",
  },
] as const;

export const BLOG_PROMPTS = [
  {
    query: "blog-post-ideas",
    basePrompt:
      "Generate a list of unique and engaging blog post ideas that would captivate readers and provide valuable insights on the following topic: ",
  },
  {
    query: "blog-post-generator",
    basePrompt:
      "Write a comprehensive and well-structured blog post that includes an introduction, key points, supporting evidence, and a conclusion on the following topic: ",
  },
  {
    query: "blog-content-planner",
    basePrompt:
      "Create a detailed content planner for blog posts, including a posting schedule, topic ideas, keywords, and deadlines to ensure consistent publishing: ",
  },
] as const;
