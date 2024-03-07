import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';

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

export default function BossPage() {
  return (
    <Stack sx={{ marginTop: 4 }}>
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
    </Stack>
  );
}

function ManagersTable({ name, props }) {
  return (
    <Card component="section" type="section" sx={{ marginTop: 4 }}>
      <CardHeader title="Менеджеры выполнено за месяц" subtitle=""></CardHeader>
      <DataTable
        {...props}
        headCells={getHeadCellsTO}
        rows={toUserDocs}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row.dateNow}</TableCell>
            <TableCell align="left">{row?.car_id}</TableCell>
            <TableCell align="left">{row?.userScore}</TableCell>
            <TableCell align="left">{row?.userComment}</TableCell>
          </TableRow>
        )}
      />
    </Card>
  );
}

const getHeadCellsTO = [
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
    id: 'carId',
    numeric: false,
    disablePadding: false,
    label: 'Автомобиль',
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
