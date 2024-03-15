import { v4 as uuid } from 'uuid';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import ContactsIcon from '@mui/icons-material/Contacts';
import LoginIcon from '@mui/icons-material/Login';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import BarChartIcon from '@mui/icons-material/BarChart';

/**
 * @example
 * {
 *	id: number,
 *	type: "group" | "item",
 *	title: string,
 *	Icon: NodeElement
 *	menuChildren?: {title: string, href: string}[]
 *  menuMinWidth?: number
 * }
 */

// ссылки в хедере
const NAV_LINKS_CONFIG = [
  {
    id: uuid(),
    type: 'item',
    title: 'Главная',
    Icon: HomeIcon,
    href: '',
    role: 'none',
  },

  {
    id: uuid(),
    type: 'item',
    title: 'Ferramont 2024',
    Icon: DirectionsCarFilledOutlinedIcon,
    href: '/sellCars',
    role: 'none',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Контакты',
    Icon: ContactsIcon,
    href: '/contacts',
    role: 'none',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Вход/Регистрация',
    Icon: LoginIcon,
    href: '/auth',
    role: 'none',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Главная',
    Icon: HomeIcon,
    href: '',
    role: 'accessUser',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Ferramont 2024',
    Icon: DirectionsCarFilledOutlinedIcon,
    href: '/sellCars',
    role: 'accessUser',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Контакты',
    Icon: ContactsIcon,
    href: '/contacts',
    role: 'accessUser',
  },

  //  {
  // 	id: uuid(),
  // 	type: 'group',
  // 	title: 'Автомобили в наличии',
  // 	Icon: BarChartOutlinedIcon,
  // 	menuChildren: [
  // 		{
  // 			title: 'Folo',
  // 			href: '',
  // 		},
  // 		{
  // 			title: 'Feramont',
  // 			href: '/sellCars',
  // 		},
  //     {
  // 			title: 'Figuan',
  // 			href: '',
  // 		},

  // 	],
  // },
  {
    id: uuid(),
    type: 'item',
    title: 'Главная',
    Icon: HomeIcon,
    href: '',
    role: 'accessAdmin',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Администрирование',
    Icon: AdminPanelSettingsIcon,
    href: '/admin',
    role: 'accessAdmin',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Контакты',
    Icon: ContactsIcon,
    href: '/contacts',
    role: 'accessAdmin',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Главная',
    Icon: HomeIcon,
    href: '',
    role: 'accessManager',
  },

  {
    id: uuid(),
    type: 'item',
    title: 'Менеджер',
    Icon: ContactPhoneIcon,
    href: '/manager',
    role: 'accessManager',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Контакты',
    Icon: ContactsIcon,
    href: '/contacts',
    role: 'accessManager',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Главная',
    Icon: HomeIcon,
    href: '',
    role: 'accessBoss',
  },

  {
    id: uuid(),
    type: 'item',
    title: 'Статистика',
    Icon: BarChartIcon,
    href: '/boss',
    role: 'accessBoss',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Администрирование',
    Icon: AdminPanelSettingsIcon,
    href: '/admin',
    role: 'accessBoss',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Менеджер',
    Icon: ContactPhoneIcon,
    href: '/manager',
    role: 'accessBoss',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Контакты',
    Icon: ContactsIcon,
    href: '/contacts',
    role: 'accessBoss',
  },

  // {
  // 	id: uuid(),
  // 	type: 'group',
  // 	title: 'Профиль',
  // 	Icon: BarChartOutlinedIcon,
  //   menuChildren: [
  // 		{
  // 			title: 'Профиль (Страница Юзера)',
  // 			href: '/profile',
  // 		},
  // 		{
  // 			title: 'Вход/Регистрация',
  // 			href: '/auth',
  // 		},

  // 	],
  // },
];

export default NAV_LINKS_CONFIG;
