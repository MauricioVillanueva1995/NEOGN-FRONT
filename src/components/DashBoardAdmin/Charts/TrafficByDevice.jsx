import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { getTrafficChannelsChartOptions } from './ChartsOptions';

function TrafficByDevice() {
  useEffect(() => {
    if (document.getElementById('traffic-by-device')) {
      const options = getTrafficChannelsChartOptions();
      const chart = new ApexCharts(document.getElementById('traffic-by-device'), options);
      chart.render();

      // init again when toggling dark mode
      document.addEventListener('dark-mode', function () {
        chart.updateOptions(getTrafficChannelsChartOptions());
      });

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="traffic-by-device" />;
}

export default TrafficByDevice;