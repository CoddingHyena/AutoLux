import useAutoCounter from '@hooks/useAutoCounter';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

import CardHeader from '@/components/cardHeader';

const SALES_PROGRESS_DATA = [
  {
    sale: 318,
    progress: 80,
    color: 'info',
    name: 'Иван Михалыч',
  },
  {
    sale: 220,
    progress: 55,
    color: 'error',
    name: 'Лидия Павловна',
  },
  {
    sale: 219,
    progress: 54,
    color: 'success',
    name: 'Михаил Петрович',
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
        {counter.toLocaleString()} заявок | {saleData.name}
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
