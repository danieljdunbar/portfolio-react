import { Box, Typography } from '@mui/material';

interface Props {
  text: string;
  userMessage: boolean;
}

export function Message(props: Props) {
  const getColor = () => {
    return props.userMessage ? '#26B3EC' : '#25E090';
  };

  return (
    <Box>
      <Typography color="#EBF0EF">
        <Typography
          color={getColor()}
          style={{ marginRight: '8px', display: 'inline' }}
        >
          &lt; {props.userMessage ? 'User' : 'Jane'} &gt;
        </Typography>

        {props.text}
      </Typography>
    </Box>
  );
}
