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
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DataTable from '../../components/dataTable';

import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import EditIcon from '@mui/icons-material/Edit';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import CardHeader from '../../components/cardHeader';
import toUserDocs from '../../_mocks/toUserDocs';
import userCars from '../../_mocks/cars';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  fetchCars,
  fetchDocTD,
  fetchDocTO,
  fetchLkUsers,
  fetchUpdatUser,
} from '../../redux/lk/lkThunkActions';
import { useEffect, useState } from 'react';
import TestDrive from '../../components/testDrive';

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

const getHeadCellsUserAuto = [
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
  },
];

export default function Account() {
  return (
    <Stack spacing={6} sx={{ marginTop: 4 }}>
      <GeneralSettingsSection />
      <UserDocsToTable />
      <UserDocsTestDriveTable />
      <UserAutoTable />
      <TestDrive/>
    </Stack>
  );
}

function GeneralSettingsSection() {
  const isLoading = useAppSelector((store) => store.lkSlice.isLoading);

  const user = useAppSelector((store) => store.lkSlice.user);
  const name = user.name;
  const phone = user.phone;
  console.log('userUpdate', user);

  const [inputsName, setInputsName] = useState<string>(name);
  const [inputsPhone, setInputsPhone] = useState<string>(phone);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchLkUsers());
  }, []);

  const handleTitleChange1 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputsName(event.target.value);
  };
  const handleTitleChange2 = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputsPhone(event.target.value);
  };

  const handleSaveUser = async (): Promise<void> => {
    void dispatch(fetchUpdatUser({ inputsName, inputsPhone }));
  };
  if (!isLoading) {
    return (
      <Card type="section">
        <CardHeader title="Ваш профиль" />
        <Stack spacing={6}>
          <form onSubmit={() => {}}>
            <Grid container rowSpacing={2} columnSpacing={4}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="ФИО"
                  variant="outlined"
                  defaultValue={`${name}`}
                  fullWidth
                  onChange={handleTitleChange1}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  type="Phone"
                  label="Phone"
                  variant="outlined"
                  defaultValue={`${phone}`}
                  fullWidth
                  onChange={handleTitleChange2}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <Button
                  onClick={() => handleSaveUser()}
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
}

// GET('/api/lk/DocTestDrive')
// GET('/api/lk/DocTO')
//  возвращают массив с элементами
//  atributes: ['id', 'dateNow', 'user_id', 'car_id', 'userScore', 'userComment']

function UserDocsToTable({ name, props }) {
  const docsTO = useAppSelector((store) => store.lkSlice.docsTO);
  console.log('docsTD', docsTO);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchDocTO());
  }, []);

  return (
    <Card component="section" type="section">
      <CardHeader title="Документы на Техобслуживание" subtitle=""></CardHeader>
      <DataTable
        {...props}
        headCells={getHeadCellsTO}
        rows={docsTO}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row.dateNow}</TableCell>
            <TableCell align="left">{row?.car_id}</TableCell>
            <TableCell align="left">{row?.userScore}</TableCell>
            <TableCell align="left">{row?.userComment}</TableCell>
            {/* <TableCell align="right">${row.salary.toLocaleString()}</TableCell> */}
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
            </TableCell>
          </TableRow>
        )}
      />
    </Card>
  );
}

function UserDocsTestDriveTable({ name, props }) {
  const docsTD = useAppSelector((store) => store.lkSlice.docsTD);
  console.log('docsTD', docsTD);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchDocTD());
  }, []);

  return (
    <Card component="section" type="section">
      <CardHeader title="Тестдрайв" subtitle=""></CardHeader>
      <DataTable
        {...props}
        headCells={getHeadCellsTO}
        rows={docsTD}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row.dateNow}</TableCell>
            <TableCell align="left">{row?.car_id}</TableCell>
            <TableCell align="left">{row?.userScore}</TableCell>
            <TableCell align="left">{row?.userComment}</TableCell>
            {/* <TableCell align="right">${row.salary.toLocaleString()}</TableCell> */}
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
            </TableCell>
          </TableRow>
        )}
      />
    </Card>
  );
}

function UserAutoTable({ name, props }) {
  const myCars = useAppSelector((store) => store.lkSlice.cars);
  console.log('getMyCars LK', myCars);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchCars());
  }, []);

  return (
    <Card component="section" type="section">
      <CardHeader title="Мои автомобили" subtitle=""></CardHeader>
      <DataTable
        {...props}
        headCells={getHeadCellsUserAuto}
        rows={myCars}
        emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
        render={(row) => (
          <TableRow hover tabIndex={-1} key={row.id}>
            <TableCell>{row.id}</TableCell>
            <TableCell align="left">{row.mark}</TableCell>
            <TableCell align="left">{row?.model}</TableCell>
            <TableCell align="left">{row?.color}</TableCell>
            <TableCell align="left">{row?.prodYear}</TableCell>
            <TableCell align="left">{row.gosNum}</TableCell>
            <TableCell align="left">{row?.gear}</TableCell>
            <TableCell align="left">{row?.engine}</TableCell>
            <TableCell align="left">{row?.vin}</TableCell>
            {/* <TableCell align="right">${row.salary.toLocaleString()}</TableCell> */}
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
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
