import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';

import PageHeader from '../../components/pageHeader';
import CardHeader from '../../components/cardHeader';

export default function managerPage() {
	return (
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
			<Card
				type="section"
				sx={{
					minHeight: '60vh',
				}}
			>
				<CardHeader title="Заголовок секции рабочее место менеджера" subtitle="Подзаголовок секции">
					Доп заголовок
				</CardHeader>
                контент
			</Card>

		</>
	);
}
