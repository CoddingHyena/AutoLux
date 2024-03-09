import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import Chart from 'react-apexcharts';
import getDefaultChartsColors from '@helpers/getDefaultChartsColors';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import CardHeader from '@/components/cardHeader';

function CustomersOverviewCard() {
  const [viewBy, setViewBy] = useState('day');

  const changeTab = (tabKey) => {
    setViewBy(tabKey);
  };
  return (
    <Card>
      <CardHeader title="График документов" size="small">
        <ButtonGroup variant="outlined" size="small" aria-label="temporaly button group">
          <TabButton changeTab={changeTab} tabKey="day" activeView={viewBy}>
            День
          </TabButton>
          <TabButton changeTab={changeTab} tabKey="week" activeView={viewBy}>
            Неделя
          </TabButton>
          <TabButton changeTab={changeTab} tabKey="month" activeView={viewBy}>
            Месяц
          </TabButton>
        </ButtonGroup>
      </CardHeader>
      <CustomersChart activeView={viewBy} />
    </Card>
  );
}
function TabButton({ children, tabKey, changeTab, activeView }) {
  return (
    <Button
      onClick={() => changeTab(tabKey)}
      disableElevation
      variant={activeView === tabKey ? 'contained' : 'outlined'}
    >
      {children}
    </Button>
  );
}

function getCustomerGraphConfig(config) {
  return {
    options: {
      colors: getDefaultChartsColors(config?.mode === 'dark' ? 3 : 1),
      fill: {
        opacity: 0.6,
        type: 'solid',
      },
      xaxis: {
        categories: [],
      },
      ...(config?.mode === 'dark' && {
        tooltip: {
          theme: 'dark',
        },
      }),

      chart: {
        ...(config?.mode === 'dark' && { foreColor: '#fff' }),
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
        parentHeightOffset: 0,
      },
      stroke: {
        width: 0,
        curve: 'straight',
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        seriesName: 'customers cuantity',
        min: 0,
        max: 15.0,
        tickAmount: 7,
        decimalsInFloat: 1,
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      legend: {
        show: true,
        position: 'bottom',
        floating: true,
        offsetY: 20,
      },
    },
    series: {
      day: [
        {
          name: 'New Customer',
          data: [2.0, 3.0, 6.0, 5.0, 7.0, 8.0, 10.0],
        },
        {
          name: 'Returning Customer',
          data: [1.0, 2.0, 5.0, 3.0, 5.0, 6.0, 9.0],
        },
      ],
      week: [
        {
          name: 'New Customer',
          data: [5.0, 4.0, 9.0, 6.0, 8.0, 11.0, 7.0],
        },
        {
          name: 'Returning Customer',
          data: [4.0, 3.0, 7.0, 4.0, 6.0, 9.0, 7.0],
        },
      ],
      month: [
        {
          name: 'New Customer',
          data: [5.0, 6.0, 3.0, 5.0, 6.0, 11.0, 4.0],
        },
        {
          name: 'Returning Customer',
          data: [4.0, 5.0, 2.0, 4.0, 5.0, 7.0, 3.0],
        },
      ],
    },
  };
}

function CustomersChart({ activeView }) {
  const theme = useTheme();
  return (
    <Box
      component={Chart}
      options={getCustomerGraphConfig({ mode: theme.palette.mode })?.options}
      series={getCustomerGraphConfig()?.series?.[activeView]}
      type="area"
      width="100%"
      ml={-1}
    />
  );
}

const data = {
  days: [
    // 1-15 марта 2024
    '01.03.2024',
    '02.03.2024',
    '03.03.2024',
    '04.03.2024',
    '05.03.2024',
    '06.03.2024',
    '07.03.2024',
    '08.03.2024',
    '09.03.2024',
    '10.03.2024',
    '11.03.2024',
    '12.03.2024',
    '13.03.2024',
    '14.03.2024',
    '15.03.2024',
    // 1-15 февраля 2024
    '01.02.2024',
    '02.02.2024',
    '03.02.2024',
    '04.02.2024',
    '05.02.2024',
    '06.02.2024',
    '07.02.2024',
    '08.02.2024',
    '09.02.2024',
    '10.02.2024',
    '11.02.2024',
    '12.02.2024',
    '13.02.2024',
    '14.02.2024',
    '15.02.2024',
  ],
  lastMonth: {
    day: [
      // Средние баллы за каждый день февраля 2024 (от 1 до 5)
      4.3, 4.6, 4.1, 3.8, 4.2, 4.0, 4.5, 4.7, 4.4, 4.3, 4.1, 4.0, 4.2, 4.5, 4.6,
    ],
    week: [
      // Средние баллы за каждую неделю февраля 2024 (от 1 до 5)
      4.4, 4.5, 4.2, 4.0, 4.3,
    ],
  },
  thisMonth: {
    day: [
      // Средние баллы за каждый день марта 2024 (от 1 до 5)
      4.5, 4.8, 4.2, 4.0, 4.3, 4.1, 4.6, 4.9, 4.5, 4.4, 4.2, 4.1, 4.3, 4.6, 4.7,
    ],
    week: [
      // Средние баллы за каждую неделю марта 2024 (от 1 до 5)
      4.6, 4.7, 4.3, 4.4, 4.5,
    ],
  },
};

export default CustomersOverviewCard;
