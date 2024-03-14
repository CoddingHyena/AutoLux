import React from 'react';
import { useTheme } from '@mui/material/styles';
import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '../../components/cardHeader';

const getCustomerGraphConfig = (themeMode) => {
  const series = [193, 345, 219]; // Пример данных серий
  const total = series.reduce((total, num) => total + num, 0); // Вычисляем общее количество для расчета процентов

  return {
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
      labels: ['Тестдрайвы', 'Заявки на обр. связь', 'Техобслуживания'],
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        formatter: (seriesName, opts) => {
          // Обновляем вычисление total прямо здесь, учитывая актуальные данные
          const total = opts.w.config.series.reduce((acc, val) => acc + val, 0);
          const seriesValue = opts.w.globals.series[opts.seriesIndex];
          const percentage = ((seriesValue / total) * 100).toFixed(2); // Вычисляем процентное значение
          return `${seriesName} - ${seriesValue.toLocaleString()} (${percentage}%)`; // Добавляем процентное значение в легенду
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
                  if (w.globals.seriesTotals && w.globals.seriesTotals.length > 0) {
                    const total = w.globals.seriesTotals.reduce((total, num) => total + num, 0);
                    return total.toLocaleString();
                  }
                  return '0';
                },
              },
            },
          },
        },
      },
    },
    series: series, // Используем переменную series, чтобы значения были динамическими
  };
};

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
