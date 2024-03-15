import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import React, { useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import PageHeader from '../../components/pageHeader';
import CardHeader from '../../components/cardHeader';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import AddIcon from '@mui/icons-material/Add';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import PersonOffOutlinedIcon from '@mui/icons-material/PersonOffOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';

import DataTable from '../../components/dataTable';
import NotRegistered from '../../components/NotRegistered';
import { Button, Box, Stack } from '@mui/material';

import { useEffect, useState } from 'react';

import employeesData from '../../_mocks/employees';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  fetchAdminCars,
  fetchAdminCarsDel,
  fetchAdminColor,
  fetchAdminColorDel,
  fetchAdminComplect,
  fetchAdminComplectDel,
  fetchAdminDocFB,
  fetchAdminDocFBDel,
  fetchAdminDocTD,
  fetchAdminDocTO,
  fetchAdminDocTODel,
  fetchAdminModel,
  fetchAdminModelDel,
  fetchAdminTDDel,
  fetchAdminUserDel,
  fetchAdminUsers,
} from '../../redux/admin/adminThunkActions';

import BasicModal from '../../components/BasicModal/BasicModal';
import EditUserForm from './EditUserForm';
import EditFeedbackForm from './EditFeedbackForm';
import EditTDForm from './EditTDForm';
import EditTOForm from './EditTOForm';
import EditDocModel from './EditDocModel';
import EditDocComplect from './EditDocComplect';
import EditDocColor from './EditDocColor';

import EditCarsForm from './EditDocsCarsForm';
import axios from 'axios';
import logo from '../../assets/images/logo/png/Color_logotext2_nob222g.png';

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
    label: 'Роль',
  },
  {
    id: 'propType',
    numeric: false,
    disablePadding: false,
    label: 'Юр. или Физ лицо',
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
    label: 'Номер документа',
  },
  {
    id: 'dateNow',
    numeric: false,
    disablePadding: false,
    label: 'Дата создания документа',
  },
  {
    id: 'dateSelected',
    numeric: false,
    disablePadding: false,
    label: 'Дата оказания услуги',
  },
  {
    id: 'user_id',
    numeric: false,
    disablePadding: false,
    label: 'ID клиента',
  },
  {
    id: 'car_id',
    numeric: false,
    disablePadding: false,
    label: 'Автомобиль',
  },
  {
    id: 'probegKm',
    numeric: false,
    disablePadding: false,
    label: 'Пробег км',
  },
  {
    id: 'manager',
    numeric: false,
    disablePadding: false,
    label: 'Менеджер',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Статус',
  },

  {
    id: 'ourComment',
    numeric: false,
    disablePadding: false,
    label: 'Комментарий менеджера',
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
    label: 'Номер',
  },
  {
    id: 'dateNow',
    numeric: false,
    disablePadding: false,
    label: 'Дата',
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
    label: 'Пользователь',
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
    label: 'Комментарий пользователя',
  },
  {
    id: 'manager',
    numeric: false,
    disablePadding: false,
    label: 'Менеджер',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Статус',
  },
  {
    id: 'ourComment',
    numeric: false,
    disablePadding: false,
    label: 'Комментарий менеджера',
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

const getDocsModel = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Id',
  },
  {
    id: 'modelName',
    numeric: false,
    disablePadding: false,
    label: 'Название модели',
  },
  {
    id: 'price',
    numeric: false,
    disablePadding: false,
    label: 'Цена',
  },
  {
    id: 'photo',
    numeric: false,
    disablePadding: false,
    label: 'Фото',
  },
  {
    id: 'actions',
    numeric: true,
    disablePadding: false,
    label: 'Управление',
  },
];

const getDocsComplect = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Id',
  },
  {
    id: 'model_id',
    numeric: false,
    disablePadding: false,
    label: 'Модель',
  },
  {
    id: 'complectationName',
    numeric: false,
    disablePadding: false,
    label: 'Название комплектации',
  },
  {
    id: 'price',
    numeric: false,
    disablePadding: false,
    label: 'Цена',
  },
  {
    id: 'photo',
    numeric: false,
    disablePadding: false,
    label: 'Фото',
  },
  {
    id: 'actions',
    numeric: true,
    disablePadding: false,
    label: 'Управление',
  },
];

const getDocsColor = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: 'Id',
  },
  {
    id: 'model_id',
    numeric: false,
    disablePadding: false,
    label: 'Модель',
  },
  {
    id: 'colorName',
    numeric: false,
    disablePadding: false,
    label: 'Название цвета',
  },
  {
    id: 'price',
    numeric: false,
    disablePadding: false,
    label: 'Цена',
  },
  {
    id: 'photo',
    numeric: false,
    disablePadding: false,
    label: 'Фото',
  },
  {
    id: 'actions',
    numeric: true,
    disablePadding: false,
    label: 'Управление',
  },
];

export default function AdminPage() {
  const user = useAppSelector((store) => store.userSlice.user);

  return (
    <>
      {user.role === 'accessAdmin' || user.role === 'accessBoss' ? (
        <>
          <div className="listTodo"></div>
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
          <Stack spacing={7.5}>
            <DataTableUsers name="Dense" props={{ dense: true }} />
            <DataTableDocTD name="Dense" props={{ dense: true }} />
            <DataTableDocTO name="Dense" props={{ dense: true }} />
            <DataTableDocFB name="Dense" props={{ dense: true }} />
            <DataTableCars name="Dense" props={{ dense: true }} />
            <DataTableAutoOptionModels name="Dense" props={{ dense: true }} />
            <DataTableAutoOptionComplects name="Dense" props={{ dense: true }} />
            <DataTableAutoOptionColors name="Dense" props={{ dense: true }} />
          </Stack>
          <MulterLoading />
        </>
      ) : (
        <NotRegistered />
      )}
    </>
  );
}

function DataTableUsers({ name, props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const usersAll = useAppSelector((store) => store.adminSlice.users);
  console.log('store usersAll admin', usersAll);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminUsers());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCurrentData(row); // Установить текущие данные заявки
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    console.log('dispatch(fetchAdminUsers) before Trying to close modal');
    dispatch(fetchAdminUsers()); // Перезапрашиваем данные, обновляя список
    console.log('Trying to close modal');
    setIsModalOpen(false);
  };

  const delHandler = async (id): Promise<void> => {
    await dispatch(fetchAdminUserDel(id));
    dispatch(fetchAdminUsers());
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader title="Пользователи" subtitle="">
          {/* <Button variant="contained" disableElevation endIcon={<AddIcon />}>
            Новый пользователь
          </Button> */}
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
              <TableCell align="left">
                {{
                  1: 'Клиент',
                  2: 'Администратор',
                  3: 'Менеджер',
                  4: 'Руководитель',
                }[row.role_id] || 'Неизвестная роль'}
              </TableCell>
              <TableCell align="left">
                {row.propType ? (
                  <Tooltip title="Юридическое лицо" arrow>
                    <BusinessCenterIcon sx={{ color: 'primary.main' }} />
                  </Tooltip>
                ) : (
                  <Tooltip title="Физическое лицо" arrow>
                    <PersonIcon sx={{ color: 'secondary.main' }} />
                  </Tooltip>
                )}
              </TableCell>
              <TableCell align="right">
                <Tooltip title="Редактировать" arrow>
                  <IconButton
                    aria-label="edit"
                    color="warning"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(row);
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
                      delHandler(row.id);
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
      {isModalOpen && (
        <BasicModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={currentData}
          updateAndClose={updateAndClose}
          FormComponent={EditUserForm}
        />
      )}
    </>
  );
}

function DataTableDocTD({ name, props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const docsTD = useAppSelector((store) => store.adminSlice.docsTD);
  console.log('store docsTD admin', docsTD);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminDocTD());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCurrentData(row); // Установить текущие данные заявки
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    dispatch(fetchAdminDocTD()); // Перезапрашиваем данные, обновляя список
    setIsModalOpen(false);
  };

  const handlerCloseModal = () => {
    setIsModalOpen(false);
    // setCreateDocTD(false);
  };

  const delHandler = async (id): Promise<void> => {
    await dispatch(fetchAdminTDDel(id));
    dispatch(fetchAdminDocTD());
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('ru-RU', options).replace(/\./g, '\\');
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader title="Документы Тестдрайв" subtitle="">
          {/* <Button
            onClick={handleCreateTDClick}
            variant="contained"
            disableElevation
            endIcon={<AddIcon />}
          >
            Новый документ
          </Button> */}
        </CardHeader>
        <DataTable
          {...props}
          headCells={getDocsTD}
          rows={docsTD}
          emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
          render={(row) => (
            <TableRow hover tabIndex={-1} key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell align="left">{formatDate(row.dateNow)}</TableCell>
              <TableCell align="left">{formatDate(row.dateSelected)}</TableCell>
              <TableCell align="left">{row.user_id}</TableCell>
              <TableCell align="left">{row?.car_id}</TableCell>
              <TableCell align="left">{row?.probegKm}</TableCell>
              <TableCell align="left">{row?.manager}</TableCell>
              <TableCell align="left">
                {row.status ? (
                  <Tooltip title="Подтверждено" arrow>
                    <CheckCircleOutlineIcon sx={{ color: 'green' }} />
                  </Tooltip>
                ) : (
                  <Tooltip title="Не подтверждено" arrow>
                    <HighlightOffIcon sx={{ color: 'grey' }} />
                  </Tooltip>
                )}
              </TableCell>
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
                <Tooltip title="Удалить" arrow>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      delHandler(row.id);
                    }}
                  >
                    <DeleteIcon fontSize="medium" />
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
          FormComponent={EditTDForm}
        />
      )}
    </>
  );
}

function DataTableDocTO({ name, props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);
  const docsTO = useAppSelector((store) => store.adminSlice.docsTO);
  console.log('store usersAll admin', docsTO);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminDocTO());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCurrentData(row); // Установить текущие данные заявки
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    dispatch(fetchAdminDocTO()); // Перезапрашиваем данные, обновляя список
    console.log('Trying to close modal');
    setIsModalOpen(false);
  };

  const handleCreateTOClick = () => {
    setCreateDocTO(true);
    setIsModalOpen(true);
    setCurrentData(null);
  };

  const handlerCloseModalTO = () => {
    setIsModalOpen(false);
  };

  const delHandler = async (id): Promise<void> => {
    await dispatch(fetchAdminDocTODel(id));
    dispatch(fetchAdminDocTO());
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('ru-RU', options).replace(/\./g, '\\');
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader title="Документы ТО" subtitle=""></CardHeader>
        <DataTable
          {...props}
          headCells={getDocsTD}
          rows={docsTO}
          emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
          render={(row) => (
            <TableRow hover tabIndex={-1} key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell align="left">{formatDate(row.dateNow)}</TableCell>
              <TableCell align="left">{formatDate(row.dateSelected)}</TableCell>
              <TableCell align="left">{row.user_id}</TableCell>
              <TableCell align="left">{row?.car_id}</TableCell>
              <TableCell align="left">{row?.probegKm}</TableCell>
              <TableCell align="left">{row?.manager}</TableCell>
              <TableCell align="left">
                {row.status ? (
                  <Tooltip title="Подтверждено" arrow>
                    <CheckCircleOutlineIcon sx={{ color: 'green' }} />
                  </Tooltip>
                ) : (
                  <Tooltip title="Не подтверждено" arrow>
                    <HighlightOffIcon sx={{ color: 'grey' }} />
                  </Tooltip>
                )}
              </TableCell>
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
                <Tooltip title="Удалить" arrow>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      delHandler(row.id);
                    }}
                  >
                    <DeleteIcon fontSize="medium" />
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
          FormComponent={EditTOForm}
        />
      )}
    </>
  );
}

function DataTableDocFB({ props }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const docsFB = useAppSelector((store) => store.adminSlice.docsFB);
  console.log('store docsFB admin', docsFB);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminDocFB());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCurrentData(row); // Установить текущие данные заявки
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    dispatch(fetchAdminDocFB()); // Перезапрашиваем данные, обновляя список
    setIsModalOpen(false);
  };

  const delHandler = async (id): Promise<void> => {
    await dispatch(fetchAdminDocFBDel(id));
    dispatch(fetchAdminDocFB());
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('ru-RU', options).replace(/\./g, '\\');
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader title="Заявки на обратную связь" subtitle=""></CardHeader>
        <DataTable
          {...props}
          headCells={getDocsFB}
          rows={docsFB}
          emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
          render={(row) => (
            <TableRow hover tabIndex={-1} key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell align="left">{formatDate(row?.dateNow)}</TableCell>
              <TableCell align="left">{row?.userName}</TableCell>
              <TableCell align="left">{row.user_id}</TableCell>
              <TableCell align="left">{row?.phoneNumber}</TableCell>
              <TableCell align="left">{row?.userComment}</TableCell>
              <TableCell align="left">{row?.manager}</TableCell>
              <TableCell align="left">
                {row.status ? (
                  <Tooltip title="Подтверждено" arrow>
                    <CheckCircleOutlineIcon sx={{ color: 'green' }} />
                  </Tooltip>
                ) : (
                  <Tooltip title="Не подтверждено" arrow>
                    <HighlightOffIcon sx={{ color: 'grey' }} />
                  </Tooltip>
                )}
              </TableCell>
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
                      console.log('🚀 ~ row:', row);
                    }}
                  >
                    <ModeEditOutlineOutlinedIcon fontSize="medium" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Удалить" arrow>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      delHandler(row.id);
                    }}
                  >
                    <DeleteIcon fontSize="medium" />
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

function DataTableCars({ name, props }) {
  const docsCars = useAppSelector((store) => store.adminSlice.cars);
  console.log('store cars admin', docsCars);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminCars());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCurrentData(row); // Установить текущие данные документа
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    dispatch(fetchAdminCars()); // Перезапрашиваем данные, обновляя список
    setIsModalOpen(false);
  };

  const delHandler = async (carId): Promise<void> => {
    await dispatch(fetchAdminCarsDel(carId));
    dispatch(fetchAdminCars());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader title="Справочник автомобилей" subtitle="">
          {/* <Button variant="contained" disableElevation endIcon={<AddIcon />}>
          Новый документ
        </Button> */}
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
              <TableCell align="left">{row?.engine}</TableCell>
              <TableCell align="left">{row?.vin}</TableCell>
              <TableCell align="left">{row?.user_id}</TableCell>
              <TableCell align="left">
                {row.ours ? (
                  <Tooltip title="Наша" arrow>
                    <CheckCircleOutlineIcon sx={{ color: 'green' }} />
                  </Tooltip>
                ) : (
                  <Tooltip title="Не наша" arrow>
                    <HighlightOffIcon sx={{ color: 'grey' }} />
                  </Tooltip>
                )}
              </TableCell>
              <TableCell align="left">
                {row.bu ? (
                  <Tooltip title="С пробегом" arrow>
                    <CheckCircleOutlineIcon sx={{ color: 'green' }} />
                  </Tooltip>
                ) : (
                  <Tooltip title="Без пробега" arrow>
                    <HighlightOffIcon sx={{ color: 'grey' }} />
                  </Tooltip>
                )}
              </TableCell>

              <TableCell align="right">
                <Tooltip title="Редактировать" arrow>
                  <IconButton
                    aria-label="edit"
                    color="warning"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(row); //передаем данные записи в функцию
                    }}
                  >
                    <ModeEditOutlineOutlinedIcon fontSize="medium" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Удалить" arrow>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      delHandler(row.id);
                    }}
                  >
                    <DeleteIcon fontSize="medium" />
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
          onClose={handleCloseModal}
          data={currentData}
          updateAndClose={updateAndClose}
          FormComponent={EditCarsForm}
        />
      )}
    </>
  );
}

function DataTableAutoOptionModels({ name, props }) {
  const docsModels = useAppSelector((store) => store.adminSlice.models);
  console.log('store models admin', docsModels);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminModel());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCurrentData(row); // Установить текущие данные документа
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    dispatch(fetchAdminModel()); // Перезапрашиваем данные, обновляя список
    setIsModalOpen(false);
  };

  const delHandler = async (id): Promise<void> => {
    await dispatch(fetchAdminModelDel(id));
    dispatch(fetchAdminModel());
    dispatch(fetchAdminComplect());
    dispatch(fetchAdminColor());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader title="Модели для конфигуратора (Avto options)" subtitle="">
          {/* <Button variant="contained" disableElevation endIcon={<AddIcon />}>
          Новый документ
        </Button> */}
        </CardHeader>
        <DataTable
          {...props}
          headCells={getDocsModel}
          rows={docsModels}
          emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
          render={(row) => (
            <TableRow hover tabIndex={-1} key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell align="left">{row.modelName}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.photo}</TableCell>
              <TableCell align="right">
                <Tooltip title="Редактировать" arrow>
                  <IconButton
                    aria-label="edit"
                    color="warning"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(row); //передаем данные записи в функцию
                    }}
                  >
                    <ModeEditOutlineOutlinedIcon fontSize="medium" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Удалить" arrow>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      delHandler(row.id);
                    }}
                  >
                    <DeleteIcon fontSize="medium" />
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
          onClose={handleCloseModal}
          data={currentData}
          updateAndClose={updateAndClose}
          FormComponent={EditDocModel}
        />
      )}
    </>
  );
}

function DataTableAutoOptionComplects({ name, props }) {
  const docsComplects = useAppSelector((store) => store.adminSlice.complects);
  console.log('store complects admin', docsComplects);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminComplect());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCurrentData(row); // Установить текущие данные документа
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    dispatch(fetchAdminComplect()); // Перезапрашиваем данные, обновляя список
    setIsModalOpen(false);
  };

  const delHandler = async (id): Promise<void> => {
    await dispatch(fetchAdminComplectDel(id));
    dispatch(fetchAdminComplect());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader
          title="Комплекты к моделям для конфигуратора (Avto options complect)"
          subtitle=""
        >
          {/* <Button variant="contained" disableElevation endIcon={<AddIcon />}>
          Новый документ
        </Button> */}
        </CardHeader>
        <DataTable
          {...props}
          headCells={getDocsComplect}
          rows={docsComplects}
          emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
          render={(row) => (
            <TableRow hover tabIndex={-1} key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell align="left">{row.model_id}</TableCell>
              <TableCell align="left">{row.complectationName}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.photo}</TableCell>
              <TableCell align="right">
                <Tooltip title="Редактировать" arrow>
                  <IconButton
                    aria-label="edit"
                    color="warning"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(row); //передаем данные записи в функцию
                    }}
                  >
                    <ModeEditOutlineOutlinedIcon fontSize="medium" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Удалить" arrow>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      delHandler(row.id);
                    }}
                  >
                    <DeleteIcon fontSize="medium" />
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
          onClose={handleCloseModal}
          data={currentData}
          updateAndClose={updateAndClose}
          FormComponent={EditDocComplect}
        />
      )}
    </>
  );
}

function DataTableAutoOptionColors({ name, props }) {
  const docsColors = useAppSelector((store) => store.adminSlice.colors);
  console.log('store colors admin', docsColors);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchAdminColor());
  }, []);

  // Функция для открытия модального окна
  const handleEditClick = (row) => {
    setCurrentData(row); // Установить текущие данные документа
    setIsModalOpen(true); // Открывает модальное окно
  };

  // Функция для закрытия модального окна
  const updateAndClose = () => {
    dispatch(fetchAdminColor()); // Перезапрашиваем данные, обновляя список
    setIsModalOpen(false);
  };

  const delHandler = async (id): Promise<void> => {
    await dispatch(fetchAdminColorDel(id));
    dispatch(fetchAdminColor());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card component="section" type="section">
        <CardHeader
          title="Комплекты к моделям для конфигуратора (Avto options complect)"
          subtitle=""
        >
          {/* <Button variant="contained" disableElevation endIcon={<AddIcon />}>
          Новый документ
        </Button> */}
        </CardHeader>
        <DataTable
          {...props}
          headCells={getDocsColor}
          rows={docsColors}
          emptyRowsHeight={{ default: 66.8, dense: 46.8 }}
          render={(row) => (
            <TableRow hover tabIndex={-1} key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell align="left">{row.model_id}</TableCell>
              <TableCell align="left">{row.colorName}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.photo}</TableCell>
              <TableCell align="right">
                <Tooltip title="Редактировать" arrow>
                  <IconButton
                    aria-label="edit"
                    color="warning"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditClick(row); //передаем данные записи в функцию
                    }}
                  >
                    <ModeEditOutlineOutlinedIcon fontSize="medium" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Удалить" arrow>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    size="small"
                    sx={{ fontSize: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      delHandler(row.id);
                    }}
                  >
                    <DeleteIcon fontSize="medium" />
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
          onClose={handleCloseModal}
          data={currentData}
          updateAndClose={updateAndClose}
          FormComponent={EditDocColor}
        />
      )}
    </>
  );
}

function MulterLoading() {
  const [img, setImg] = useState<File | null>(null);
  const [modelName, setModelName] = useState('');
  const [price, setPrice] = useState('');
  const [adress, setAdress] = useState('');
  const [uploadStatus, setUploadStatus] = useState({ status: '', message: '' });

  const [modelId, setModelId] = useState('');
  const [complectName, setComplectName] = useState('');
  const [priceC, setPriceC] = useState('');
  const [adressComplect, setAdressComplect] = useState('');
  const [uploadStatusComplect, setUploadStatusComplect] = useState({ status: '', message: '' });

  const [modId, setModId] = useState('');
  const [colorName, setColorName] = useState('');
  const [priceColor, setPriceColor] = useState('');
  const [adressColor, setAdressColor] = useState('');
  const [statusColor, setStatusColor] = useState({ status: '', message: '' });

  const dispatch = useAppDispatch();

  const sendFileAvtoOptions = useCallback(async () => {
    console.log('Trying to send file...', img, modelName, price);
    if (img) {
      try {
        const data = new FormData();
        data.append('IMG', img);
        data.append('modelName', modelName);
        data.append('price', price);

        await axios
          .post(`${import.meta.env.VITE_URL}/multer/avtoOptionsModel`, data)
          .then((res) => {
            console.log('Server response:', res);
            // setAdress(res.data.path)
            dispatch(fetchAdminModel());

            setImg(null);
            setModelName('');
            setPrice('');
            setUploadStatus({ status: 'success', message: 'Модель успешно создана' });
            setTimeout(() => {
              setUploadStatus({ status: '', message: '' });
            }, 2000);
          });
      } catch (error) {
        console.log(error, 'Ошибка в фиче малтер');
        setUploadStatus({ status: 'error', message: 'Ошибка при загрузке файла!' });
        setTimeout(() => {
          setUploadStatus({ status: '', message: '' });
        }, 1000);
      }
    }
  }, [img, modelName, price]);

  const sendFileAvtoOptionsComplect = useCallback(async () => {
    console.log('Trying to send file...', img, complectName, priceC, modelId);
    if (img) {
      try {
        const data = new FormData();
        data.append('IMG', img);
        data.append('complectName', complectName);
        data.append('price', priceC);
        data.append('modelId', modelId);

        await axios
          .post(`${import.meta.env.VITE_URL}/multer/avtoOptionsComplect`, data)
          .then((res) => {
            console.log('Server response:', res);
            // setAdressComplect(res.data.path)
            dispatch(fetchAdminComplect());
            setImg(null);
            setModelId('');
            setComplectName('');
            setPriceC('');
            setUploadStatusComplect({ status: 'success', message: 'Комплектация успешно создана' });

            setTimeout(() => {
              setUploadStatusComplect({ status: '', message: '' });
            }, 2000);
          });
      } catch (error) {
        console.log(error, 'Ошибка в фиче малтер');
        setUploadStatusComplect({ status: 'error', message: 'Ошибка при загрузке файла!' });

        setTimeout(() => {
          setUploadStatusComplect({ status: '', message: '' });
        }, 1000);
      }
    }
  }, [img, complectName, priceC, modelId]);

  const sendFileAvtoOptionsColor = useCallback(async () => {
    console.log('Trying to send file...', img, colorName, priceColor, modelId);
    if (img) {
      try {
        const data = new FormData();
        data.append('IMG', img);
        data.append('colorName', colorName);
        data.append('price', priceColor);
        data.append('modId', modId);

        await axios
          .post(`${import.meta.env.VITE_URL}/multer/avtoOptionsColor`, data)
          .then((res) => {
            console.log('Server response:', res);
            // setAdressColor(res.data.path)
            dispatch(fetchAdminColor());
            setImg(null);
            setModId('');
            setColorName('');
            setPriceColor('');
            setStatusColor({ status: 'success', message: 'Комплектация успешно создана' });

            setTimeout(() => {
              setStatusColor({ status: '', message: '' });
            }, 2000);
          });
      } catch (error) {
        console.log(error, 'Ошибка в фиче малтер');
        setStatusColor({ status: 'error', message: 'Ошибка при загрузке файла!' });

        setTimeout(() => {
          setStatusColor({ status: '', message: '' });
        }, 1000);
      }
    }
  }, [img, colorName, priceColor, modId]);

  return (
    <Card>
      <div className="multer">
        <div className="AvtoOptionsModel">
          <h3>Добавить модель авто</h3>
          <input
            type="text"
            placeholder="Наименование модели"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Цена"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => setImg(e.target.files && e.target.files[0] ? e.target.files[0] : null)}
          />
          <button className="btn" onClick={sendFileAvtoOptions}>
            Загрузить
          </button>
          {adress && <div className="adress">{adress}</div>}
          {uploadStatus.status && (
            <div className={`upload-status ${uploadStatus.status}`}>{uploadStatus.message}</div>
          )}
        </div>

        <div className="AvtoOptionsComplect">
          <h3>Добавить комплектацию авто</h3>
          <input
            type="text"
            placeholder="ID модели"
            value={modelId}
            onChange={(e) => setModelId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Наименование комплектации"
            value={complectName}
            onChange={(e) => setComplectName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Цена"
            value={priceC}
            onChange={(e) => setPriceC(e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => setImg(e.target.files && e.target.files[0] ? e.target.files[0] : null)}
          />
          <button className="btn" onClick={sendFileAvtoOptionsComplect}>
            Загрузить
          </button>
          {adressComplect && <div className="adress">{adressComplect}</div>}
          {uploadStatusComplect.status && (
            <div className={`upload-status ${uploadStatusComplect.status}`}>
              {uploadStatusComplect.message}
            </div>
          )}
        </div>

        <div className="AvtoOptionsColor">
          <h3>Добавить цвет модели авто</h3>
          <input
            type="text"
            placeholder="ID модели"
            value={modId}
            onChange={(e) => setModId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Цвет"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Цена"
            value={priceColor}
            onChange={(e) => setPriceColor(e.target.value)}
          />

          <input
            type="file"
            onChange={(e) => setImg(e.target.files && e.target.files[0] ? e.target.files[0] : null)}
          />
          <button className="btn" onClick={sendFileAvtoOptionsColor}>
            Загрузить
          </button>
          {adressColor && <div className="adress">{adressColor}</div>}
          {statusColor.status && (
            <div className={`upload-status ${statusColor.status}`}>{statusColor.message}</div>
          )}
        </div>
      </div>
    </Card>
  );
}
