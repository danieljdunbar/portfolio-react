import { useState } from 'react';
import { Box, Container, TextField, Typography } from '@mui/material';
import Message from './message/Message';

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

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newItem: MessageProps = { text: message, userMessage: true };

    setMessageHistory([newItem, ...messageHistory]);
    setMessage('');

    const historyBox = document.getElementById('messages-history')!;
    historyBox.scrollTop = 0;
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

      {/* <Box component="form" onSubmit={handleSubmit}> */}
      {/* <FormControl fullWidth onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          fullWidth
          value={message}
          onChange={handleChange}
          //   onSubmit={handleSubmit}
          sx={{
            backgroundColor: '#2B3039',
            marginTop: '24px',
            input: { color: 'white' },
          }}
        />
      </form>
      {/* <Button onClick={handleSubmit}>Submit</Button> */}
      {/* </FormControl> */}
      {/* </Box> */}
    </Container>
  );
}

export default Terminal;
