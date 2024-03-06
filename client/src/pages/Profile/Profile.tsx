import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';

import EditIcon from '@mui/icons-material/Edit';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import CardHeader from '../../components/cardHeader';

function Account() {
  return (
    <Stack spacing={6} sx={{ marginTop: 4 }}>
      <GeneralSettingsSection />
      <ProfileDocsSection />
      <ProfileRequestsSection />
    </Stack>
  );
}

function GeneralSettingsSection() {
  return (
    <Card type="section">
      <CardHeader title="Ваш профиль" />
      <Stack spacing={6}>
        <form onSubmit={() => {}}>
          <Grid container rowSpacing={2} columnSpacing={4}>
            <Grid item xs={12} sm={6} md={6}>
              <TextField label="ФИО" variant="outlined" defaultValue="elizabeth_123" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                type="Email"
                label="Email"
                variant="outlined"
                defaultValue="demo@sample.com"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <Button
                disableElevation
                variant="contained"
                endIcon={<EditIcon />}
                sx={{
                  float: 'right',
                }}
              >
                Сохранить
              </Button>
            </Grid>
          </Grid>
        </form>
      </Stack>
    </Card>
  );
}

function ProfileDocsSection() {
  return (
    <Card type="section">
      <CardHeader title="Ваши документы" />
      <Stack spacing={3}>
        <h2>Тип доков 1</h2>
        <p>Здесь позже разместим доки типа 1 в табличном виде</p>
        <Divider />
        <h2>Тип доков 2</h2>
        <p>Здесь позже разместим доки типа 2 в табличном виде</p>
      </Stack>
    </Card>
  );
}

function ProfileRequestsSection() {
  return (
    <Card type="section">
      <CardHeader title="Ваши обращения" />
      <Stack spacing={3}>
        <p>Здесь позже разместим обращения в табличном виде</p>
      </Stack>
    </Card>
  );
}

export default Account;
