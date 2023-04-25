import { Container, Control, ControlElement, HStack, Input, Label, Module, Pagination, Progress, Table, customElements, observable } from '@ijstech/components';
import { IDuneTable, formatNumberByFormat, formatNumberWithSeparators } from '../global/index';

interface IDuneTableElement extends ControlElement {
  data: IDuneTable
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['scom-dune-table']: IDuneTable;
    }
  }
}

const pageSize = 25;

@customElements('scom-dune-table')
export default class DuneTable extends Module {
  private tableElm: Table;
  private paginationElm: Pagination;
  private lbTotal: Label;
  private inputSearch: Input;

  private list: { [key: string]: string | number }[] = [];
  private _data: IDuneTable;

  @observable()
  private totalPage = 0;
  private pageNumber = 0;
  private itemStart = 0;
  private itemEnd = pageSize;

  set data(value: IDuneTable) {
    this._data = value;
    this.initTable();
  }

  get data() {
    return this._data;
  }

  private get dataListFiltered() {
    const searchVal = this.inputSearch?.value.toLowerCase();
    if (searchVal) {
      const cols = this.data?.options.columns.filter(v => !v.isHidden);
      return this.list.filter(v => {
        for (const col of cols) {
          const val = v[col.name];
          if (val?.toString().toLowerCase().includes(searchVal)) {
            return true;
          }
        }
        return false;
      });
    }
    return this.list;
  }

  private get dataListPagination() {
    return this.dataListFiltered.slice(this.itemStart, this.itemEnd) || [];
  }

  constructor(parent?: Container, options?: IDuneTableElement) {
    super(parent, options);
    if (options?.data) {
      this.data = options.data;
    }
  }

  private initTable() {
    if (!this.tableElm) return;
    const { options, tableData, theme } = this.data;
    const { data, columns } = tableData;
    let cols = [];
    const _columns = options.columns.filter(v => !v.isHidden);
    for (const column of _columns) {
      const { name, title, alignContent, type, numberFormat, coloredNegativeValues, coloredPositiveValues } = column;
      let totalValue = 0;
      if (type === 'progressbar') {
        totalValue = data.reduce((acc, cur) => {
          if (cur[name]) {
            return acc + Number(cur[name]);
          }
          return acc;
        }, 0);
      }
      const col = {
        title: title || columns[name]?.title || name,
        fieldName: name,
        textAlign: alignContent,
        onRenderCell: function (source: Control, data: any, rowData: any) {
          const isNumber = typeof data === 'number';
          const hStack = new HStack(undefined, {
            width: '100%',
            gap: 5,
            wrap: type === 'progressbar' ? undefined : 'wrap',
            verticalAlignment: 'center'
          });
          if (type === 'progressbar') {
            new Progress(hStack, {
              width: 60,
              height: 8,
              strokeWidth: 8,
              strokeColor: '#1e1870',
              percent: (data / totalValue) * 100
            });
          }
          new Label(hStack, {
            caption: isNumber && numberFormat ? formatNumberByFormat(data, numberFormat, true) :
              isNumber ? formatNumberWithSeparators(data) : data,
            font: {
              size: '12px',
              color: isNumber && data < 0 && coloredNegativeValues ? '#BD4F5A' :
                isNumber && data > 0 && coloredPositiveValues ? '#77D394' : undefined
            }
          });
          return hStack;
        }
      }
      cols.push(col);
    }
    this.list = data;
    this.tableElm.columns = cols;
    this.pageNumber = 1;
    this.lbTotal.background = { color: '#ffeceb' };
    this.inputSearch.background = { color: '#ffeceb' };
    this.lbTotal.visible = !!data.length;
    this.lbTotal.caption = `${data.length} ${data.length === 1 ? 'row' : 'rows'}`;
    this.renderTable();
  }

  private renderTable() {
    this.totalPage = Math.ceil(this.dataListFiltered.length / pageSize);
    this.paginationElm.visible = this.totalPage > 1;
    this.tableElm.data = this.dataListPagination;
  }

  private onSelectIndex() {
    this.pageNumber = this.paginationElm.currentPage;
    this.itemStart = (this.pageNumber - 1) * pageSize;
    this.itemEnd = this.itemStart + pageSize;
    this.renderTable();
  }

  private onSearch() {
    this.pageNumber = 1;
    this.renderTable();
  }

  init() {
    super.init();
    if (this.data) {
      this.initTable();
    }
  }

  render() {
    return (
      <i-panel height="inherit">
        <i-table
          id="tableElm"
          width="100%"
          height="100%"
        />
        <i-hstack gap={10} margin={{ top: 16 }} horizontalAlignment="start" verticalAlignment="center" wrap="wrap">
          <i-label
            id="lbTotal"
            class="text-black"
            padding={{ top: 4.5, bottom: 4.5, right: 8, left: 8 }}
            font={{ size: '12px', color: '#000' }}
          />
          <i-input
            id="inputSearch"
            placeholder="Search"
            width={168}
            padding={{ top: 4, bottom: 4, right: 8, left: 8 }}
            font={{ size: '12px' }}
            onChanged={this.onSearch}
          />
          <i-pagination
            id="paginationElm"
            width="auto"
            currentPage={this.pageNumber}
            totalPages={this.totalPage}
            onPageChanged={this.onSelectIndex.bind(this)}
          />
        </i-hstack>
      </i-panel>
    )
  }
}