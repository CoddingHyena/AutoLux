import React from 'react';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '../../components/cardHeader';

const getCustomerGraphConfig = (themeMode) => ({
  options: {
    colors: getDefaultChartsColors(4),
    chart: {
      foreColor: themeMode === 'dark' ? '#fff' : '#000',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      parentHeightOffset: 0,
    },
    labels: ['Тестдрайвы', 'Техобслуживания', 'Заявки на обр. связь'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'left',
      formatter: (seriesName, opts) => {
        return `${seriesName} - ${opts.w.globals.series[opts.seriesIndex].toLocaleString()}`;
      },
      fontFamily: 'inherit',
      fontSize: 13,
      floating: true,
      offsetY: 90,
      markers: {
        width: 15,
        height: 15,
      },
    },
    tooltip: {
      formatter: (value) => {
        return (+value).toLocaleString();
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontFamily: 'inherit',
              fontSize: 13,
            },
            value: {
              formatter: (value) => {
                return (+value).toLocaleString();
              },
            },
            total: {
              show: true,
              label: 'ИТОГО',
              formatter: function (w) {
                // Убедимся, что seriesTotals существует и содержит значения
                if (w.globals.seriesTotals && w.globals.seriesTotals.length > 0) {
                  // Суммируем все значения в seriesTotals
                  const total = w.globals.seriesTotals.reduce((total, num) => total + num, 0);
                  // Форматируем результат как локализованную строку
                  return total.toLocaleString();
                }
                // В случае ошибки или отсутствия данных возвращаем '0'
                return '0';
              },
            },
          },
        },
      },
    },
  },
  series: [9212, 8768, 8355],
});

function MostVisitedCard() {
  const theme = useTheme();
  const { options, series } = getCustomerGraphConfig(theme.palette.mode);

  return (
    <Card>
      <CardHeader title="По типам документов" size="small" />
      <Box
        color="text.primary"
        component={Chart}
        options={options}
        series={series}
        type="donut"
        width="100%"
        height="400px" // Измените высоту по вашему усмотрению
      />
    </Card>
  );
}

export default MostVisitedCard;
