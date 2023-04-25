import { Container, ControlElement, Label, Module, VStack, customElements } from '@ijstech/components';
import { IDuneCounter, formatNumberWithSeparators } from '../global/index';

interface IDuneCounterElement extends ControlElement {
  data: IDuneCounter
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['scom-dune-counter']: IDuneCounter;
    }
  }
};

@customElements('scom-dune-counter')
export default class DuneCounter extends Module {
  private vStackCounter: VStack;
  private _data: IDuneCounter;

  set data(value: IDuneCounter) {
    this._data = value;
    this.initCounter();
  }

  get data() {
    return this._data;
  }

  constructor(parent?: Container, options?: IDuneCounterElement) {
    super(parent, options);
    if (options?.data) {
      this.data = options.data;
    }
  }

  private formatCounter(num: number, decimals?: number) {
    return formatNumberWithSeparators(num, decimals);
  }

  private initCounter() {
    if (!this.vStackCounter) return;
    const { options, counterData, theme, name } = this.data;
    const { data } = counterData;
    const { counterColName, counterLabel, stringDecimal, stringPrefix, stringSuffix, coloredNegativeValues, coloredPositiveValues } = options;
    this.vStackCounter.clearInnerHTML();
    if (data && data.length) {
      const value = data[0][counterColName];
      const isNumber = typeof value === 'number';
      let _number = isNumber ? (Number(value) / 100) : 0;
      const lbValue = new Label(this.vStackCounter, {
        caption: `${stringPrefix || ''}${isNumber ? 0 : value}${stringSuffix || ''}`,
        font: {
          size: '32px',
          color: isNumber && value < 0 && coloredNegativeValues ? '#BD4F5A' :
            isNumber && value > 0 && coloredPositiveValues ? '#77D394' :
              `${theme === 'dark' ? '#fff' : '#1e1870'}`
        }
      });
      lbValue.wordBreak = 'break-all';
      if (isNumber) {
        const increment = Number(value) / 20;
        let interval = setInterval(() => {
          _number += increment;
          if (_number >= Number(value)) {
            _number = Number(value);
            clearInterval(interval);
          }
          lbValue.caption = `${stringPrefix || ''}${this.formatCounter(_number, stringDecimal)}${stringSuffix || ''}`
        }, 25);
      }
    }
    new Label(this.vStackCounter, {
      caption: counterLabel || name,
      font: { size: '18px', color: `${theme === 'dark' ? '#fff' : '#1e1870'}` }
    });
  }

  init() {
    super.init();
    if (this.data) {
      this.initCounter();
    }
  }

  render() {
    return (
      <i-vstack id="vStackCounter" margin={{ top: 16, bottom: 32 }} horizontalAlignment="center" width="100%" height="100%" class="text-center" />
    )
  }
}