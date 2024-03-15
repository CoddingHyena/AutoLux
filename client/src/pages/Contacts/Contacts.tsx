import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import PageHeader from '../../components/pageHeader';
import CardHeader from '../../components/cardHeader';
import YandexMap from './Maps';
import { Icon, Stack } from '@mui/material';

export default function contactsPage() {
  return (
    <>
      <PageHeader title="Контакты">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            textTransform: 'uppercase',
          }}
        >
          <Link underline="hover" href="/">
            Главная
          </Link>
          <Typography color="text.tertiary">Контакты</Typography>
        </Breadcrumbs>
      </PageHeader>
      <Card
        type="section"
        sx={{
          display: 'flex',
          minHeight: '60vh',
        }}
      >
        <CardHeader title=""></CardHeader>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <YandexMap />
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', padding: 2 }}>
            {/* Пример текстовых строк с различной стилизацией */}
            <Typography variant="body1" sx={{ marginBottom: 2, fontSize: '1.8rem', fontWeight: 'bold' }}>Добро пожаловать!</Typography>
<Typography variant="body2" sx={{ marginBottom: 2, fontSize: '1.1rem', fontWeight: 'bold' }}>Пнд-Птн: 8:30 - 20:00</Typography>
<Typography sx={{ marginBottom: 2, fontSize: '1.1rem', fontWeight: 'bold' }}>Суббота: 9:00 - 20:00</Typography>
<Typography sx={{ marginBottom: 2, fontSize: '1.1rem', fontWeight: 'bold' }}>Воскресенье: 9:00 - 18:00</Typography>
<Typography sx={{ marginBottom: 2, fontSize: '1.1rem', fontWeight: 'bold' }}>Без перерыва!</Typography>
            {/* Добавьте больше элементов Typography с разной стилизацией для каждой строки */}
            <ContactLink Icon={LocalPhoneOutlinedIcon} text="+79998887766" />
							<ContactLink Icon={EmailOutlinedIcon} text="support@autolux.black" />
							<ContactLink Icon={LocationOnOutlinedIcon} text="127322, г. Москва, Сиреневый бульвар 19" />

          </Grid>
        </Grid>
      </Card>

    </>
  );
}


function ContactLink({ Icon, text }) {
	return (
		<Stack spacing={1} alignItems="center" direction="row">
			<Icon
				color="primary"
				sx={{
					mr: 3,
				}}
			/>
			<Typography variant="body1">{text}</Typography>
		</Stack>
	);
}