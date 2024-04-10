import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { getSignupsChartOptions } from './ChartsOptions';

function WeekSignupsChart() {
  useEffect(() => {
    if (document.getElementById('week-signups-chart')) {
      const options = getSignupsChartOptions();
      const chart = new ApexCharts(document.getElementById('week-signups-chart'), options);
      chart.render();

      // init again when toggling dark mode
      document.addEventListener('dark-mode', function () {
        chart.updateOptions(getSignupsChartOptions());
      });

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div className="w-full" id="week-signups-chart"></div>;
}

export default WeekSignupsChart;