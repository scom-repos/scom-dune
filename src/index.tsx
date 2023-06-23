import {
  Module,
  customModule,
  ControlElement,
  customElements,
  Container,
  IDataSchema,
  VStack,
  Styles,
  Panel,
  Modal,
  Button
} from '@ijstech/components';
import { IDuneConfig, getComponent } from './global/index';
import { containerStyle, duneStyle } from './index.css';
import dataJson from './data.json';
import ConfiguratorSettings from '@scom/scom-configurator-settings';

const Theme = Styles.Theme.ThemeVars;

interface ScomDuneElement extends ControlElement, IDuneConfig {

}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-scom-dune']: ScomDuneElement;
    }
  }
}

@customModule
@customElements('i-scom-dune')
export default class ScomDune extends Module {
  private vStackDune: VStack;
  private mdConfig: Modal;
  private pnlConfig: Panel;

  private _data: IDuneConfig = { componentId: 0 };
  tag: any = {};
  defaultEdit: boolean = true;
  readonly onConfirm: () => Promise<void>;
  readonly onDiscard: () => Promise<void>;
  readonly onEdit: () => Promise<void>;

  static async create(options?: ScomDuneElement, parent?: Container) {
    let self = new this(parent, options);
    await self.ready();
    return self;
  }

  constructor(parent?: Container, options?: ScomDuneElement) {
    super(parent, options);
  }

  get showFooter() {
    return this._data.showFooter ?? true
  }
  set showFooter(value: boolean) {
    this._data.showFooter = value
    // if (this.dappContainer) this.dappContainer.showFooter = this.showFooter;
  }

  get showHeader() {
    return this._data.showHeader ?? true
  }
  set showHeader(value: boolean) {
    this._data.showHeader = value
    // if (this.dappContainer) this.dappContainer.showHeader = this.showHeader;
  }

  get existingCharts() {
    const data = dataJson;
    return data.map(v => {
      return {
        title: `${v.title} ${v.description ? `(${v.description})` : ''}`,
        id: v.id
      }
    });
  }

  private getData() {
    return this._data;
  }

  private async setData(data: IDuneConfig) {
    this._data = data;
    await this.updateDuneData();
  }

  private getTag() {
    return this.tag;
  }

  private async setTag(value: any, newTag?: boolean) {
    if (newTag) {
      this.tag = {};
    }
    const newValue = value || {};
    for (let prop in newValue) {
      if (newValue.hasOwnProperty(prop)) {
        this.tag[prop] = newValue[prop];
      }
    }
    this.width = this.tag.width || 700;
    // this.dappContainer.width = this.width;
    // this.dappContainer.maxWidth = '100%';
    // const containerBody = this.dappContainer.querySelector('dapp-container-body') as Panel;
    // if (containerBody) {
    //   containerBody.width = this.width;
    //   containerBody.maxWidth = '100%';
    // }
    this.onUpdateBlock();
  }

  private getPropertiesSchema() {
    const propertiesSchema: any = {
      type: 'object',
      properties: {
        componentId: {
          type: 'number',
          oneOf: this.existingCharts,
          required: true
        }
      }
    }
    return propertiesSchema;
  }

  private getThemeSchema() {
    const themeSchema = {
      type: 'object',
      properties: {
        // darkShadow: {
        //   type: 'boolean'
        // },
        fontColor: {
          type: 'string',
          format: 'color'
        },
        backgroundColor: {
          type: 'string',
          format: 'color'
        },
        // width: {
        //   type: 'string'
        // },
        height: {
          type: 'string'
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
          let _oldData: any = { componentId: -1 };
          return {
            execute: async () => {
              _oldData = { ...this._data };
              if (userInputData?.componentId !== undefined) this._data.componentId = userInputData.componentId;
              if (builder?.setData) builder.setData(userInputData);
              this.setData(this._data);
            },
            undo: () => {
              if (builder?.setData) builder.setData(_oldData);
              this.setData(_oldData);
            },
            redo: () => { }
          }
        },
        isReplacement: true,
        customUI: {
          render: (data?: any, onReplace?: (data: any) => void) => {
            const vstack = new VStack();
            const config = new ConfiguratorSettings();
            config.data = dataJson;
            if (this._data.options) {
              config.showDetail({ properties: { ...this._data }, id: this._data.componentId, tag: { ...this.tag } });
            } else if (this.tag) {
              config.parentTags = { ...this.tag };
            }
            config.onSaveConfigData = (configData) => {
              if (configData && onReplace) {
                const { path } = configData;
                onReplace({
                  ...configData,
                  module: {
                    name: 'Dune Blocks',
                    path,
                    category: 'charts'
                  }
                });
              }
            }
            vstack.append(config);
            return vstack;
          }
        },
        userInputDataSchema: propertiesSchema,
      }
    ]
    if (themeSchema) {
      actions.push({
        name: 'Theme Settings',
        icon: 'palette',
        command: (builder: any, userInputData: any) => {
          let oldTag = {};
          return {
            execute: async () => {
              if (!userInputData) return;
              oldTag = { ...this.tag }
              if (builder?.setTag) builder.setTag(userInputData);
              else this.setTag(userInputData);
            },
            undo: () => {
              if (!userInputData) return;
              this.tag = JSON.parse(JSON.stringify(oldTag));
              if (builder?.setTag) builder.setTag(oldTag);
              else this.setTag(oldTag);
            },
            redo: () => { }
          }
        },
        userInputDataSchema: themeSchema
      } as any);
    }
    return actions
  }

  saveConfigData(data: any, tag: any) {
    if (data) {
      this.setData(data);
    }
    if (tag) {
      this.setTag(tag, true);
    }
  }

  getConfigurators() {
    const self = this;
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
          return this._getActions(this.getPropertiesSchema(), this.getThemeSchema())
        },
        getLinkParams: () => {
          const data = this._data || {};
          return {
            data: window.btoa(JSON.stringify(data))
          }
        },
        setLinkParams: async (params: any) => {
          if (params.data) {
            const utf8String = decodeURIComponent(params.data);
            const decodedString = window.atob(utf8String);
            const newData = JSON.parse(decodedString);
            let resultingData = {
              ...self._data,
              ...newData
            };
            await this.setData(resultingData);
          }
        },
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      }
    ]
  }

  private updateStyle(name: string, value: any) {
    value ? this.style.setProperty(name, value) : this.style.removeProperty(name);
  }

  private updateTheme() {
    this.updateStyle('--text-primary', this.tag?.fontColor);
    this.updateStyle('--background-main', this.tag?.backgroundColor);
  }

  private onUpdateBlock() {
    const containerModule = this.vStackDune.firstChild as any;
    if (containerModule?.setTag) {
      containerModule.setTag(this.tag);
    }
    this.updateTheme();
  }

  private async updateDuneData() {
    // if (this.dappContainer) {
    //   this.dappContainer.showHeader = this.showHeader;
    //   this.dappContainer.showFooter = this.showFooter;
    // }
    this.vStackDune.clearInnerHTML();
    const componentId = Number(this._data?.componentId);
    if (!isNaN(componentId) && componentId >= 0) {
      const duneChart = dataJson.find(v => v.id === this._data.componentId);
      const containerModule: any = await getComponent(duneChart.path);
      this.vStackDune.appendChild(containerModule);
      await containerModule.ready();
      if (containerModule?.getConfigurators) {
        const configurator = containerModule.getConfigurators().find((configurator: any) => configurator.target === "Builders");
        if (configurator?.setData) {
          await configurator.setData(this._data || duneChart.properties);
        }
        const tag = this.tag || (duneChart as any).tag;
        if (configurator?.setTag && tag) {
          await configurator.setTag(tag);
        }
      }
    } else {
      this.vStackDune.appendChild(
        <i-vstack
          gap={20}
          horizontalAlignment="center"
          verticalAlignment="center"
          height={100}
          maxHeight="100%"
          onClick={this.showConfig}
          class="pointer"
        >
          <i-label caption="Dune Blocks" font={{ size: '20px' }} />
          <i-icon
            name="plus"
            fill={Theme.colors.primary.contrastText}
            width={36}
            height={36}
          />
        </i-vstack>
      );
    }
    this.onUpdateBlock();
  }

  private showConfig = () => {
    const ideToolbar = this.closest('ide-toolbar');
    if (ideToolbar) {
      const btnSettings = ideToolbar.querySelector('#toolsStack')?.querySelector('#toolbar')?.querySelector('[tool-name="Settings"]') as Button;
      if (btnSettings) {
        btnSettings.click();
        return;
      }
    }
    if (!this.pnlConfig.hasChildNodes()) {
      const config = new ConfiguratorSettings();
      config.direction = true;
      config.data = dataJson;
      config.onSaveConfigData = (configData) => {
        const { tag, properties } = configData || {};
        if (tag) this.setTag(tag, true);
        if (properties) this.setData(properties);
        this.mdConfig.visible = false;
        this.pnlConfig.clearInnerHTML();
      }
      this.pnlConfig.appendChild(config);
    }
    this.mdConfig.visible = true;
  }

  async init() {
    this.isReadyCallbackQueued = true;
    super.init();
    this.updateTheme();
    this.classList.add(duneStyle);
    this.width = this.tag.width || 700;
    this.maxWidth = '100%';
    // this.dappContainer.width = this.width;
    // this.dappContainer.maxWidth = '100%';
    // const containerBody = this.dappContainer.querySelector('dapp-container-body') as Panel;
    // if (containerBody) {
    //   containerBody.width = this.width;
    //   containerBody.maxWidth = '100%';
    // }
    const tag = this.getAttribute('tag', true);
    if (tag) {
      this.setTag(tag);
    }
    const componentId = this.getAttribute('componentId', true, -1);
    const apiEndpoint = this.getAttribute('apiEndpoint', true);
    const options = this.getAttribute('options', true);
    this.setData({ componentId, apiEndpoint, options });
    this.showHeader = this.getAttribute('showHeader', true, true);
    this.showFooter = this.getAttribute('showFooter', true, true);
    this.isReadyCallbackQueued = false;
    this.executeReadyCallback();
  }

  render() {
    return (
      <i-panel display="flex" height="100%" width="100%">
        <i-vstack
          id="vStackDune"
          gap={20}
          height="100%"
          background={{ color: Theme.background.main }}
          padding={{ top: 10, bottom: 10, left: 10, right: 10 }}
          class={containerStyle}
        />
        <i-modal id="mdConfig" width={1000}>
          <i-panel id="pnlConfig" />
        </i-modal>
      </i-panel>
    )
  }
}