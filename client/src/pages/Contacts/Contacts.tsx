import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';

import PageHeader from '../../components/pageHeader';
import CardHeader from '../../components/cardHeader';
import YandexMap from './Maps';

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
          minHeight: '60vh',
        }}
      >
        <CardHeader title="Наши контакты"></CardHeader>
        <YandexMap />
      </Card>
    </>
  );
}
