# Used for creating the model

CREATE MODEL contentaceaimodel
PREDICT sentiment
USING
engine = 'minds_endpoint_engine',
model_name = 'mistral-7b',
prompt_template = 'You are a ai-model that works on system prompt : {{systemPrompt}} and give descriptive answer of the given question : {{question}}';

# Prompt

SELECT question, answer
FROM contentaceaimodel
WHERE systemPrompt = 'You are an AI assistant helping a YouTuber who creates videos on web development. The YouTuber aims to educate people on web development concepts and provide demonstrations. The YouTuber is looking for creative and engaging video ideas to help their audience learn effectively.' and question = 'Give some youtube content ideas on web development';
