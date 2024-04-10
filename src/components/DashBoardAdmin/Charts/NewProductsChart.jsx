import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';
import { getNewProductsChartOptions } from './ChartsOptions';

function NewProductsChart() {
  useEffect(() => {
    if (document.getElementById('new-products-chart')) {
      const options = getNewProductsChartOptions();
      const chart = new ApexCharts(document.getElementById('new-products-chart'), options);
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div className="w-full" id="new-products-chart"></div>;
}

export default NewProductsChart;