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
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Админ',
		Icon: WebOutlinedIcon,
		href: '/admin',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Менеджер',
		Icon: WebOutlinedIcon,
		href: '/manager',
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Босс',
		Icon: WebOutlinedIcon,
		href: '/boss',
	},

	{
		id: uuid(),
		type: 'group',
		title: 'Профиль',
		Icon: BarChartOutlinedIcon,
		menuChildren: [
			{
				title: 'Профиль (Страница Юзера)',
				href: '/profile',
			},
			{
				title: 'Авторизация',
				href: '/login',
			},
			{
				title: 'Регистрация',
				href: '/register',
			},

		],
	},
	{
		id: uuid(),
		type: 'item',
		title: 'Контакты',
		Icon: WebOutlinedIcon,
		href: '/contacts',
	},
];

export default NAV_LINKS_CONFIG;
