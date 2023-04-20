export interface IVisualizationWidgets {
  visualization: IVisualization
}

export interface IVisualization {
  id: number,
  type: string,
  name: string,
  options: IDuneOptions,
  query_details: {
    query_id: number,
    name: string,
    user: null | {
      id: number,
      name: string,
      profile_image_url: string
    },
    team: null | {
      id: number,
      name: string,
      profile_image_url: string
    }
  }
}

export interface IDuneOptions {
  columnMapping?: { [key: string]: string },
  seriesOptions?: { [key: string]: { color?: string, type?: string, name?: string, yAxis?: number } },
  globalSeriesType?: string,
  showDataLabels?: boolean,
  numberFormatRightYAxisSeries?: string,
  legend?: { enabled: boolean },
  numberFormat?: string
}

export interface IDuneChart {
  chartData: {
    columns: string[],
    data: { [key: string]: string | number }[],
  },
  info?: {
    id: number,
    name: string,
    profile_image_url: string
  },
  name: string,
  subName: string
}

// Pie chart
export interface IDunePieOptions extends IDuneOptions {
  valuesOptions: { [key: string]: { color: string } }
}

export interface IDunePieChart extends IDuneChart {
  options: IDunePieOptions
}

// Default charts
export interface IDuneDefaultOptions extends IDuneOptions {
  series: { stacking: string, percentValues?: boolean },
  valuesOptions: { [key: string]: { color: string } },
  xAxis: {
    title: { text: string },
    type: string
  },
  yAxis: {
    title: { text: string },
    type: string
  }[]
}

export interface IDuneDefaultChart extends IDuneChart {
  options: IDuneDefaultOptions
}

export interface IDuneConfig {
  url: string;
}