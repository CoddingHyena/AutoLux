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
import {
  fetchManagerCars,
  fetchManagerDocFB,
  fetchManagerDocTD,
  fetchManagerDocTO,
} from '../../redux/manager/managerThunkActions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useState, useEffect } from 'react';

// import { useState } from 'react';
// // MUI
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';

// import Modal from '../../components/modal';
// import ModalOptions from './modalOptions';
import BasicModal from '../../components/BasicModal/BasicModal';
import NotRegistered from '../../components/NotRegistered';
import EditFeedbackForm from './EditFeedbackForm';
import EditTDForm from './EditTDForm';
import EditTOForm from './EditTOForm';
import NewDocTDForm from './NewDocTDForm';
import NewDocTOForm from './NewDocTOForm';
import { Stack } from '@mui/material';

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
    label: 'Юзер ID',
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
    label: 'Наш комментарий',
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
    label: '',
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
  },
  {
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

export default function managerPage() {
  const user = useAppSelector((store) => store.userSlice.user);

  return (
    <>
      {user.role === 'accessManager' || user.role === 'accessBoss' ? (
        <>
          <PageHeader title="Рабочее место менеджера">
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                textTransform: 'uppercase',
              }}
            >
              <Link underline="hover" href="/">
                Главная
              </Link>
              <Typography color="text.tertiary">Рабочее место менеджера</Typography>
            </Breadcrumbs>
          </PageHeader>
          <Stack spacing={7.5}>
            <DataTableDocFB name="Dense" props={{ dense: true }} />
            <DataTableDocTD name="Dense" props={{ dense: true }} />
            <DataTableDocTO name="Dense" props={{ dense: true }} />
            <DataTableCars name="Dense" props={{ dense: true }} />
          </Stack>
        </>
      ) : (
        <NotRegistered />
      )}
    </>
  );
}

function DataTableDocFB({ props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const docsFB = useAppSelector((store) => store.adminSlice.docsFB);
  console.log('store usersAll admin', docsFB);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchManagerDocFB());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCurrentData(row); // Установить текущие данные заявки
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    dispatch(fetchManagerDocFB()); // Перезапрашиваем данные, обновляя список
    setIsModalOpen(false);
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader title="Открытые заявки" subtitle=""></CardHeader>
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
              <TableCell align="left">{row?.ourComment}</TableCell>
              <TableCell align="left">{`${row.status}`}</TableCell>
              <TableCell align="right">
                <Tooltip title="Редактировать" arrow>
                  <IconButton
                    aria-label="edit"
                    color="warning"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(row); // Передаем данные записи в функцию
                      console.log('🚀 ~ row:', row);
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

      {isModalOpen && (
        <BasicModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={currentData}
          updateAndClose={updateAndClose}
          FormComponent={EditFeedbackForm}
        />
      )}
    </>
  );
}

function DataTableDocTD({ name, props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const [createDocTD, setCreateDocTD] = useState(false);

  const docsTD = useAppSelector((store) => store.adminSlice.docsTD);
  // console.log('store usersAll admin', docsTD);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchManagerDocTD());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCreateDocTD(false); // Сбрасываем флаг создания нового документа
    setCurrentData(row); // Установить текущие данные заявки
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    dispatch(fetchManagerDocTD()); // Перезапрашиваем данные, обновляя список
    setIsModalOpen(false);
    setCreateDocTD(false); // Сбрасываем флаг создания нового документа
  };

  const handleCreateTDClick = () => {
    setCreateDocTD(true);
    setCurrentData(null);
    setIsModalOpen(true);
  };

  const handlerCloseModal = () => {
    setIsModalOpen(false);
    setCreateDocTD(false);
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader title="Документы Тестдрайв" subtitle="">
          <Button
            onClick={handleCreateTDClick}
            variant="contained"
            disableElevation
            endIcon={<AddIcon />}
          >
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
              <TableCell align="left">{`${row.status}`}</TableCell>
              <TableCell align="left">{row?.ourComment}</TableCell>
              <TableCell align="right">
                <Tooltip title="Редактировать" arrow>
                  <IconButton
                    aria-label="edit"
                    color="warning"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(row); // Передаем данные записи в функцию
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

      {isModalOpen && (
        <BasicModal
          isOpen={isModalOpen}
          onClose={handlerCloseModal}
          data={currentData}
          updateAndClose={updateAndClose}
          FormComponent={createDocTD ? NewDocTDForm : EditTDForm}
        />
      )}
    </>
  );
}

function DataTableDocTO({ name, props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const docsTO = useAppSelector((store) => store.adminSlice.docsTO);
  const [createDocTO, setCreateDocTO] = useState(false);
  console.log('store usersAll admin', docsTO);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchManagerDocTO());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCreateDocTO(false)
    setCurrentData(row); // Установить текущие данные заявки
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    dispatch(fetchManagerDocTO()); // Перезапрашиваем данные, обновляя список
    setIsModalOpen(false);
    setCreateDocTO(false)
  };

  const handleCreateTOClick = () => {
    setCreateDocTO(true);
    setCurrentData(null);
    setIsModalOpen(true);
  };

  const handlerCloseModalTO = () => {
    setIsModalOpen(false);
    setCreateDocTO(false);
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader title="Документы ТО" subtitle="">
          <Button
            onClick={handleCreateTOClick}
            variant="contained"
            disableElevation
            endIcon={<AddIcon />}
          >
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
              <TableCell align="left">{`${row.status}`}</TableCell>
              <TableCell align="left">{row?.ourComment}</TableCell>
              <TableCell align="right">
                <Tooltip title="Редактировать" arrow>
                  <IconButton
                    aria-label="edit"
                    color="warning"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(row); // Передаем данные записи в функцию
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

      {isModalOpen && (
        <BasicModal
          isOpen={isModalOpen}
          onClose={handlerCloseModalTO}
          data={currentData}
          updateAndClose={updateAndClose}
          FormComponent={createDocTO ? NewDocTOForm : EditTOForm}
        />
      )}
    </>
  );
}

function DataTableCars({ name, props }) {
  const docsCars = useAppSelector((store) => store.adminSlice.cars);
  console.log('store cars admin', docsCars);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchManagerCars());
  }, []);

  return (
    <Card component="section" type="section">
      <CardHeader title="Cars" subtitle=""></CardHeader>
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
            <TableCell align="left">{row?.engine}</TableCell>
            <TableCell align="left">{row?.vin}</TableCell>
            <TableCell align="left">{row?.user_id}</TableCell>
            <TableCell align="left">{`${row.ours}`}</TableCell>
            <TableCell align="left">{`${row.bu}`}</TableCell>
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
