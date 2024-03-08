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
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useEffect } from 'react';
import { fetchAdminCars, fetchAdminDocFB, fetchAdminDocTD, fetchAdminDocTO, fetchAdminUsers } from '../../redux/admin/adminThunkActions';

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
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Телефон',
  },
  {
    id: 'role_id',
    numeric: false,
    disablePadding: false,
    label: 'Роль_id',
  },
  {
    id: 'propType',
    numeric: false,
    disablePadding: false,
    label: 'Юридическое лицо',
  },
  {
    id: 'actions',
    numeric: true,
    disablePadding: false,
    label: 'Управление',
  },
];

const getDocsTD = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Id',
  },
  {
    id: 'user_id',
    numeric: false,
    disablePadding: false,
    label: 'User_id',
  },
  {
    id: 'car_id',
    numeric: false,
    disablePadding: false,
    label: 'car_id',
  },
  {
    id: 'manager',
    numeric: false,
    disablePadding: false,
    label: 'manager',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'status',
  },
  {
    id: 'ourComment',
    numeric: false,
    disablePadding: false,
    label: 'ourComment',
  },
  {
    id: 'dateNow',
    numeric: false,
    disablePadding: false,
    label: 'dateNow',
  },
  {
    id: 'actions',
    numeric: true,
    disablePadding: false,
    label: 'Управление',
  },
];

const getDocsFB = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Id',
  },
  {
    id: 'dateNow',
    numeric: false,
    disablePadding: false,
    label: 'Дата создания',
  },
  {
    id: 'userName',
    numeric: false,
    disablePadding: false,
    label: 'Имя',
  },
  {
    id: 'user_id',
    numeric: false,
    disablePadding: false,
    label: 'из кабинета?',
  },
  {
    id: 'phoneNumber',
    numeric: false,
    disablePadding: false,
    label: 'Тел',
  },
  {
    id: 'userComment',
    numeric: false,
    disablePadding: false,      
    label: 'Обращение',
  },
  {
    id: 'manager',
    numeric: false,
    disablePadding: false,
    label: 'Менеджер',
  },
  {
    id: 'ourComment',
    numeric: false,
    disablePadding: false,
    label: 'Менеджер',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'status',
  },
  {
    id: 'actions',
    numeric: true,
    disablePadding: false,
    label: 'Управление',
  },
];

const getDocsCars = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Id',
  },
  {
    id: 'mark',
    numeric: false,
    disablePadding: false,
    label: 'Марка',
  },
  {
    id: 'model',
    numeric: false,
    disablePadding: false,
    label: 'Модель',
  },
  {
    id: 'color',
    numeric: false,
    disablePadding: false,
    label: 'Цвет',
  },
  {
    id: 'prodYear',
    numeric: false,
    disablePadding: false,
    label: 'Дата выпуска',
  },
  {
    id: 'gosNum',
    numeric: false,
    disablePadding: false,
    label: 'Госномер',
  },
  {
    id: 'gear',
    numeric: false,
    disablePadding: false,
    label: 'Коробка',
  },
  {
    id: 'engine',
    numeric: false,
    disablePadding: false,
    label: 'Двигатель',
  },
  {
    id: 'vin',
    numeric: false,
    disablePadding: false,
    label: 'VIN',
  },  {
    id: 'user_id',
    numeric: false,
    disablePadding: false,
    label: 'user_id',
  },
  {
    id: 'ours',
    numeric: false,
    disablePadding: false,
    label: 'Машина наша',
  },
  {
    id: 'bu',
    numeric: false,
    disablePadding: false,
    label: 'Машина с пробегом',
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
      <DataTableDocTD  name="Dense" props={{ dense: true }}/>
      < DataTableDocTO name="Dense" props={{ dense: true }}/>
      <DataTableDocFB name="Dense" props={{ dense: true }} />
      <DataTableCars name="Dense" props={{ dense: true }} />
      
    </>
  );
}

function DataTableSection({ name, props }) {

  const usersAll = useAppSelector((store) => store.adminSlice.users)
  console.log('store usersAll admin', usersAll)

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminUsers())
  },[]);

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
        rows={usersAll}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="left">{row?.email}</TableCell>
            <TableCell align="left">{row?.phone}</TableCell>
            <TableCell align="right">{row.role_id}</TableCell>
            <TableCell align="right">{`${row.propType}`}</TableCell>
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

function DataTableDocTD({ name, props }) {

  const docsTD = useAppSelector((store) => store.adminSlice.docsTD)
  console.log('store usersAll admin', docsTD)

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminDocTD())
  },[]);

  return (
    <Card component="section" type="section">
      <CardHeader title="Документы Тестдрайв" subtitle="">
        <Button variant="contained" disableElevation endIcon={<AddIcon />}>
          Новый документ
        </Button>
      </CardHeader>
      <DataTable
        {...props}
        headCells={getDocsTD}
        rows={docsTD}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row.user_id}</TableCell>
            <TableCell align="left">{row?.car_id}</TableCell>
            <TableCell align="left">{row?.manager}</TableCell>
            <TableCell align="right">{`${row.status}`}</TableCell>
            <TableCell align="right">{row?.ourComment}</TableCell>
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

function DataTableDocTO({ name, props }) {

  const docsTO = useAppSelector((store) => store.adminSlice.docsTO)
  console.log('store usersAll admin', docsTO)

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminDocTO())
  },[]);

  return (
    <Card component="section" type="section">
      <CardHeader title="Документы ТО" subtitle="">
        <Button variant="contained" disableElevation endIcon={<AddIcon />}>
          Новый документ
        </Button>
      </CardHeader>
      <DataTable
        {...props}
        headCells={getDocsTD}
        rows={docsTO}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row.user_id}</TableCell>
            <TableCell align="left">{row?.car_id}</TableCell>
            <TableCell align="left">{row?.manager}</TableCell>
            <TableCell align="right">{`${row.status}`}</TableCell>
            <TableCell align="right">{row?.ourComment}</TableCell>
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

function DataTableDocFB({ name, props }) {

  const docsFB = useAppSelector((store) => store.adminSlice.docsFB)
  console.log('store usersAll admin', docsFB)

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminDocFB())
  },[]);

  

  return (
    <Card component="section" type="section">
      <CardHeader title="FeeDBack" subtitle="">
        <Button variant="contained" disableElevation endIcon={<AddIcon />}>
          Новый документ
        </Button>
      </CardHeader>
      <DataTable
        {...props}
        headCells={getDocsFB}
        rows={docsFB}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row?.dateNow}</TableCell>
            <TableCell align="left">{row?.userName}</TableCell>
            <TableCell align="left">{row.user_id}</TableCell>
            <TableCell align="left">{row?.phoneNumber}</TableCell>
            <TableCell align="left">{row?.userComment}</TableCell>
            <TableCell align="left">{row?.manager}</TableCell>
            <TableCell align="right">{row?.ourComment}</TableCell>
            <TableCell align="right">{`${row.status}`}</TableCell>
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

function DataTableCars({ name, props }) {

  const docsCars = useAppSelector((store) => store.adminSlice.cars)
  console.log('store cars admin', docsCars)

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminCars())
  },[]);

  
  return (
    <Card component="section" type="section">
      <CardHeader title="Cars" subtitle="">
        <Button variant="contained" disableElevation endIcon={<AddIcon />}>
          Новый документ
        </Button>
      </CardHeader>
      <DataTable
        {...props}
        headCells={getDocsCars}
        rows={docsCars}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row?.mark}</TableCell>
            <TableCell align="left">{row?.model}</TableCell>
            <TableCell align="left">{row.color}</TableCell>
            <TableCell align="left">{row?.prodYear}</TableCell>
            <TableCell align="left">{row?.gosNum}</TableCell>
            <TableCell align="left">{row?.gear}</TableCell>
            <TableCell align="right">{row?.engine}</TableCell>
            <TableCell align="right">{row?.vin}</TableCell>
            <TableCell align="right">{row?.user_id}</TableCell>
            <TableCell align="right">{`${row.ours}`}</TableCell>
            <TableCell align="right">{`${row.bu}`}</TableCell>
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