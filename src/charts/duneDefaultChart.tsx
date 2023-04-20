import { Container, ControlElement, LineChart, Module, customElements, moment } from '@ijstech/components';
import { IDuneDefaultChart, formatNumber, getChartType } from '../global/index';

interface IDuneDefaultChartElement extends ControlElement {
  data: IDuneDefaultChart
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['scom-dune-default-chart']: IDuneDefaultChartElement;
    }
  }
};

@customElements('scom-dune-default-chart')
export class DuneDefaultChart extends Module {
  private defaultChart: LineChart;
  private _data: IDuneDefaultChart;

  set data(value: IDuneDefaultChart) {
    this._data = value;
    this.initDefaultChart();
  }

  get data() {
    return this._data;
  }

  constructor(parent?: Container, options?: IDuneDefaultChartElement) {
    super(parent, options);
    if (options?.data) {
      this.data = options.data;
    }
  }

  private groupByCategory(data: { [key: string]: any }[], category: string, xAxis: string, yAxis: string) {
    return data.reduce((result, item) => {
      const _category = item[category];
      if (!result[_category]) {
        result[_category] = {};
      }
      result[_category][item[xAxis]] = item[yAxis];
      return result;
    }, {});
  }

  private extractUniqueTimes(data: { [key: string]: any }[], keyValue: string) {
    return data.reduce((acc, cur) => {
      if (!acc.hasOwnProperty(cur[keyValue])) {
        acc[cur[keyValue]] = 0;
      }
      return acc;
    }, {});
  }

  private concatUnique(obj1: { [key: string]: any }, obj2: { [key: string]: any }) {
    const merged = { ...obj1, ...obj2 };
    return Object.keys(merged).reduce((acc, key) => {
      if (!acc.hasOwnProperty(key)) {
        acc[key] = merged[key];
      }
      return acc;
    }, {});
  }

  private initDefaultChart() {
    if (!this.defaultChart) return;
    const { options, chartData } = this.data;
    const { columns, data } = chartData;
    const { columnMapping, series, seriesOptions, numberFormatRightYAxisSeries, legend, globalSeriesType, showDataLabels, xAxis, yAxis, numberFormat } = options;
    const xTitle = xAxis?.title?.text;
    const yTitle = yAxis && yAxis[0]?.title?.text;
    let xCol = '', yCol = '', seriesCol = '';
    const percentValues = series?.percentValues;
    for (const col of columns) {
      if (!xCol && columnMapping[col] === 'x') {
        xCol = col;
        continue;
      }
      if (!yCol && columnMapping[col] === 'y') {
        yCol = percentValues ? `${col}_percent` : col;
        continue;
      }
      if (!seriesCol && columnMapping[col] === 'series') {
        seriesCol = col;
      }
    }
    const types = Object.values(seriesOptions);
    const type = types[0]?.type;
    const isTypeDifferent = types.some(s => s.type !== type);
    let rightFormat: string;
    let _series = [];
    if (seriesCol) {
      const group = this.groupByCategory(data, seriesCol, xCol, yCol);
      const times = this.extractUniqueTimes(data, xCol);
      _series = Object.keys(group).map(v => {
        const seriesOpt = seriesOptions[v];
        const _data = this.concatUnique(times, group[v]);
        return {
          name: v,
          type: getChartType(seriesOpt?.type || globalSeriesType, 'line'),
          stack: series?.stacking === 'stack' ? 'Total' : undefined,
          itemStyle: seriesOpt?.color ? { color: seriesOpt.color } : undefined,
          areaStyle: !seriesOpt?.type || seriesOpt.type === 'area' ? {} : undefined,
          emphasis: {
            focus: 'series'
          },
          showSymbol: false,
          data: Object.keys(_data).map(m => [new Date(m), _data[m]]),
          yAxisIndex: isTypeDifferent && seriesOpt ? seriesOpt.yAxis : undefined
        }
      });
    } else {
      _series = Object.keys(seriesOptions).map(v => {
        const seriesOpt = seriesOptions[v];
        return {
          name: seriesOpt?.name || v,
          type: getChartType(seriesOpt?.type || globalSeriesType, 'line'),
          stack: series?.stacking === 'stack' ? 'Total' : undefined,
          itemStyle: seriesOpt?.color ? { color: seriesOpt.color } : undefined,
          areaStyle: !seriesOpt?.type || seriesOpt.type === 'area' ? {} : undefined,
          emphasis: {
            focus: 'series'
          },
          showSymbol: false,
          label: showDataLabels ? {
            show: true,
            formatter: function (params: any) {
              return formatNumber(params.value);
            }
          } : undefined,
          data: data.map(m => [new Date(m[xCol]), m[v]]),
          yAxisIndex: isTypeDifferent && seriesOpt ? seriesOpt.yAxis : undefined
        }
      });
    }
    let min = 0, max = 0;
    const isSingle = _series.length === 1 && !_series[0].areaStyle;
    if (isSingle) {
      const arr = _series[0].data.filter(v => v[1] !== null).map(v => v[1]);
      min = Math.min(...arr);
      max = Math.max(...arr);
      const step = (max - min) / 5;
      min = min > step ? min - step : min;
      max += step;
    }
    const minInterval = (max - min) / 4;
    const power = Math.pow(10, Math.floor(Math.log10(minInterval)));
    const roundedInterval = Math.ceil(minInterval / power) * power;
    const defaultYAxis = {
      type: 'value',
      name: yTitle || '',
      nameLocation: 'center',
      nameGap: yTitle ? 40 : 15,
      nameTextStyle: {
        fontWeight: 'bold'
      },
      min: isSingle ? min : undefined,
      max: isSingle ? max : undefined,
      interval: isSingle ? roundedInterval : undefined,
      axisLabel: {
        showMinLabel: false,
        showMaxLabel: false,
        fontSize: 10,
        position: 'end',
        formatter: (value: number, index: number) => {
          return formatNumber(value, { decimals: 2, percentValues })
        }
      },
      splitNumber: 4
    };
    let _yAxis: any = isTypeDifferent ? [] : defaultYAxis;
    if (isTypeDifferent) {
      for (let i = 0; i < _series.length; i++) {
        if (i < _series.length - 1) {
          _yAxis.push(defaultYAxis);
        } else {
          _yAxis.push({
            ...defaultYAxis,
            position: 'right'
          });
          rightFormat = _series.sort((a, b) => a.yAxisIndex - b.yAxisIndex)[i].name;
        }
      }
    }
    const _chartData: any = {
      tooltip: {
        trigger: 'axis',
        position: function (point: any, params: any, dom: any, rect: any, size: any) {
          var x = point[0];
          var y = point[1];
          var viewWidth = document.documentElement.clientWidth;
          var viewHeight = document.documentElement.clientHeight;
          var boxWidth = size.contentSize[0];
          var boxHeight = size.contentSize[1];
          if (x + boxWidth > viewWidth) {
            x = x - boxWidth;
          }
          if (y + boxHeight > viewHeight) {
            y = y - boxHeight;
          }
          if (x < 0) x = 0;
          if (y < 0) y = 0;
          return [x, y];
        },
        formatter: (params: any) => {
          let res = `<b>${moment(params[0].axisValue).format('YYYY-MM-DD HH:mm')}</b>`;
          if (_series.length === 1) {
            res += `<div style="display: flex; justify-content: space-between; gap: 10px"><span>${params[0].marker} ${params[0].seriesName}</span> ${formatNumber(params[0].value[1], { percentValues })}</div>`;
          } else {
            for (const param of params) {
              res += `<div style="display: flex; justify-content: space-between; gap: 10px"><span>${param.marker} ${param.seriesName}</span> ${formatNumber(param.value[1], { format: rightFormat === param.seriesName && numberFormatRightYAxisSeries ? numberFormatRightYAxisSeries : undefined, percentValues })}</div>`
            }
          }
          return res;
        },
        axisPointer: {
          type: 'cross',
          label: {
            show: false
          }
        }
      },
      legend: {
        show: legend.enabled
      },
      xAxis: {
        type: 'time',
        boundaryGap: false,
        name: xTitle || '',
        nameLocation: 'center',
        nameGap: xTitle ? 25 : 15,
        nameTextStyle: {
          fontWeight: 'bold'
        },
        axisLabel: {
          fontSize: 10,
          // formatter: (value: number, index: number) => {
          //   return moment(value).format('MMM YYYY')
          // }
        },
      },
      yAxis: _yAxis,
      series: _series
    };
    this.defaultChart.data = _chartData;
    this.defaultChart.drawChart();
  }

  init() {
    super.init();
    this.defaultChart.setAttribute('role', 'dune-chart');
    if (this.data) {
      this.initDefaultChart();
    }
  }

  render() {
    return (
      <i-line-chart id="defaultChart" width="100%" height="100%" />
    )
  }
}