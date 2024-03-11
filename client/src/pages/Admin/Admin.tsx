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

import { useEffect, useState } from 'react';

import employeesData from '../../_mocks/employees';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  fetchAdminCars,
  fetchAdminCarsDel,
  fetchAdminDocFB,
  fetchAdminDocFBDel,
  fetchAdminDocTD,
  fetchAdminDocTO,
  fetchAdminDocTODel,
  fetchAdminUserDel,
  fetchAdminUsers,
} from '../../redux/admin/adminThunkActions';

import BasicModal from '../../components/BasicModal/BasicModal';
import EditUserForm from './EditUserForm';
import EditFeedbackForm from './EditFeedbackForm';
import EditTDForm from './EditTDForm';
import EditTOForm from './EditTOForm';

import {
  fetchManagerCars,
  fetchManagerDocFB,
  fetchManagerDocTD,
  fetchManagerDocTO,
} from '../../redux/manager/managerThunkActions';
import EditCarsForm from './EditDocsCarsForm';

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
    label: 'Юр. лицо',
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
    label: 'Номер документа',
  },
  {
    id: 'dateNow',
    numeric: false,
    disablePadding: false,
    label: 'Дата',
  },
  {
    id: 'user_id',
    numeric: false,
    disablePadding: false,
    label: 'Пользователь',
  },
  {
    id: 'car_id',
    numeric: false,
    disablePadding: false,
    label: 'Автомобиль',
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
    label: '',
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
    label: '',
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
    label: '',
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
      <DataTableUsers name="Dense" props={{ dense: true }} />
      <DataTableDocTD name="Dense" props={{ dense: true }} />
      <DataTableDocTO name="Dense" props={{ dense: true }} />
      <DataTableDocFB name="Dense" props={{ dense: true }} />
      <DataTableCars name="Dense" props={{ dense: true }} />
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
              <TableCell align="left">{row.role_id}</TableCell>
              <TableCell align="left">{`${row.propType}`}</TableCell>
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
  // const [createDocTD, setCreateDocTD] = useState(false);

  const docsTD = useAppSelector((store) => store.adminSlice.docsTD);
  // console.log('store usersAll admin', docsTD);

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

  // const handleCreateTDClick = () => {
  //   setCreateDocTD(true);
  //   setIsModalOpen(true);
  //   setCurrentData(null);
  // };

  const handlerCloseModal = () => {
    setIsModalOpen(false);
    // setCreateDocTD(false);
  };

  const delHandler = async (id): Promise<void> => {
    await dispatch(fetchAdminUserDel(id));
    dispatch(fetchAdminUsers());
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
              <TableCell align="left">{row.dateNow}</TableCell>
              <TableCell align="left">{row.user_id}</TableCell>
              <TableCell align="left">{row?.car_id}</TableCell>
              <TableCell align="left">{row?.manager}</TableCell>
              <TableCell align="left">
                {row.status ? 'Подтверждено' : 'Не подтверждено'}
              </TableCell>{' '}
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
              <TableCell align="left">{row.dateNow}</TableCell>
              <TableCell align="left">{row.user_id}</TableCell>
              <TableCell align="left">{row?.car_id}</TableCell>
              <TableCell align="left">{row?.manager}</TableCell>
              <TableCell align="left">
                {row.status ? 'Подтверждено' : 'Не подтверждено'}
              </TableCell>{' '}
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
  console.log('store usersAll admin', docsFB);

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
  };

  const delHandler = async (id): Promise<void> => {
    await dispatch(fetchAdminDocFBDel(id));
    dispatch(fetchAdminDocFB());
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
              <TableCell align="left">{row?.dateNow}</TableCell>
              <TableCell align="left">{row?.userName}</TableCell>
              <TableCell align="left">{row.user_id}</TableCell>
              <TableCell align="left">{row?.phoneNumber}</TableCell>
              <TableCell align="left">{row?.userComment}</TableCell>
              <TableCell align="left">{row?.manager}</TableCell>
              <TableCell align="left">
                {row.status ? 'Подтверждено' : 'Не подтверждено'}
              </TableCell>{' '}
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
        <CardHeader title="Cars" subtitle="">
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
              <TableCell align="left">{row.ours ? 'Наша' : 'Не наша'}</TableCell>{' '}
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
                      handleEditClick(row); //передаем данные записи в функцию
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
          onClose={handleCloseModal}
          data={currentData}
          updateAndClose={updateAndClose}
          FormComponent={EditCarsForm}
        />
      )}
    </>
  );
}
