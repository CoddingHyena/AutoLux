import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
// MUI
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/ButtonBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
// assets

// Components
import NotificationsButton from './notificationButton';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { fetchLogout } from '../../redux/User/userThunkAction';

function LoggedUser() {
  const currentUser = useAppSelector((store) => store.userSlice.user);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Menu
        elevation={26}
        sx={{
          '& .MuiMenuItem-root': {
            mt: 0.5,
          },
        }}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <UserMenu handleClose={handleClose} />
      </Menu>
      <Stack
        height="100%"
        direction="row"
        flex={1}
        justifyContent="flex-end"
        alignItems="center"
        spacing={0}
      >
        <ButtonBase
          onClick={handleClick}
          variant="outlined"
          sx={{
            ml: 1,
            height: '100%',
            overflow: 'hidden',
            borderRadius: '25px',
            transition: '.2s',
            px: 1,
            transitionProperty: 'background,color',
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.06),
            },
            '&:hover .MuiSvgIcon-root': {
              opacity: '1',
              // transform: 'translateX(10px)',
            },
          }}
        >
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Avatar
              alt="User Img"
              sx={{
                width: 35,
                height: 35,
                boxShadow: (theme) =>
                  `0px 0px 0px 4px ${theme.palette.background.paper} ,0px 0px 0px 5px ${theme.palette.primary.main} `,
              }}
            />
            <Typography
              variant="body2"
              display={{
                xs: 'none',
                sm: 'inline-block',
              }}
            >
              {currentUser.name}
            </Typography>
            <ExpandMoreIcon
              fontSize="small"
              sx={{
                transition: '0.2s',
                opacity: '0',
              }}
            />
          </Stack>
        </ButtonBase>
      </Stack>
    </>
  );
}

function UserMenu({ handleClose }) {
  const currentUser = useAppSelector((store) => store.userSlice.user);

  const navigator = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async (): Promise<void> => {
    void dispatch(fetchLogout());
    navigator('/');
  };

  return (
    <MenuList
      sx={{
        p: 1,
        '& .MuiMenuItem-root': {
          borderRadius: 2,
        },
      }}
    >
      <Stack px={3}>
        <Typography variant="subtitle1" textAlign="center">
          {currentUser.name}
        </Typography>
        {/* <Typography variant="subtitle2" textAlign="center">
          Должность
        </Typography> */}
      </Stack>
      <Divider
        sx={{
          borderColor: 'primary.light',
          my: 1,
        }}
      />

      <MenuItem onClick={handleClose} to="/profile" component={RouterLink}>
        <ListItemIcon>
          <Person2OutlinedIcon fontSize="small" />
        </ListItemIcon>
        Профиль
      </MenuItem>

      {/* <MenuItem onClick={handleClose} to="/" component={RouterLink}>
        <ListItemIcon>
          <TaskOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Мои документы <ListBadge color="error.main" count={23} />
      </MenuItem> */}
      {/* <MenuItem onClick={handleClose} to="/" component={RouterLink}>
        <ListItemIcon>
          <CommentOutlinedIcon fontSize="small" />
        </ListItemIcon>
        Мои обращения <ListBadge color="warning.main" count={11} />
      </MenuItem> */}

      <MenuItem onClick={() => {
        logoutHandler();
        handleClose();
      }} component={RouterLink} to="/">
        <ListItemIcon>
          <ExitToAppIcon fontSize="small" />
        </ListItemIcon>
        Выйти
      </MenuItem>
    </MenuList>
  );
}

function ListBadge({ color, count }) {
  return (
    <Box
      ml={1}
      bgcolor={color}
      color="primary.contrastText"
      height={20}
      width={20}
      fontSize="body1"
      borderRadius="50%"
      display="grid"
      sx={{ placeItems: 'center' }}
    >
      {count}
    </Box>
  );
}
export default LoggedUser;
