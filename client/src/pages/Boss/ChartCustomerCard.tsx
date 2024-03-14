import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import charts from './mocsAllDocsChart';

function CustomersOverviewCard() {
  let ordersData = charts;

  const [series, setSeries] = useState([
    {
      name: 'Обработано',
      data: [],
    },
    {
      name: 'Заявки всех типов',
      data: [],
    },
  ]);

  useEffect(() => {
    if (ordersData) {
      let completedOrdersMap = {};
      let allOrdersMap = {};

      ordersData.forEach((order) => {
        const date = new Date(order.dateNow).toDateString();
        if (order.status) {
          completedOrdersMap[date] = (completedOrdersMap[date] || 0) + 1;
        }
        // Независимо от статуса, учитываем заявку в общем количестве
        allOrdersMap[date] = (allOrdersMap[date] || 0) + 1;
      });

      const sortData = (data) => {
        return data.sort((a, b) => new Date(a.x) - new Date(b.x));
      };

      const completedSeriesData = sortData(
        Object.keys(completedOrdersMap).map((date) => {
          return { x: new Date(date).getTime(), y: completedOrdersMap[date] };
        })
      );

      const allSeriesData = sortData(
        Object.keys(allOrdersMap).map((date) => {
          return { x: new Date(date).getTime(), y: allOrdersMap[date] };
        })
      );

      setSeries([
        { name: 'Обработано', data: completedSeriesData },
        { name: 'Заявки всех типов', data: allSeriesData },
      ]);
    }
  }, [ordersData]);

  const options = {
    chart: {
      type: 'area',
      height: 350,
      stacked: false,
      locales: [
        {
          name: 'ru',
          options: {
            months: [
              'Январь',
              'Февраль',
              'Март',
              'Апрель',
              'Май',
              'Июнь',
              'Июль',
              'Август',
              'Сентябрь',
              'Октябрь',
              'Ноябрь',
              'Декабрь',
            ],
            shortMonths: [
              'Янв',
              'Фев',
              'Мар',
              'Апр',
              'Май',
              'Июн',
              'Июл',
              'Авг',
              'Сен',
              'Окт',
              'Ноя',
              'Дек',
            ],
            days: [
              'Воскресенье',
              'Понедельник',
              'Вторник',
              'Среда',
              'Четверг',
              'Пятница',
              'Суббота',
            ],
            shortDays: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            toolbar: {
              exportToSVG: 'Скачать SVG',
              exportToPNG: 'Скачать PNG',
              menu: 'Меню',
              selection: 'Выбор',
              selectionZoom: 'Выбор с увеличением',
              zoomIn: 'Увеличить',
              zoomOut: 'Уменьшить',
              pan: 'Панорамирование',
              reset: 'Сброс масштаба',
            },
          },
        },
      ],
      defaultLocale: 'ru',
    },
    colors: ['#17a814', '#008FFB'],
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
        text: 'Заявки всех типов',
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
