import AuthForm from './AuthForm';

import Box from '@mui/material/Box';

export default function Auth(): JSX.Element {
  return (
    <Box
      display="flex"
      justifyContent="center" // Центрирование по горизонтали
      alignItems="center" // Центрирование по вертикали
    >
      <AuthForm />
    </Box>
  );
}
