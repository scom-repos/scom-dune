export interface IVisualizationWidgets {
  visualization: IVisualization
}

export interface IVisualization {
  id: number,
  type: 'chart' | 'counter' | 'table' | string,
  name: string,
  options: IDuneOptions | ICounterOptions | ITableOptions,
  query_details: {
    query_id: number,
    name: string,
    description?: string,
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

// Info
export interface IDuneInfo {
  info?: {
    id: number,
    name: string,
    profile_image_url: string
  },
  type: 'chart' | 'counter' | 'table',
  name: string,
  subName: string,
  description?: string,
  theme?: 'light' | 'dark'
}

// Charts
export interface IDuneOptions {
  columnMapping?: { [key: string]: string },
  seriesOptions?: { [key: string]: { color?: string, type?: string, name?: string, yAxis?: number, zIndex?: number } },
  globalSeriesType?: string,
  showDataLabels?: boolean,
  numberFormatRightYAxisSeries?: string,
  legend?: { enabled: boolean },
  numberFormat?: string
}

export interface IDuneChart extends IDuneInfo {
  chartData: {
    columns: string[],
    data: { [key: string]: string | number }[],
  }
}

// Pie chart
export interface IDunePieOptions extends IDuneOptions {
  valuesOptions: { [key: string]: { color: string } }
}

export interface IDunePieChart extends IDuneChart {
  options: IDunePieOptions,
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

// Counter
export interface ICounterOptions {
  counterColName: string,
  rowNumber: number,
  counterLabel?: string,
  stringDecimal?: number,
  stringPrefix?: string,
  stringSuffix?: string,
  coloredPositiveValues?: boolean,
  coloredNegativeValues?: boolean
}

export interface IDuneCounter extends IDuneInfo {
  options: ICounterOptions,
  counterData: {
    columns: string[],
    data: { [key: string]: string | number }[],
  }
}

// Table

export interface ITableOptions {
  columns: {
    name: string,
    title?: string,
    alignContent?: string,
    isHidden?: boolean,
    numberFormat?: string,
    type?: 'normal' | 'progressbar' | string,
    coloredPositiveValues?: boolean,
    coloredNegativeValues?: boolean
  }[]
}
export interface IDuneTable extends IDuneInfo {
  options: ITableOptions,
  tableData: {
    columns: string[],
    data: { [key: string]: string | number }[],
  }
}

export interface IDuneConfig {
  visualizationName: string;
}