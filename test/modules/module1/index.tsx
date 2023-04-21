import { Module, customModule, Container, ComboBox, IComboItem } from '@ijstech/components';
import ScomDune from '@scom/scom-dune';

const chartList = [
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
    'Holders OverTime (RDNT and RDNT V2 Holders Overtime)',
].map((v => { return { value: v, label: v } }));

@customModule
export default class Module1 extends Module {
    private scomDuneElm: ScomDune;
    private chartName = chartList[0].value;
    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    private onCbbChanged(cbb: ComboBox) {
        const name = (cbb.selectedItem as IComboItem).value;
        if (name !== this.chartName) {
            this.chartName = name;
            this.scomDuneElm.setData({ chartName: name });
        }
    }

    async init() {
        super.init();
    }

    render() {
        return <i-panel>
            <i-hstack
                gap={5}
                verticalAlignment="center"
                horizontalAlignment="center" padding={{ top: 20, bottom: 20, left: 20, right: 20 }}
                wrap="wrap"
            >
                <i-label caption="Chart Name" />
                <i-combo-box
                    width={600}
                    maxWidth="100%"
                    items={chartList}
                    selectedItem={chartList[0]}
                    onChanged={(cbb: ComboBox) => this.onCbbChanged(cbb)}
                />
            </i-hstack>
            <i-scom-dune id="scomDuneElm" margin={{ left: 'auto', right: 'auto' }} chartName={chartList[0].value} />
        </i-panel>
    }
}