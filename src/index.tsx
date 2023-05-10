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
  LineChart,
  VStack
} from '@ijstech/components';
import { IDuneConfig, IDunePieChart, IVisualizationWidgets, IDuneDefaultChart, IDuneCounter, IDuneInfo, IDuneTable } from './global/index';
import { containerStyle, duneStyle } from './index.css';
import { dashboards, queryIdData } from './dummy/index';
import { DuneDefaultChart, DunePieChart } from './charts/index';
import DuneCounter from './counter/index';
import DuneTable from './table/index';
import {} from '@ijstech/eth-contract'
import {} from '@ijstech/eth-wallet'
import ScomDappContainer from '@scom/scom-dapp-container'

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
export default class ScomDune extends Module {
  private vStackDune: VStack;
  private dashboard: IVisualizationWidgets[] = [];
  private duneData: IDunePieChart | IDuneDefaultChart | IDuneCounter | IDuneTable;
  private dappContainer: ScomDappContainer;

  private _oldData: IDuneConfig = { visualizationName: '' };
  private _data: IDuneConfig = { visualizationName: '' };
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

  get showFooter() {
    return this._data.showFooter ?? true
  }
  set showFooter(value: boolean) {
    this._data.showFooter = value
    if (this.dappContainer) this.dappContainer.showFooter = this.showFooter;
  }

  get showHeader() {
    return this._data.showHeader ?? true
  }
  set showHeader(value: boolean) {
    this._data.showHeader = value
    if (this.dappContainer) this.dappContainer.showHeader = this.showHeader;
  }

  private getData() {
    return this._data;
  }

  private async setData(data: IDuneConfig) {
    this._oldData = this._data;
    this._data = data;
    this.updateDuneData();
  }

  private getTag() {
    return this.tag;
  }

  private async setTag(value: any) {
    const newValue = value || {};
    for (let prop in newValue) {
      if (newValue.hasOwnProperty(prop)) {
        this.tag[prop] = newValue[prop];
      }
    }
    this.width = this.tag.width || 700;
    if (this.tag.theme === 'dark') {
      this.classList.add('dune-dark--theme');
    } else {
      this.classList.remove('dune-dark--theme');
    }
    this.onUpdateBlock();
  }

  // getConfigSchema() {
  //   return this.getThemeSchema();
  // }

  // onConfigSave(config: any) {
  //   this.tag = config;
  //   this.onUpdateBlock();
  // }

  // async edit() {
  //   // this.vStackDune.visible = false
  // }

  // async confirm() {
  //   this.onUpdateBlock();
  //   // this.vStackDune.visible = true
  // }

  // async discard() {
  //   // this.vStackDune.visible = true
  // }

  // async config() { }

  private getPropertiesSchema(readOnly?: boolean) {
    const propertiesSchema = {
      type: 'object',
      properties: {
        visualizationName: {
          type: 'string',
          enum: [
            '[Chart] Ethereum Beacon Chain Deposits Entity',
            '[Counter] ETH deposited (Ethereum Beacon Chain Deposits)',
            '[Table] Ethereum Beacon Chain Deposits Entity',
            '[Table] [Rewards] Top ETH withdraw recipients after Shanghai Unlock',
            '[Table] [Full withdraw] Top ETH withdraw recipients after Shanghai Unlock',
            '[Chart] Chart (ETH Staked - Cumulative)',
            '[Chart] Liquid Staking validators - All',
            '[Chart] ETH withdrawals cumsum (ETH Withdrawals after Shanghai Unlock)',
            '[Chart] Validators (ETH Withdrawals after Shanghai Unlock)',
            '[Chart] ETH withdrawals (ETH Withdrawals after Shanghai Unlock)',
            '[Chart] ETH price (ETH Withdrawals after Shanghai Unlock vs ETH price)',
            '[Chart] Validators and ETH price (ETH Withdrawals after Shanghai Unlock vs ETH price)',
            '[Chart] ETH withdrawals (ETH Withdrawals after Shanghai Unlock vs ETH price)',
            '[Chart] $RDNT Price Chart (RDNT Price Chart on Arbitrum and BSC)',
            '[Chart] Reserve Cumulative Value (Radiant Capital Reserve Markets (Weekly % change))',
            '[Chart] RDNT/WETH LP Staked Supply (Radiant Capital Pool2 Staking LP)',
            '[Chart] Holders OverTime (RDNT and RDNT V2 Holders Overtime)'
          ],
          required: true
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

  private _getActions(propertiesSchema: IDataSchema, themeSchema: IDataSchema) {
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
              this.oldTag = JSON.parse(JSON.stringify(this.tag));
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

  getConfigurators() {
    return [
      {
        name: 'Builder Configurator',
        target: 'Builders',
        getActions: () => {
          return this._getActions(this.getPropertiesSchema(), this.getThemeSchema());
        },
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      },
      {
        name: 'Emdedder Configurator',
        target: 'Embedders',
        getActions: () => {
          return this._getActions(this.getPropertiesSchema(true), this.getThemeSchema(true))
        },
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      }
    ]
  }

  private onUpdateBlock() {
    if (this._data) {
      switch (this.duneData?.type) {
        case 'chart':
          this.renderChart();
          break;
        case 'counter':
          this.renderCounter();
          break;
        case 'table':
          this.renderTable();
          break;
        default:
          this.vStackDune?.clearInnerHTML();
      }
    }
  }

  private async getDashboardData() {
    const _dashboard = dashboards;
    if (_dashboard?.dashboards?.length && _dashboard.dashboards[0].visualization_widgets) {
      this.dashboard = _dashboard.dashboards[0].visualization_widgets;
    } else {
      this.dashboard = [];
    }
  }

  private async updateDuneData() {
    if (this.dappContainer) {
      this.dappContainer.showHeader = this.showHeader;
      this.dappContainer.showFooter = this.showFooter;
    }
    if (this._data?.visualizationName) {
      // TODO - fetch data
      const prefixRegex = /^\[[^\]]+\]\s+/;
      const visualizationName = this._data.visualizationName.replace(prefixRegex, '');
      const visualizationType = this._data.visualizationName.match(prefixRegex)[0].trim().toLowerCase().slice(1, -1);
      const duneInfo = this.dashboard.find(v => {
        const { name, query_details, type } = v.visualization;
        if (type !== visualizationType) return false;
        const subName = query_details.name;
        let fullName = name;
        if (fullName && subName) {
          fullName = `${fullName} (${subName})`;
        } else if (subName) {
          fullName = subName;
        }
        if (type === 'table' && query_details.description) {
          fullName = `[${query_details.description}] ${fullName}`;
        }
        return fullName === visualizationName;
      });

      if (duneInfo) {
        const { options, name, query_details, type } = duneInfo.visualization;
        const duneData = queryIdData[query_details.query_id];
        const duneOpt = {
          options,
          name,
          type,
          subName: query_details.name,
          info: query_details.user || query_details.team,
          description: query_details.description,
          chartData: type === 'chart' ? duneData : undefined,
          counterData: type === 'counter' ? duneData : undefined,
          tableData: type === 'table' ? duneData : undefined
        }
        this.duneData = duneOpt as IDunePieChart | IDuneDefaultChart | IDuneCounter;
      } else {
        this.duneData = null;
      }
    } else {
      this.duneData = null;
    }
    this.onUpdateBlock();
  }

  private renderDuneUI(duneInfo: IDuneInfo) {
    this.vStackDune.clearInnerHTML();
    const { name, subName, info } = duneInfo;
    const hStack = new HStack(this.vStackDune, {
      gap: 10,
      width: '100%',
      maxWidth: '100%',
      margin: { left: 'auto', right: 'auto' },
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
    return hStack;
  }

  private async renderCounter() {
    this.vStackDune.clearInnerHTML();
    if (this.duneData) {
      this.height = this.tag?.height || 200;
      const data = this.duneData as IDuneCounter;
      const hStack = this.renderDuneUI(data);
      const theme = this.duneData.theme;
      if (theme !== 'dark') {
        this.vStackDune.background = { color: '#FDF4F5' };
      }
      const counterElm = new DuneCounter(undefined, {
        width: '100%',
        height: `calc(100% - ${hStack.offsetHeight + 30}px)`,
        data
      });
      this.vStackDune.clearInnerHTML();
      this.vStackDune.appendChild(hStack);
      this.vStackDune.appendChild(counterElm);
    }
  }

  private async renderTable() {
    this.vStackDune.clearInnerHTML();
    this.vStackDune.background = { color: 'transparent' };
    if (this.duneData) {
      this.height = this.tag?.height || 500;
      const data = this.duneData as IDuneTable;
      const hStack = this.renderDuneUI(data);
      let _offset = hStack.offsetHeight;
      if (data.description) {
        const lb = new Label(hStack, {
          caption: data.description,
          width: '100%',
          font: { size: '12px' }
        });
        lb.style.fontStyle = 'italic';
        _offset += (lb.offsetHeight - 5);
      }
      const tableElm = new DuneTable(undefined, {
        width: '100%',
        height: `calc(100% - ${_offset + 30}px)`,
        data
      });
      this.vStackDune.clearInnerHTML();
      this.vStackDune.appendChild(hStack);
      this.vStackDune.appendChild(tableElm);
    }
  }

  private async renderChart() {
    this.vStackDune.clearInnerHTML();
    this.vStackDune.background = { color: 'transparent' };
    if (this.duneData) {
      this.height = this.tag?.height || 500;
      this.dappContainer.height = this.height;
      const data = this.duneData as IDunePieChart | IDuneDefaultChart;
      const hStack = this.renderDuneUI(data);
      const { height, theme } = this.tag || {};
      let chartElm: DunePieChart | DuneDefaultChart;
      if (data.options.globalSeriesType === 'pie') {
        chartElm = new DunePieChart(undefined, {
          width: '100%',
          height: `calc(100% - ${hStack.offsetHeight + 30}px)`,
          data: {
            ...data,
            theme
          } as IDunePieChart
        });
      } else {
        chartElm = new DuneDefaultChart(undefined, {
          width: '100%',
          height: `calc(100% - ${hStack.offsetHeight + 30}px)`,
          data: {
            ...data,
            theme
          } as IDuneDefaultChart
        });
      }
      this.vStackDune.clearInnerHTML();
      this.vStackDune.appendChild(hStack);
      this.vStackDune.appendChild(chartElm);
    }
  }

  private resizeDune() {
    switch (this.duneData?.type) {
      case 'chart':
        const chart = this.vStackDune.querySelector('[role=dune-chart]');
        (chart as LineChart)?.resize();
        break;
      case 'counter':
        this.renderCounter();
        break;
      case 'table':
        this.renderTable();
        break;
      default:
        this.vStackDune?.clearInnerHTML();
    }
  }

  async init() {
    this.isReadyCallbackQueued = true;
    super.init();
    this.classList.add(duneStyle);
    if (this.tag?.theme === 'dark') {
      this.classList.add('dune-dark--theme');
    }
    this.width = this.tag.width || 700;
    this.dappContainer.width = this.width;
    this.maxWidth = '100%';
    this.vStackDune.style.boxShadow = 'rgba(0, 0, 0, 0.16) 0px 1px 4px';
    await this.getDashboardData();
    const visualizationName = this.getAttribute('visualizationName', true);
    if (visualizationName) {
      this.setData({ visualizationName });
    }
    this.showHeader = this.getAttribute('showHeader', true, true);
    this.showFooter = this.getAttribute('showFooter', true, true);
    this.isReadyCallbackQueued = false;
    this.executeReadyCallback();
    window.addEventListener('resize', () => {
      setTimeout(() => {
        this.resizeDune();
      }, 300);
    });
  }

  render() {
    return (
      <i-scom-dapp-container id="dappContainer" showWalletNetwork={false} display="flex" height="100%" width="100%">
        <i-vstack
          id="vStackDune"
          gap={20}
          height="100%"
          padding={{ top: 10, bottom: 10, left: 10, right: 10 }}
          class={containerStyle}
        />
      </i-scom-dapp-container>
    )
  }
}