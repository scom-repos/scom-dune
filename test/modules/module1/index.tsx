import { Module, customModule, Container } from '@ijstech/components';
import ScomDune from '@scom/scom-dune';

@customModule
export default class Module1 extends Module {
    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    async init() {
        super.init();
    }

    render() {
        return <i-panel>
            <i-scom-dune url="https://dune.com/impossiblefinance/ethereum-shanghai-eth-withdraw" />
        </i-panel>
    }
}