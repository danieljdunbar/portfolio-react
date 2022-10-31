interface AiChatResponse {
  aiResponse: string;
}

export async function getAiResponse(message: string): Promise<string> {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_BASE_URL + '/ai-chat',
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
