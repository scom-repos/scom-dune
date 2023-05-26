import { Module, customModule, Container, Modal, Panel } from '@ijstech/components';
import ScomDune from '@scom/scom-dune';

@customModule
export default class Module1 extends Module {
    private scomDuneElm: ScomDune;
    private mdConfig: Modal;
    private pnlConfig: Panel;
    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    async init() {
        super.init();
        this.pnlConfig.appendChild(this.scomDuneElm.getConfigurators()[0].getActions()[0].customUI.render(() => { this.mdConfig.visible = false }));
    }

    showSettings() {
        this.mdConfig.visible = true;
    }

    render() {
        return <i-vstack gap={10} padding={{ top: 20, bottom: 20 }} verticalAlignment="center" horizontalAlignment="center">
            <i-button caption="Settings (Dune 1)" width={200} height={36} onClick={this.showSettings} font={{ color: '#fff' }} margin={{ bottom: 10 }} />
            <i-label caption="Dune 1" font={{ size: '16px', bold: true }} />
            <i-scom-dune
                id="scomDuneElm"
                margin={{ left: 'auto', right: 'auto', bottom: 20 }}
            />

            <i-label caption="Dune 2" font={{ size: '16px', bold: true }} />
            <i-scom-dune
                margin={{ left: 'auto', right: 'auto' }}
                componentId={0}
                apiEndpoint="https://api.dune.com/api/v1/query/2030584/results?api_key=GZ0R7Jim7TWLY7umXitxtiswiaD4eM7j"
                options={{
                    "title": "Ethereum Beacon Chain Deposits",
                    "counterColName": "deposited",
                    "counterLabel": "ETH deposited"
                }}
                tag={{
                    "counterNumberColor": '#b12b2b',
                    "counterLabelColor": '#f0310f'
                }}
            />
            <i-modal id="mdConfig" width={750}>
                <i-panel id="pnlConfig" />
            </i-modal>
        </i-vstack>
    }
}