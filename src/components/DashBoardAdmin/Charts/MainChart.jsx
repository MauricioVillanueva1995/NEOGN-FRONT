import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { getMainChartOptions } from './ChartsOptions';

function MainChart() {
  useEffect(() => {
    if (document.getElementById('main-chart')) {
      const chart = new ApexCharts(document.getElementById('main-chart'), getMainChartOptions());
      chart.render();

      document.addEventListener('dark-mode', function () {
        chart.updateOptions(getMainChartOptions());
      });

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="main-chart" />;
}

export default MainChart;