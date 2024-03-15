import { v4 as uuid } from 'uuid';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';

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
    Icon: WebOutlinedIcon,
    href: '',
    role: 'none',
  },

  {
    id: uuid(),
    type: 'item',
    title: 'Ferramont 2024',
    Icon: WebOutlinedIcon,
    href: '/sellCars',
    role: 'none',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Контакты',
    Icon: WebOutlinedIcon,
    href: '/contacts',
    role: 'none',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Вход/Регистрация',
    Icon: WebOutlinedIcon,
    href: '/auth',
    role: 'none',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Главная',
    Icon: WebOutlinedIcon,
    href: '',
    role: 'accessUser',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Ferramont 2024',
    Icon: WebOutlinedIcon,
    href: '/sellCars',
    role: 'accessUser',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Контакты',
    Icon: WebOutlinedIcon,
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
    Icon: WebOutlinedIcon,
    href: '',
    role: 'accessAdmin',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Администрирование',
    Icon: WebOutlinedIcon,
    href: '/admin',
    role: 'accessAdmin',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Контакты',
    Icon: WebOutlinedIcon,
    href: '/contacts',
    role: 'accessAdmin',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Главная',
    Icon: WebOutlinedIcon,
    href: '',
    role: 'accessManager',
  },

  {
    id: uuid(),
    type: 'item',
    title: 'Менеджер',
    Icon: WebOutlinedIcon,
    href: '/manager',
    role: 'accessManager',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Контакты',
    Icon: WebOutlinedIcon,
    href: '/contacts',
    role: 'accessManager',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Главная',
    Icon: WebOutlinedIcon,
    href: '',
    role: 'accessBoss',
  },

  {
    id: uuid(),
    type: 'item',
    title: 'Статистика',
    Icon: WebOutlinedIcon,
    href: '/boss',
    role: 'accessBoss',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Администрирование',
    Icon: WebOutlinedIcon,
    href: '/admin',
    role: 'accessBoss',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Менеджер',
    Icon: WebOutlinedIcon,
    href: '/manager',
    role: 'accessBoss',
  },
  {
    id: uuid(),
    type: 'item',
    title: 'Контакты',
    Icon: WebOutlinedIcon,
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
