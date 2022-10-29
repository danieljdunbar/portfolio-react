import { Box, Typography } from '@mui/material';

interface Props {
  text: string;
  userMessage: boolean;
}

function Message(props: Props) {
  const getColor = () => {
    return props.userMessage ? '#26B3EC' : '#25E090';
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }}>
      <Typography color={getColor()} style={{ marginRight: '8px' }}>
        &lt; {props.userMessage ? 'User' : 'Jane'} &gt;
      </Typography>
      <Typography color="#EBF0EF">{props.text}</Typography>
    </Box>
  );
}

export default Message;
