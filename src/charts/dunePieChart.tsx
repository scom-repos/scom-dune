import { Container, ControlElement, Module, PieChart, customElements } from '@ijstech/components';
import { IDunePieChart, formatNumber } from '../global/index';

interface IDunePieChartElement extends ControlElement {
  data: IDunePieChart
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['scom-dune-pie-chart']: IDunePieChartElement;
    }
  }
};

@customElements('scom-dune-pie-chart')
export class DunePieChart extends Module {
  private pieChart: PieChart;
  private _data: IDunePieChart;

  set data(value: IDunePieChart) {
    this._data = value;
    this.initPieChart();
  }

  get data() {
    return this._data;
  }

  constructor(parent?: Container, options?: IDunePieChartElement) {
    super(parent, options);
    if (options?.data) {
      this.data = options.data;
    }
  }

  private initPieChart() {
    if (!this.pieChart) return;
    const { options, chartData, theme } = this.data;
    const { columns, data } = chartData;
    const { columnMapping, seriesOptions, legend, showDataLabels, valuesOptions, numberFormat } = options;
    let xCol = '', yCol = '';
    for (const col of columns) {
      if (!xCol && columnMapping[col] === 'x') {
        xCol = col;
        continue;
      }
      if (!yCol && columnMapping[col] === 'y') {
        yCol = col;
      }
    }
    const _data = data.map(v => {
      return {
        value: v[yCol],
        name: v[xCol],
        itemStyle: valuesOptions[v[xCol]] ? { color: valuesOptions[v[xCol]].color } : undefined,
        label: showDataLabels ? {
          show: true,
          position: 'inside',
          formatter: function (params: any) {
            return params.percent >= 5 ? params.percent + '%' : '';
          }
        } : undefined
      }
    });
    const _chartData: any = {
      tooltip: {
        trigger: 'item',
        position: function (point: any, params: any, dom: any, rect: any, size: any) {
          var x = point[0];
          var y = point[1];
          var viewWidth = document.documentElement.clientWidth;
          var viewHeight = document.documentElement.clientHeight;
          var boxWidth = size.contentSize[0]; // width of tooltip box
          var boxHeight = size.contentSize[1]; // height of tooltip box
          // calculate x position of tooltip
          if (x + boxWidth > viewWidth) {
            x = x - boxWidth;
          }
          // calculate y position of tooltip
          if (y + boxHeight > viewHeight) {
            y = y - boxHeight;
          }
          if (x < 0) x = 0;
          if (y < 0) y = 0;
          return [x, y];
        },
        formatter: (params: any) => {
          return `<b>${params.name}</b> <br />
            ${params.marker} ${params.seriesName}: ${formatNumber(params.value)}`;
        }
      },
      legend: {
        show: legend.enabled
      },
      series: [
        {
          name: seriesOptions[yCol]?.name || seriesOptions[xCol]?.name,
          data: _data,
          type: 'pie',
          radius: ['40%', '70%'],
          label: {
            show: false,
            formatter: '{d}%'
          }
        }
      ]
    };
    this.pieChart.data = _chartData;
    if (theme) {
      this.pieChart.theme = theme;
    }
    this.pieChart.drawChart();
  }

  init() {
    super.init();
    this.pieChart.setAttribute('role', 'dune-chart');
    if (this.data) {
      this.initPieChart();
    }
  }

  render() {
    return (
      <i-pie-chart id="pieChart" width="100%" height="100%" />
    )
  }
}