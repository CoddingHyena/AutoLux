import { Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function NotRegistered() {
  return (
    <Box display="flex" justifyContent="center" alignItems="baseline">
      <Button
        component={RouterLink}
        to="/auth"
        variant="contained"
        color="primary"
        onClick={() => {
          console.log('Переход на страницу регистрации');
        }}
        sx={{
          fontSize: '2rem',
          padding: '20px 60px',
          borderRadius: '8px',
          marginTop: '140px',
        }}
      >
        Зарегистрируйся!
      </Button>
    </Box>
  );
}
