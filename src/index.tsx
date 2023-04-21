import {
  Module,
  customModule,
  ControlElement,
  customElements,
  Container,
  IDataSchema,
  Panel,
  HStack,
  Image,
  Label,
  LineChart
} from '@ijstech/components';
import { PageBlock, IDuneConfig, IDunePieChart, IVisualizationWidgets, IDuneDefaultChart } from './global/index';
import { containerStyle, duneChartStyle } from './index.css';
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
  private hStackDune: Panel;
  private dashboard: IVisualizationWidgets[] = [];
  private chartData: IDunePieChart | IDuneDefaultChart;

  private _oldData: IDuneConfig = { chartName: '' };
  private _data: IDuneConfig = { chartName: '' };
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
    this._oldData = this._data;
    this._data = data;
    this.updateChartData();
  }

  getTag() {
    return this.tag;
  }

  async setTag(value: any) {
    this.tag = value || {};
    this.width = this.tag.width;
    if (this.tag.theme === 'dark') {
      this.classList.add('dune-chart--dark');
    } else {
      this.classList.remove('dune-chart--dark');
    }
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
    // this.hStackDune.visible = false
  }

  async confirm() {
    this.onUpdateBlock();
    // this.hStackDune.visible = true
  }

  async discard() {
    // this.hStackDune.visible = true
  }

  async config() { }

  private getPropertiesSchema(readOnly?: boolean) {
    const propertiesSchema = {
      type: 'object',
      properties: {
        chartName: {
          type: 'string',
          enum: [
            'Ethereum Beacon Chain Deposits Entity',
            'Chart (ETH Staked - Cumulative)',
            'Liquid Staking validators - All',
            'ETH withdrawals cumsum (ETH Withdrawals after Shanghai Unlock)',
            'Validators (ETH Withdrawals after Shanghai Unlock)',
            'ETH withdrawals (ETH Withdrawals after Shanghai Unlock)',
            'ETH price (ETH Withdrawals after Shanghai Unlock vs ETH price)',
            'Validators and ETH price (ETH Withdrawals after Shanghai Unlock vs ETH price)',
            'ETH withdrawals (ETH Withdrawals after Shanghai Unlock vs ETH price)',
            '$RDNT Price Chart (RDNT Price Chart on Arbitrum and BSC)',
            'Reserve Cumulative Value (Radiant Capital Reserve Markets (Weekly % change))',
            'RDNT/WETH LP Staked Supply (Radiant Capital Pool2 Staking LP)',
            'Holders OverTime (RDNT and RDNT V2 Holders Overtime)'
          ],
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
      properties: {
        width: {
          type: 'string',
          readOnly
        },
        height: {
          type: 'string',
          readOnly
        },
        theme: {
          type: 'string',
          enum: [
            'light',
            'theme'
          ],
          readOnly
        }
      }
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
              if (builder?.setData) {
                builder.setData(userInputData);
              }
              this.setData(userInputData);
            },
            undo: () => {
              if (builder?.setData) {
                builder.setData(this._oldData);
              }
              this.setData(this._oldData);
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
      this.renderChart();
    }
  }

  private async getDashboardData() {
    const _dashboard = dashboards;
    if (_dashboard?.dashboards?.length && _dashboard.dashboards[0].visualization_widgets?.length) {
      this.dashboard = _dashboard.dashboards[0].visualization_widgets.filter(v => v.visualization?.type === 'chart').sort((a, b) => a.id - b.id);
    } else {
      this.dashboard = [];
    }
  }

  private async updateChartData() {
    if (this._data?.chartName) {
      // TODO - fetch data
      const chartInfo = this.dashboard.find(v => {
        const { name, query_details } = v.visualization;
        const subName = query_details.name;
        let fullName = name;
        if (fullName && subName) {
          fullName = `${fullName} (${subName})`;
        } else if (subName) {
          fullName = subName;
        }
        return fullName === this._data.chartName;
      });

      if (chartInfo) {
        const { options, name, query_details } = chartInfo.visualization;
        const chartOpt = {
          options,
          name,
          subName: query_details.name,
          info: query_details.user || query_details.team,
          chartData: queryIdData[query_details.query_id]
        }
        this.chartData = chartOpt as IDunePieChart | IDuneDefaultChart;
      } else {
        this.chartData = null;
      }
    } else {
      this.chartData = null;
    }
    this.renderChart();
  }

  private async renderChart() {
    this.hStackDune.clearInnerHTML();
    if (this.chartData) {
      this.initChart(this.chartData as IDunePieChart | IDuneDefaultChart, this.chartData.options.globalSeriesType);
    }
  }

  private initChart(chart: IDunePieChart | IDuneDefaultChart, type: string) {
    this.hStackDune.clearInnerHTML();
    const { name, subName, info } = chart;
    const { width, height, theme } = this.tag || {};
    const hStack = new HStack(this.hStackDune, {
      gap: 10,
      width: width || 700,
      maxWidth: '100%',
      margin: { left: 'auto', right: 'auto' },
      padding: { top: 10, bottom: 10, left: 10, right: 10 },
      verticalAlignment: 'center',
      wrap: 'wrap'
    });
    hStack.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
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
        height: height || 500,
        data: {
          ...chart,
          theme
        } as IDunePieChart
      });
    } else {
      chartElm = new DuneDefaultChart(undefined, {
        width: '100%',
        height: height || 500,
        data: {
          ...chart,
          theme
        } as IDuneDefaultChart
      });
    }
    hStack.appendChild(chartElm);
  }

  private resizeChart() {
    const chart = this.hStackDune.querySelector('[role=dune-chart]');
    (chart as LineChart)?.resize();
  }

  async init() {
    this.isReadyCallbackQueued = true;
    super.init();
    this.classList.add(duneChartStyle);
    if (this.tag?.theme === 'dark') {
      this.classList.add('dune-chart--dark');
    }
    await this.getDashboardData();
    const chartName = this.getAttribute('chartName', true);
    if (chartName) {
      this.setData({ chartName });
    }
    this.isReadyCallbackQueued = false;
    this.executeReadyCallback();
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.resizeChart();
      }, 300);
    });
  }

  render() {
    return (
      <i-hstack id="hStackDune" gap={20} wrap="wrap" verticalAlignment="center" class={containerStyle} />
    )
  }
}