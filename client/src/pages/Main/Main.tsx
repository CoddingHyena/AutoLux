import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Button, useTheme, Breadcrumbs, Typography, Grid, MenuList, MenuItem, ListItemIcon } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import useIntervalCounter from '../../utils/hooks/useIntervalCounter'; // Убедитесь, что путь правильный
import Slider from '../../components/slider'; // Убедитесь, что путь правильный
import { data1 as data } from './data'; // Убедитесь, что данные загружаются правильно
import TestDrive from '../../components/testDrive';
import CardHeader from '../../components/cardHeader';
import calcHeaderHeight from '../../utils/helpers/layoutHeight';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

const menuOptions = [
	{
		id: 1,
		Icon: Person2OutlinedIcon,
		text: 'Модели',
	},
	{
		id: 2,
		Icon: AccountBoxOutlinedIcon,
		text: 'Конфигуратор',
	},
	{
		id: 3,
		Icon: VpnKeyOutlinedIcon,
		text: 'Запись на тест-драйв',
	},
	{
		id: 4,
		Icon: HandshakeOutlinedIcon,
		text: 'Спецпредложения',
	},
	{
		id: 5,
		Icon: HandshakeOutlinedIcon,
		text: 'Сервис',
	},
	{
		id: 6,
		Icon: HandshakeOutlinedIcon,
		text: 'Контакты',
	},
];


export default function mainPage() {
	const [activeIndex, setActiveIndex] = useState(1);
	return (
		<>


<Card
				type="section"
				sx={{
					minHeight: '60vh',
				}}
			>
				<CardHeader title="Добро пожаловать!">
					
				</CardHeader>
                <img src="banners/bannerMain.jpg" style={{ width: '100%', height: 'auto' }}/>
			</Card>

		<LargeAutoSlider />
		
		<Card
				type="section"
				sx={{
					minHeight: '60vh',
				}}
			>
				<CardHeader title="Выгодные условия гарантии!">
					
				</CardHeader>
                <img src="banners/12years.png" style={{ width: '100%', height: 'auto' }}/>
			</Card>


			<Grid container spacing={4}>
				<Grid item xs={12} sm={4} md={3}>
					<Card
						sx={{
							position: 'sticky',
							top: `${calcHeaderHeight('nav', false) + 30}px`,
						}}
						component="aside"
					>
						<MenuList
							sx={{
								'& .MuiMenuItem-root': {
									borderRadius: 2,
								},
							}}
						>
							{menuOptions.map(({ id, Icon, text }) => (
								<MenuListItem
									key={id}
									text={text}
									Icon={Icon}
									onClick={() => setActiveIndex(id)}
									selected={activeIndex === id}
								/>
							))}
							<MenuItem component={Link} href="#!">
								<ListItemIcon>
									<Person2OutlinedIcon fontSize="medium" />
								</ListItemIcon>
								Link
							</MenuItem>
						</MenuList>
					</Card>
				</Grid>
				<Grid item xs={12} sm={8} md={9}>
					{activeIndex === 1 && <Section text={activeIndex} />}
					{activeIndex === 2 && <Section text={activeIndex} />}
					{activeIndex === 3 && <Section text={activeIndex} />}
					{activeIndex === 4 && <Section text={activeIndex} />}
				</Grid>
			</Grid>




			<TestDrive />


		</>
	);
}


function MenuListItem({ Icon, text, ...props }) {
	return (
		<MenuItem {...props}>
			<ListItemIcon>
				<Icon fontSize="medium" />
			</ListItemIcon>
			{text}
		</MenuItem>
	);
}

function Section({ text }) {
	return (
		<Card
			sx={{
				minHeight: '100vh',
			}}
			type="section"
		>
			<CardHeader title={`Заголовок секции ${text}`} subtitle="Доп текст">
				Optional Action
			</CardHeader>
			{text}
		</Card>
	);
}




function LargeAutoSlider() {
  const { count: activeSlideIndex, setCounter } = useIntervalCounter({
    max: data.length,
    time: 6000,
  });

  const theme = useTheme(); // Используется для стилизации кнопок, если требуется

  // Функция для переключения на следующий слайд
  const handleNext = () => {
    const nextIndex = activeSlideIndex === data.length - 1 ? 0 : activeSlideIndex + 1;
    setCounter(nextIndex);
  };

  // Функция для переключения на предыдущий слайд
  const handlePrev = () => {
    const prevIndex = activeSlideIndex === 0 ? data.length - 1 : activeSlideIndex - 1;
    setCounter(prevIndex);
  };

  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Card sx={{ position: 'relative', width: '100%', p: 0, boxShadow: 'none' }}>
	  <Slider activeSlideIndex={activeSlideIndex} dataLength={data.length}>
  {data.map((item, i) => (
    <Slider.Slide index={i} key={i}>
      {/* Используем компонент Link из react-router-dom для навигации */}
      <Link to={item.url} style={{ display: 'block' }}>
        <Box component="img" sx={{ width: '100%', objectFit: 'cover', display: 'block' }} src={item.imgPath} alt={item.label} />
      </Link>
    </Slider.Slide>
  ))}
</Slider>
      </Card>
      <Button
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 16,
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: 'inherit',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <KeyboardArrowLeft sx={{ fontSize: '3em' }} />
      </Button>
      <Button
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 16,
          transform: 'translateY(-50%)',
          zIndex: 1,
          color: 'inherit',
          backgroundColor: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <KeyboardArrowRight sx={{ fontSize: '3em' }} />
      </Button>
    </Box>
  );
}