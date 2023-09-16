import React, { useEffect } from 'react';
import 'zingchart/es6';
import 'zingchart/modules-es6/zingchart-tree.min.js';

function Roadmap() {
  useEffect(() => {
    // Chart data
    let chartData = [
      {
        id: 'HTML',
        parent: '',
        name: 'HTML',
      },
      {
        id: 'asia',
        parent: 'HTML',
        name: 'Tag',
        value: 4100000000,
      },
      {
        id: 'africa',
        parent: 'HTML',
        name: 'table',
        value: 1260000000,
      },
      {
        id: 'america',
        parent: 'HTML',
        name: 'Img Tag',
        value: 328000000,
      },
      {
        id: 'europe',
        parent: 'HTML',
        name: 'Europe',
        value: 741000000,
      },
      {
        id: 'europee',
        parent: 'HTML',
        name: 'Europeee',
        value: 741000000,
      },
      {
        id: 'ca',
        parent: 'america',
        name: 'CSS',
        value: 32000000,
      },
      {
        id: 'ny',
        parent: 'america',
        name: 'New York',
        value: 19000000,
      },
      {
        id: 'txt',
        parent: 'america',
        name: 'Texasss',
        value: 29000000,
      },
    ];

    // Chart configuration
    let chartConfig = {
      type: 'tree',
      title: {
        text: 'Powered By Being Developer',
      },
      plotarea: {
        marginTop: 50,
      },
      options: {
        palette: [
          '#2196F3',
          '#3F51B5',
          '#42A5F5',
          '#5C6BC0',
          '#64B5F6',
          '#7986CB',
          '#90CAF9',
          '#9FA8DA',
          '#BBDEFB',
          '#C5CAE9',
        ],
        link: {
          aspect: 'arc',
        },
        maxSize: 15,
        minSize: 5,
        node: {
          type: 'circle',
          tooltip: {
            padding: '8px 10px',
            borderRadius: '3px',
          },
        },
      },
      series: chartData,
    };

    // Render the chart
    zingchart.render({
      id: 'myChart',
      data: chartConfig,
      height: '45%',
      width: '100%',
      output: 'canvas',
    });
  }, []);

  return (
    <div>
      {/* Chart Container */}
      <div id="myChart"></div>
      {/* <a href="https://www.zingchart.com/" rel="noopener" className="zc-ref">
        Powered by Being Developer
      </a> */}
    </div>
  );
}

export default Roadmap;
