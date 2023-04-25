import { Module, customModule, Container, ComboBox, IComboItem } from '@ijstech/components';
import ScomDune from '@scom/scom-dune';

const visualizationList = [
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
].map((v => { return { value: v, label: v } }));

@customModule
export default class Module1 extends Module {
    private scomDuneElm: ScomDune;
    private visualizationName = visualizationList[0].value;
    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    private onCbbChanged(cbb: ComboBox) {
        const name = (cbb.selectedItem as IComboItem).value;
        if (name !== this.visualizationName) {
            this.visualizationName = name;
            this.scomDuneElm.setData({ visualizationName: name });
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
                <i-label caption="Visualization Name" />
                <i-combo-box
                    width={600}
                    maxWidth="100%"
                    items={visualizationList}
                    selectedItem={visualizationList[0]}
                    onChanged={(cbb: ComboBox) => this.onCbbChanged(cbb)}
                />
            </i-hstack>
            <i-scom-dune id="scomDuneElm" margin={{ left: 'auto', right: 'auto' }} visualizationName={visualizationList[0].value} />
        </i-panel>
    }
}