import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { getSalesByCategoryChartOptions } from "./ChartsOptions";

function SalesByCategoryChart() {
  useEffect(() => {
    if (document.getElementById("sales-by-category")) {
      const options = getSalesByCategoryChartOptions();
      const chart = new ApexCharts(
        document.getElementById("sales-by-category"),
        options
      );
      chart.render();

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div className="w-full" id="sales-by-category"></div>;
}

export default SalesByCategoryChart;
