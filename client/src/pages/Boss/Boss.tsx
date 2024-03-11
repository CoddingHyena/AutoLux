import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import NotRegistered from '../../components/NotRegistered';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DataTable from '../../components/dataTable';

import CustomerCard from './customerCard';
import SaleProgressCard from './saleProgressCard';

import PageHeader from '../../components/pageHeader';
import CardHeader from '../../components/cardHeader';
import toUserDocs from '../../_mocks/toUserDocs';
import managersByDocs from '../../_mocks/managersByDocs';
import problemDocs from '../../_mocks/problemDocs';

import StatsSection from './statsSection';
import { useAppSelector } from '../../redux/hooks';

export default function BossPage() {
  const user = useAppSelector((store) => store.userSlice.user);

  return (
    <>
      {user.role === 'accessBoss' ? (
        <Stack>
          <WelcomeSection />
          {/* StatsSection на всю ширину и первым элементом с отступом снизу */}
          <Grid item xs={12} sx={{ mb: 3 }}>
            {' '}
            {/* Устанавливаем отступ снизу */}
            <StatsSection />
          </Grid>

          <Grid container spacing={3}>
            {/* Колонка для SaleProgressCard */}
            <Grid
              item
              xs={12} // Для мобильных устройств каждая колонка занимает всю ширину
              sm={6} // Для планшетов и больше каждая колонка занимает половину ширины
            >
              <Stack spacing={3} direction="column">
                <SaleProgressCard />
              </Stack>
            </Grid>

            {/* Колонка для CustomerCard */}
            <Grid
              item
              xs={12} // Для мобильных устройств каждая колонка занимает всю ширину
              sm={6} // Для планшетов и больше каждая колонка занимает половину ширины
            >
              <Stack spacing={3} direction="column">
                <CustomerCard />
              </Stack>
            </Grid>
          </Grid>
          <ManagersTable />
          <ProblemsTable />
        </Stack>
      ) : (
        <NotRegistered />
      )}
    </>
  );
}

function ManagersTable({ name, props }) {
  return (
    <Card component="section" type="section" sx={{ marginTop: 4 }}>
      <CardHeader title="Менеджеры выполнено за месяц" subtitle=""></CardHeader>
      <DataTable
        {...props}
        headCells={getHeadCellsManagers}
        rows={managersByDocs}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row?.closedsTestdrives}</TableCell>
            <TableCell align="left">{row?.closedsFeedbacks}</TableCell>
            <TableCell align="left">{row?.closedsTO}</TableCell>
            <TableCell align="left">{row?.closedTickets}</TableCell>
            <TableCell align="left">{row?.averageRating}</TableCell>
          </TableRow>
        )}
      />
    </Card>
  );
}

function ProblemsTable({ name, props }) {
  return (
    <Card component="section" type="section" sx={{ marginTop: 4 }}>
      <CardHeader title="Документы с низкой оценкой" subtitle=""></CardHeader>
      <DataTable
        {...props}
        headCells={getHeadproblemsTable}
        rows={problemDocs}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row.date}</TableCell>
            <TableCell align="left">{row?.docType}</TableCell>
            <TableCell align="left">{row?.userScore}</TableCell>
            <TableCell align="left">{row?.userComment}</TableCell>
          </TableRow>
        )}
      />
    </Card>
  );
}

function WelcomeSection() {
  return (
    <PageHeader title="Статистика за текущий месяц">
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        <Link underline="hover" href="#!">
          Главная
        </Link>
        <Typography color="text.tertiary">Статистика</Typography>
      </Breadcrumbs>
    </PageHeader>
  );
}

const getHeadCellsManagers = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Id',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'ФИО',
  },
  {
    id: 'closedsTestdrives',
    numeric: false,
    disablePadding: false,
    label: 'Тестдрайвы',
  },
  {
    id: 'closedsFeedbacks',
    numeric: false,
    disablePadding: false,
    label: 'Обращения',
  },
  {
    id: 'closedsTO',
    numeric: false,
    disablePadding: false,
    label: 'Техобслуживание',
  },
  {
    id: 'closedTickets',
    numeric: false,
    disablePadding: false,
    label: 'Всего заявок',
  },
  {
    id: 'averageRating',
    numeric: false,
    disablePadding: false,
    label: 'Средняя оценка',
  },
];

const getHeadproblemsTable = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Id',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Дата',
  },
  {
    id: 'docType',
    numeric: false,
    disablePadding: false,
    label: 'Тип документа',
  },
  {
    id: 'userScore',
    numeric: false,
    disablePadding: false,
    label: 'Оценка',
  },
  {
    id: 'userComment',
    numeric: false,
    disablePadding: false,
    label: 'Комментарий',
  },
];
