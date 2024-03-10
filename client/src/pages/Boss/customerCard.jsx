import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import charts from '../../_mocks/charts';

function CustomersOverviewCard() {
  let ordersData = charts;

  const [series, setSeries] = useState([
    {
      name: 'Заказы (Выполненные)',
      data: [],
    },
    {
      name: 'Заказы (Не выполненные)',
      data: [],
    },
  ]);

  useEffect(() => {
    if (ordersData) {
      let completedOrdersMap = {};
      let pendingOrdersMap = {};

      ordersData.forEach((order) => {
        const date = new Date(order.dateNow).toDateString();
        if (order.status) {
          completedOrdersMap[date] = (completedOrdersMap[date] || 0) + 1;
        } else {
          pendingOrdersMap[date] = (pendingOrdersMap[date] || 0) + 1;
        }
      });

      const sortData = (data) => {
        return data.sort((a, b) => new Date(a.x) - new Date(b.x));
      };

      const completedSeriesData = sortData(
        Object.keys(completedOrdersMap).map((date) => {
          return { x: new Date(date).getTime(), y: completedOrdersMap[date] };
        })
      );

      const pendingSeriesData = sortData(
        Object.keys(pendingOrdersMap).map((date) => {
          return { x: new Date(date).getTime(), y: pendingOrdersMap[date] };
        })
      );

      setSeries([
        { name: 'Заказы (Выполненные)', data: completedSeriesData },
        { name: 'Заказы (Не выполненные)', data: pendingSeriesData },
      ]);
    }
  }, [ordersData]);

  const options = {
    chart: {
      type: 'area',
      height: 350,
      stacked: false,
    },
    colors: ['#008FFB', '#FF4500'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      title: {
        text: 'Количество заказов',
      },
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
    </div>
  );
}

export default CustomersOverviewCard;
