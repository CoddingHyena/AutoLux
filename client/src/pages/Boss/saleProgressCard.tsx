import useAutoCounter from '@hooks/useAutoCounter';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

import CardHeader from '@/components/cardHeader';

const SALES_PROGRESS_DATA = [
  {
    sale: 43765,
    progress: 80,
    color: 'info',
    name: 'Алена Петрова',
  },
  {
    sale: 35224,
    progress: 60,
    color: 'error',
    name: 'Василий Федорович',
  },
  {
    sale: 24224,
    progress: 40,
    color: 'success',
    name: 'Петр Ануфриев',
  },
  {
    sale: 20220,
    progress: 30,
    color: 'warning',
    name: 'Валерий Горелов',
  },
  {
    sale: 14220,
    progress: 20,
    color: 'tertiary',
    name: 'Рустам Аббасов',
  },
];
function SaleProgressCard() {
  return (
    <Card>
      <CardHeader title="Производительность менеджеров" size="small" />
      <Stack spacing={2} mt={2}>
        {SALES_PROGRESS_DATA.map((sale, index) => (
          <SaleProgress key={index} saleData={sale} />
        ))}
      </Stack>
    </Card>
  );
}

function SaleProgress({ saleData }) {
  const { progress, color, sale } = saleData;
  const counter = useAutoCounter({
    limiter: sale,
    increment: 300,
    interval: 10,
  });
  return (
    <div>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {counter.toLocaleString()} продаж | {saleData.name}
      </Typography>
      <LinearProgress
        variant="determinate"
        color={color}
        value={(counter * progress) / sale}
        sx={{
          height: 7,
        }}
      />
    </div>
  );
}

export default SaleProgressCard;
