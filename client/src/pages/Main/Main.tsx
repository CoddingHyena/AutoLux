import { useState } from 'react';
import BasicModal from '../../components/BasicModal/BasicModal';
import TDForm from './TDForm';
import TOForm from './TOForm';
import Configurator from '../../components/Configurator/Configurator';

import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  Button,
  useTheme,
  Breadcrumbs,
  Typography,
  Grid,
  MenuList,
  MenuItem,
  ListItemIcon,
  Stack,
  Container,
  Paper,
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import useIntervalCounter from '../../utils/hooks/useIntervalCounter'; // Убедитесь, что путь правильный
import Slider from '../../components/slider'; // Убедитесь, что путь правильный
import { data1 as data } from './data'; // Убедитесь, что данные загружаются правильно
import TestDrive from '../../components/testDriveForm';
import CardHeader from '../../components/cardHeader';
import calcHeaderHeight from '../../utils/helpers/layoutHeight';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import PageHeader from '../../components/pageHeader';
import CarSlider from '../../components/BUSlider/BUSlider';

// type="section"
// sx={{
//   mt: 5, // Add bottom margin
// }}

export default function mainPage() {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <Stack
      spacing={5}
      sx={{
        mt: 5, // отступ сверху для всего стека
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontSize: 42, marginTop: 20 }}>
            Официальный диллер FolksFagen
          </Typography>
          <Typography
            variant="h6" // Makes the subtitle larger but still clearly a subtitle
            component="p" // Use paragraph for the subtitle for semantic HTML
            sx={{ fontSize: 32 }} // Adds margin-top for spacing, adjust as needed
          >
            <br />
            Полный ассортиментный ряд FolksFagen, качественное ТО и поддержка 24/7
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              borderRadius: 2, // Adjust as needed, 2 in MUI system corresponds to 16px
              overflow: 'hidden',
            }}
          >
            <img
              src="/banners/banner01.jpg"
              alt="FolksFagen Banner"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Paper>
        </Grid>
      </Grid>

      {/* <PageHeader title="Добро пожаловать!"></PageHeader> */}

      <LargeAutoSlider />
      <div className="confWrapper">
        <Configurator configModelId />
      </div>

      <Card>
        <TestDrive />
      </Card>

      <Box sx={{ paddingTop: '70px', paddingBottom: '70px' }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          textAlign="center"
          sx={{ fontSize: '2.5rem', marginBottom: '2rem' }}
        >
          Автомобили с пробегом
        </Typography>

        <div className="slider-container">
          <CarSlider />
        </div>
      </Box>
    </Stack>
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
                <Box
                  component="img"
                  sx={{ width: '100%', objectFit: 'cover', display: 'block' }}
                  src={item.imgPath}
                  alt={item.label}
                />
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
