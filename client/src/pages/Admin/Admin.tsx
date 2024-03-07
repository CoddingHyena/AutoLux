import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';

import PageHeader from '../../components/pageHeader';
import CardHeader from '../../components/cardHeader';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';

import DataTable from '../../components/dataTable';

import employeesData from '../../_mocks/employees';

const getHeadCells = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Id',
  },
  {
    id: 'Name',
    numeric: false,
    disablePadding: false,
    label: 'Имя',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: false,
    label: 'Роль',
  },
  {
    id: 'PersDataAgr',
    numeric: true,
    disablePadding: false,
    label: 'Согласие на рассылки',
  },
  {
    id: 'actions',
    numeric: true,
    disablePadding: false,
    label: 'Управление',
  },
];

export default function adminPage() {
  return (
    <>
      <PageHeader title="Администрирование">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            textTransform: 'uppercase',
          }}
        >
          <Link underline="hover" href="/">
            Главная
          </Link>
          <Typography color="text.tertiary">Администрирование</Typography>
        </Breadcrumbs>
      </PageHeader>
      <DataTableSection name="Dense" props={{ dense: true }} />
    </>
  );
}

function DataTableSection({ name, props }) {
  return (
    <Card component="section" type="section">
      <CardHeader title="Пользователи" subtitle="">
        <Button variant="contained" disableElevation endIcon={<AddIcon />}>
          Новый пользователь
        </Button>
      </CardHeader>
      <DataTable
        {...props}
        headCells={getHeadCells}
        rows={employeesData.slice(0, 27)}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row?.position}</TableCell>
            <TableCell align="left">{row?.email}</TableCell>
            <TableCell align="right">${row.salary.toLocaleString()}</TableCell>
            <TableCell align="right">
              <Tooltip title="Редактировать" arrow>
                <IconButton
                  aria-label="edit"
                  color="warning"
                  size="small"
                  sx={{ fontSize: 2 }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <ModeEditOutlineOutlinedIcon fontSize="medium" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Удалить" arrow>
                <IconButton
                  aria-label="edit"
                  color="error"
                  size="small"
                  sx={{ fontSize: 2 }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <PersonOffOutlinedIcon fontSize="medium" />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        )}
      />
    </Card>
  );
}
