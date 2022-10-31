import { useState } from 'react';
import { Box, Container, TextField, Typography } from '@mui/material';
import Message from './message/Message';
import { getAiResponse } from 'ai-chat';

interface MessageProps {
  text: string;
  userMessage: boolean;
}

function Terminal() {
  const [messageHistory, setMessageHistory] = useState<MessageProps[]>([]);
  const [message, setMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newItem: MessageProps = { text: message, userMessage: true };

    setMessageHistory([newItem, ...messageHistory]);
    setMessage('');

    const historyBox = document.getElementById('messages-history')!;
    historyBox.scrollTop = 0;

    const response = await getAiResponse(newItem.text);
    setMessageHistory((history) => [
      { text: response, userMessage: false },
      ...history,
    ]);
  };

  const renderMessages = () => {
    const messageElements: JSX.Element[] = [];

    if (messageHistory.length <= 0) {
      return <Typography color="white">No messages</Typography>;
    }

    for (const messageInfo of messageHistory) {
      messageElements.push(<Message {...messageInfo} />);
    }

    return messageElements;
  };

  return (
    <Container maxWidth="sm" sx={{ padding: '0px' }}>
      <Box
        id="messages-history"
        style={{
          backgroundColor: '#2B3039',
          padding: '16px',
          borderRadius: '5px',
          maxHeight: '200px',
          overflow: 'auto',
          marginTop: '24px',
        }}
      >
        {renderMessages()}
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          value={message}
          onChange={handleChange}
          sx={{
            backgroundColor: '#2B3039',
            marginTop: '24px',
            input: { color: 'white' },
          }}
        />
      </form>
    </Container>
  );
}

export default Terminal;
