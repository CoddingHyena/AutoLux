import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import CardHeader from '../cardHeader';

export default function testDrive() {
  return (
    <Card>
      <CardHeader
        title="Записаться на тест-драйв"
        size="small"
        sx={{
          mb: 2,
        }}
      />
      <Stack spacing={2} direction="column">
        <TextField id="outlined-basic" placeholder="Ваше имя" variant="outlined" />
        <TextField id="phone-input" placeholder="Ваш телефон" variant="outlined" type="tel" />
        <TextField placeholder="Ваши пожелания" multiline minRows={4} />
        <Button variant="contained" disableElevation>
          Записаться
        </Button>
      </Stack>
    </Card>
  );
}
