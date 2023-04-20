import {
  Module,
  customModule,
  ControlElement,
  customElements,
  Container,
  IDataSchema,
  Panel,
  PieChart,
  HStack,
  Image,
  Label
} from '@ijstech/components';
import { PageBlock, IDuneConfig, IDunePieChart, IVisualizationWidgets, IDuneDefaultChart } from './global/index';
import { containerStyle } from './index.css';
import { dashboards, queryIdData } from './dummy/index';
import { DuneDefaultChart, DunePieChart } from './charts/index';

interface ScomSocialMediaElement extends ControlElement, IDuneConfig {

}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-scom-dune']: ScomSocialMediaElement;
    }
  }
}

@customModule
@customElements('i-scom-dune')
export default class ScomDune extends Module implements PageBlock {
  private pnlDune: Panel;
  private dashboard: IVisualizationWidgets[] = [];
  private chartsData = [];

  private _oldData: IDuneConfig = { url: '' };
  private _data: IDuneConfig = { url: '' };
  private oldTag: any = {};
  tag: any = {};
  defaultEdit: boolean = true;
  readonly onConfirm: () => Promise<void>;
  readonly onDiscard: () => Promise<void>;
  readonly onEdit: () => Promise<void>;

  static async create(options?: ScomSocialMediaElement, parent?: Container) {
    let self = new this(parent, options);
    await self.ready();
    return self;
  }

  constructor(parent?: Container, options?: ScomSocialMediaElement) {
    super(parent, options);
  }

  getData() {
    return this._data;
  }

  async setData(data: IDuneConfig) {
    this._data = data;
    this.getDashboardData();
    this.onUpdateBlock();
  }

  getTag() {
    return this.tag;
  }

  async setTag(value: any) {
    this.tag = value || {};
    this.onUpdateBlock();
  }

  getConfigSchema() {
    return this.getThemeSchema();
  }

  onConfigSave(config: any) {
    this.tag = config;
    this.onUpdateBlock();
  }

  async edit() {
    // this.pnlDune.visible = false
  }

  async confirm() {
    this.onUpdateBlock();
    // this.pnlDune.visible = true
  }

  async discard() {
    // this.pnlDune.visible = true
  }

  async config() { }

  private getPropertiesSchema(readOnly?: boolean) {
    const propertiesSchema = {
      type: 'object',
      properties: {
        url: {
          type: 'string',
          required: true,
          readOnly
        }
      }
    }
    return propertiesSchema as IDataSchema;
  }

  private getThemeSchema(readOnly?: boolean) {
    const themeSchema = {
      type: 'object',
      properties: {}
    }
    return themeSchema as IDataSchema;
  }

  getEmbedderActions() {
    return this._getActions(this.getPropertiesSchema(true), this.getThemeSchema(true));
  }

  getActions() {
    return this._getActions(this.getPropertiesSchema(), this.getThemeSchema());
  }

  _getActions(propertiesSchema: IDataSchema, themeSchema: IDataSchema) {
    const actions = [
      {
        name: 'Settings',
        icon: 'cog',
        command: (builder: any, userInputData: any) => {
          return {
            execute: async () => {
              this._oldData = { ...this._data };
              this.onUpdateBlock();
            },
            undo: () => {
              this._data = { ...this._oldData };
              this.onUpdateBlock();
            },
            redo: () => { }
          }
        },
        userInputDataSchema: propertiesSchema,
      },
      {
        name: 'Theme Settings',
        icon: 'palette',
        command: (builder: any, userInputData: any) => {
          return {
            execute: async () => {
              if (!userInputData) return;
              this.oldTag = { ...this.tag };
              this.setTag(userInputData);
              if (builder) builder.setTag(userInputData);
            },
            undo: () => {
              if (!userInputData) return;
              this.setTag(this.oldTag);
              if (builder) builder.setTag(this.oldTag);
            },
            redo: () => { }
          }
        },
        userInputDataSchema: themeSchema
      }
    ]
    return actions
  }

  private onUpdateBlock() {
    if (this._data) {

    }
  }

  private async getDashboardData() {
    const _dashboard = dashboards;
    if (_dashboard?.dashboards?.length && _dashboard.dashboards[0].visualization_widgets?.length) {
      this.dashboard = _dashboard.dashboards[0].visualization_widgets.filter(v => v.visualization?.type === 'chart').sort((a, b) => a.id - b.id);
    } else {
      this.dashboard = [];
    }
    this.getQueryData();
  }

  private async getQueryData() {
    let _queryDataIds = {};
    const _chartsData = [];
    for (const dashboard of this.dashboard) {
      const { query_details, name, options } = dashboard.visualization;
      const _queryId = query_details.query_id;
      if (!_queryDataIds[_queryId]) {
        _queryDataIds[_queryId] = queryIdData[_queryId];
      }
      const _chartOpt = {
        options,
        name,
        subName: query_details.name,
        info: query_details.user || query_details.team,
        chartData: queryIdData[_queryId]
      }
      _chartsData.push(_chartOpt);
    }
    this.chartsData = _chartsData;
    console.log(this.chartsData);
    for (const chart of this.chartsData) {
      this.initChart(chart, chart.options.globalSeriesType);
    }
  }

  private initChart(chart: IDunePieChart | IDuneDefaultChart, type: string) {
    const { name, subName, info } = chart;
    const hStack = new HStack(this.pnlDune, {
      gap: 10,
      width: '100%',
      maxWidth: 650,
      margin: { top: 20, left: 'auto', right: 'auto' },
      padding: { top: 10, bottom: 10, left: 10, right: 10 },
      border: { width: 1, style: 'solid', color: '#ffbdb6' },
      verticalAlignment: 'center',
      wrap: 'wrap'
    });
    if (name) {
      new Label(hStack, {
        caption: name,
        font: { bold: true }
      });
    }
    if (subName) {
      new Label(hStack, {
        caption: subName,
        font: { bold: !name }
      });
    }
    if (info?.name) {
      const hStackUser = new HStack(hStack, {
        gap: 10,
        verticalAlignment: 'center',
        wrap: 'wrap',
        margin: { left: 'auto' }
      });
      if (info.profile_image_url) {
        new Image(hStackUser, {
          url: info.profile_image_url,
          margin: { left: 'auto' },
          width: 20,
          height: 20
        });
      }
      new Label(hStackUser, {
        caption: info.name,
      });
    }
    let chartElm: DunePieChart | DuneDefaultChart;
    if (type === 'pie') {
      chartElm = new DunePieChart(undefined, {
        width: '100%',
        height: 500,
        data: chart as IDunePieChart
      });
    } else {
      chartElm = new DuneDefaultChart(undefined, {
        width: '100%',
        height: 500,
        data: chart as IDuneDefaultChart
      });
    }
    if (chartElm)
    hStack.appendChild(chartElm);
  }

  private resizeCharts() {
    const charts = this.pnlDune.querySelectorAll('[role=dune-chart]');
    for (const chart of charts) {
      (chart as PieChart).resize();
    }
  }

  init() {
    this.isReadyCallbackQueued = true;
    super.init();
    const url = this.getAttribute('url', true);
    if (url) {
      this.setData({ url });
    }
    this.isReadyCallbackQueued = false;
    this.executeReadyCallback();
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.resizeCharts();
      }, 300);
    });
  }

  render() {
    return (
      <i-panel id="pnlDune" class={containerStyle} />
    )
  }
}