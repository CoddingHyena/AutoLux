import useAutoCounter from '@hooks/useAutoCounter';

import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
// MUI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const STATS_DATA = [
  {
    id: 1,
    color: 'secondary.main',
    name: 'Конверсия',
    total: 87,
    Icon: TrendingUpOutlinedIcon, // Изменено
  },
  {
    id: 2,
    color: 'cuaternary.main',
    name: 'Конверсия в обр. связь',
    total: 92,
    Icon: ContactSupportOutlinedIcon, // Изменено
  },
  {
    id: 3,
    color: 'tertiary.400',
    name: 'Всего заявок',
    total: 757,
    Icon: AssessmentOutlinedIcon, // Изменено
  },
  {
    id: 4,
    color: 'success.main',
    name: 'Средняя оценка',
    total: 4.1,
    Icon: StarBorderOutlinedIcon, // Изменено
  },
];

function StatsSection() {
  return (
    <Grid
      container
      sx={{
        borderRadius: 1,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        boxShadow: 26,
        '--Grid-borderWidth': '1px',
        borderTop: 'var(--Grid-borderWidth) solid',
        borderLeft: 'var(--Grid-borderWidth) solid',
        borderColor: 'border',
        '& > div': {
          borderRight: 'var(--Grid-borderWidth) solid',
          borderBottom: 'var(--Grid-borderWidth) solid',
          borderColor: 'border',
        },
      }}
    >
      {STATS_DATA.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.id}>
          <StatSection statData={stat} />
        </Grid>
      ))}
    </Grid>
  );
}

function StatSection({ statData }) {
  const { name, total, color, Icon } = statData;
  const counter = useAutoCounter({
    limiter: total,
    increment: 5000,
    interval: 10,
  });

  // Функция для добавления символа процента к значениям конверсии
  const formatValue = (name, value) => {
    if (name === 'Конверсия' || name === 'Конверсия обр. связь') {
      return `${value.toLocaleString()}%`; // Добавляем символ процента
    }
    return value.toLocaleString(); // Возвращаем значение без изменений
  };

  return (
    <Stack p={3} direction="row" spacing={3} alignItems="center">
      <Icon
        sx={{
          fontSize: 60,
          color,
        }}
        color="disabled"
      />
      <span>
        <Typography color={color} variant="h5" textTransform="uppercase">
          {name}
        </Typography>
        <Typography fontSize={30}>{formatValue(name, counter)}</Typography>{' '}
        {/* Используем функцию formatValue */}
      </span>
    </Stack>
  );
}

export default StatsSection;
