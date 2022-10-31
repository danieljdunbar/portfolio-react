interface AiChatResponse {
  aiResponse: string;
}

export async function getAiResponse(message: string): Promise<string> {
  try {
    const response = await fetch(
      'https://us-central1-portfolio-c2896.cloudfunctions.net/backend/ai-chat',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ message }),
      }
    );

    const formattedResponse: AiChatResponse = await response.json();
    return formattedResponse.aiResponse;
  } catch (error) {
    return "Sorry, it looks like I'm experiencing an issue right now";
  }
}
