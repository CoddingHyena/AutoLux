import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import charts from './mocsFBDocsChart';

function ChartFB() {
  let ordersData = charts;

  const [series, setSeries] = useState([
    {
      name: 'Обработано',
      data: [],
    },
    {
      name: 'Заявки на обратную связь',
      data: [],
    },
  ]);

  useEffect(() => {
    if (ordersData) {
      let completedOrdersMap = {};
      let totalOrdersMap = {};

      ordersData.forEach((order) => {
        const date = new Date(order.dateNow).toDateString();
        // Учитываем каждую заявку для подсчета общего количества
        totalOrdersMap[date] = (totalOrdersMap[date] || 0) + 1;
        if (order.status) {
          // Учитываем только обработанные заявки
          completedOrdersMap[date] = (completedOrdersMap[date] || 0) + 1;
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

      const totalSeriesData = sortData(
        Object.keys(totalOrdersMap).map((date) => {
          return { x: new Date(date).getTime(), y: totalOrdersMap[date] };
        })
      );

      setSeries([
        { name: 'Обработано', data: completedSeriesData },
        { name: 'Заявки на обратную связь', data: totalSeriesData },
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
    colors: ['#17a814', '#d6a706'],
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
        text: 'Заявки на обратную связь',
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

export default ChartFB;
