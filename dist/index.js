var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define("@scom/scom-dune/global/interfaces.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-dune/global/index.ts", ["require", "exports", "@scom/scom-dune/global/interfaces.ts"], function (require, exports, interfaces_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-dune/global/index.ts'/> 
    __exportStar(interfaces_1, exports);
});
define("@scom/scom-dune/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.duneStyle = exports.containerStyle = void 0;
    exports.containerStyle = components_1.Styles.style({
        width: 'var(--layout-container-width)',
        maxWidth: 'var(--layout-container-max_width)',
        textAlign: 'var(--layout-container-text_align)',
        margin: '0 auto',
        padding: 10
    });
    exports.duneStyle = components_1.Styles.style({
        display: 'block',
        $nest: {
            '&.dune-dark--theme': {
                background: '#100c2a',
                $nest: {
                    'i-label': {
                        color: '#fff !important'
                    },
                    'i-label.text-black': {
                        color: '#000 !important'
                    },
                    'i-pagination': {
                        $nest: {
                            '.pagination a': {
                                color: '#fff !important'
                            }
                        }
                    },
                    'thead div': {
                        color: '#fff'
                    },
                    'i-table': {
                        $nest: {
                            'tr:hover td': {
                                background: '#251e60a1'
                            },
                            'thead': {
                                background: '#ff9800',
                                color: '#fff !important'
                            }
                        }
                    },
                    'i-progress .i-progress_overlay': {
                        background: '#ff9800 !important'
                    },
                    'i-progress .i-progress_wrapbar .i-progress_bar.has-bg': {
                        background: '#d0c1c15e'
                    },
                    '::-webkit-scrollbar-track': {
                        background: '#d9bba859'
                    },
                    '::-webkit-scrollbar-thumb': {
                        background: '#ff9800',
                    }
                }
            },
            'i-progress .i-progress_wrapbar': {
                borderRadius: 4
            },
            'i-input input': {
                border: 'none',
                background: 'transparent'
            },
            'i-table': {
                fontSize: '12px',
                $nest: {
                    '.i-table-container': {
                        overflowY: 'auto',
                        height: 'inherit'
                    },
                    'thead': {
                        background: 'var(--background-modal)',
                        position: 'sticky',
                        top: 0,
                        zIndex: 1
                    },
                    'tr:hover td': {
                        background: 'var(--colors-secondary-main)',
                        color: 'var(--colors-secondary-contrast_text)',
                        $nest: {
                            'i-label': {
                                color: 'var(--colors-secondary-contrast_text)'
                            }
                        }
                    }
                }
            },
            'i-pagination': {
                lineHeight: '24px',
                $nest: {
                    '.pagination a': {
                        minWidth: 30,
                        height: 25,
                        fontSize: 12,
                        padding: '0 2px'
                    },
                    '.pagination a.active': {
                        background: '#ff9800',
                        borderColor: '#ff9800'
                    }
                }
            },
            '::-webkit-scrollbar': {
                width: '5px',
                height: '5px'
            },
            '::-webkit-scrollbar-track': {
                borderRadius: '10px',
                border: '1px solid transparent',
                background: 'rgba(0, 0, 0, 0.12)'
            },
            '::-webkit-scrollbar-thumb': {
                background: 'rgba(0, 0, 0, 0.35)',
                borderRadius: '10px'
            },
            '#pnlModule': {
                height: '100%'
            }
        }
    });
});
define("@scom/scom-dune/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-dune/data.json.ts'/> 
    exports.default = [
        {
            "id": 0,
            "title": "[Counter] Ethereum Beacon Chain Deposits",
            "path": "scom-counter",
            "properties": {
                "dataSource": "Dune",
                "queryId": "2030584",
                "title": "Ethereum Beacon Chain Deposits",
                "options": {
                    "counterColName": "deposited",
                    "counterLabel": "ETH deposited"
                }
            }
        },
        {
            "id": 1,
            "title": "[Table] Ethereum Beacon Chain Deposits Entity",
            "path": "scom-table",
            "properties": {
                "dataSource": "Dune",
                "queryId": "2030664",
                "title": "Ethereum Beacon Chain Deposits Entity",
                "options": {
                    "columns": [
                        {
                            "name": "ranking",
                            "title": "Rnk"
                        },
                        {
                            "name": "entity",
                            "title": "Pool name"
                        },
                        {
                            "name": "eth_deposited",
                            "type": "progressbar",
                            "title": "ETH deposited",
                            "numberFormat": "0,000."
                        },
                        {
                            "name": "validators",
                            "title": "Validators",
                            "numberFormat": "0,000"
                        },
                        {
                            "name": "marketshare",
                            "title": "Share",
                            "numberFormat": "0,000.00%"
                        }
                    ]
                }
            }
        },
        // {
        //   "id": 2,
        //   "title": "[Table] Top ETH withdraw recipients after Shanghai Unlock",
        //   "description": "Reward",
        //   "path": "scom-table",
        //   "properties": {
        //     "dataSource": "Dune",
        //     "queryId": "2377402",
        //     "title": "Top ETH withdraw recipients after Shanghai Unlock",
        //     "description": "Reward",
        //     "options": {
        //       "columns": [
        //         {
        //           "name": "address",
        //           "title": "ETH receivers"
        //         },
        //         {
        //           "name": "validators",
        //           "title": "Validators",
        //           "numberFormat": "0,000.ma"
        //         },
        //         {
        //           "name": "ETH",
        //           "title": "ETH received",
        //           "numberFormat": "0,000.ma"
        //         }
        //       ]
        //     }
        //   }
        // },
        // {
        //   "id": 3,
        //   "type": "table",
        //   "title": "[Table] Top ETH withdraw recipients after Shanghai Unlock",
        //   "description": "Full withdraw",
        //   "path": "scom-table",
        //   "properties": {
        //     "dataSource": "Dune",
        //     "queryId": "2377304",
        //     "title": "Top ETH withdraw recipients after Shanghai Unlock",
        //     "description": "Full withdraw",
        //     "options": {
        //       "columns": [
        //         {
        //           "name": "address",
        //           "title": "ETH receivers"
        //         },
        //         {
        //           "name": "validators",
        //           "title": "Validators",
        //           "numberFormat": "0,000.ma"
        //         },
        //         {
        //           "name": "ETH",
        //           "title": "ETH received",
        //           "numberFormat": "0,000.ma"
        //         }
        //       ]
        //     }
        //   }
        // },
        {
            "id": 4,
            "title": "[Pie Chart] Ethereum Beacon Chain Deposits Entity",
            "path": "scom-pie-chart",
            "properties": {
                "dataSource": "Dune",
                "queryId": "2030664",
                "title": "Ethereum Beacon Chain Deposits Entity",
                "options": {
                    "xColumn": "entity",
                    "yColumn": "eth_deposited",
                    "serieName": "ETH deposited",
                    "numberFormat": "0,000.00ma",
                    "showDataLabels": true,
                    "valuesOptions": [
                        { "name": "Lido", "color": "#e58f8f" },
                        { "name": "Other", "color": "#a9a4a4" },
                        { "name": "Kraken", "color": "#0077ff" },
                        { "name": "Binance", "color": "#f4f000" },
                        { "name": "Coinbase", "color": "#0c22e3" }
                    ]
                }
            }
        },
        // {
        //   "id": 5,
        //   "title": "[Pie Chart] Liquid Staking validators - All",
        //   "path": "scom-pie-chart",
        //   "properties": {
        //     "dataSource": "Dune",  
        //     "queryId": "2360788",
        //     "title": "Liquid Staking validators - All",
        //     "options": {
        //       "xColumn": "depositor_entity_category",
        //       "yColumn": "staked",
        //       "serieName": "ETH Staked",
        //       "numberFormat": "0,000",
        //       "showDataLabels": true,
        //       "valuesOptions": [
        //         { "name": "CEX", "color": "#f00c0c" },
        //         { "name": "Other", "color": "#000000" },
        //         { "name": "Others", "color": "#000000" },
        //         { "name": "Staking Pools", "color": "#3995ce" },
        //         { "name": "Liquid Staking", "color": "#c1ba2a" }
        //       ]
        //     }
        //   }
        // },
        {
            "id": 6,
            "title": "[Bar Chart] ETH Withdrawals after Shanghai Unlock",
            "path": "scom-bar-chart",
            "properties": {
                "dataSource": "Dune",
                "queryId": "2360815",
                "title": "ETH Withdrawals after Shanghai Unlock",
                "options": {
                    "xColumn": {
                        "key": "time",
                        "type": "time"
                    },
                    "yColumns": [
                        "ETH"
                    ],
                    "groupBy": "category",
                    "stacking": true,
                    "legend": {
                        "show": true
                    },
                    "seriesOptions": [
                        {
                            "key": "Reward",
                            "color": "#378944"
                        },
                        {
                            "key": "Full Withdraw",
                            "color": "#b03030"
                        }
                    ],
                    "xAxis": {
                        "title": "Date",
                        "tickFormat": "MMM DD"
                    },
                    "yAxis": {
                        "title": "ETH",
                        "position": "left",
                        "labelFormat": "0,000.ma"
                    }
                }
            }
        },
        {
            "id": 7,
            "title": "[Line Chart] ETH Withdrawals after Shanghai Unlock vs ETH price",
            "path": "scom-line-chart",
            "properties": {
                "dataSource": "Dune",
                "queryId": "2360905",
                "title": "ETH Withdrawals after Shanghai Unlock vs ETH price",
                "options": {
                    "xColumn": {
                        "key": "time",
                        "type": "time"
                    },
                    "yColumns": [
                        "eth_price"
                    ],
                    "seriesOptions": [
                        {
                            "key": "eth_price",
                            "title": "ETH Price",
                            "color": "#000"
                        }
                    ],
                    "xAxis": {
                        "title": "Date",
                        "tickFormat": "MMM DD"
                    },
                    "yAxis": {
                        "labelFormat": "$0,000.00",
                        "position": "left"
                    }
                }
            }
        },
        {
            "id": 8,
            "title": "[Area Chart] LP Value Overtime",
            "description": "RDNT/WETH LP Value",
            "path": "scom-area-chart",
            "properties": {
                "dataSource": "Dune",
                "queryId": "284022",
                "title": "LP Value Overtime",
                "description": "RDNT/WETH LP Value",
                "options": {
                    "xColumn": {
                        "key": "time",
                        "type": "time"
                    },
                    "yColumns": [
                        "rdnt_value",
                        "weth_value"
                    ],
                    "stacking": true,
                    "legend": {
                        "show": true
                    },
                    "seriesOptions": [
                        {
                            "key": "rdnt_value",
                            "title": "RDNT",
                            "color": "#2793cb"
                        },
                        {
                            "key": "weth_value",
                            "title": "WETH",
                            "color": "#aaace6"
                        }
                    ],
                    "xAxis": {
                        "tickFormat": "MMM YYYY"
                    },
                    "yAxis": {
                        "labelFormat": "$0[,].00",
                        "tickerFormat": "$0[,].00ma",
                        "position": "left"
                    }
                }
            }
        },
        // {
        //   "id": 9,
        //   "title": "[Area Chart] ETH Withdrawals after Shanghai Unlock",
        //   "description": "ETH withdrawals cumsum",
        //   "path": "scom-area-chart",
        //   "properties": {
        //     "dataSource": "Dune",
        //     "queryId": "2360815",
        //     "title": "ETH Withdrawals after Shanghai Unlock",
        //     "description": "ETH withdrawals cumsum",
        //     "options": {
        //       "xColumn": {
        //         "key": "time",
        //         "type": "time"
        //       },
        //       "yColumns": [
        //         "ETH_cum"
        //       ],
        //       "stacking": true,
        //       "legend": {
        //         "show": true
        //       },
        //       "seriesOptions": [
        //         {
        //           "key": "ETH_cum",
        //           "title": "ETH total",
        //           "color": "#000000"
        //         }
        //       ],
        //       "xAxis": {
        //         "tickFormat": "MMM YYYY"
        //       },
        //       "yAxis": {
        //         "labelFormat": "$0[,].00",
        //         "tickerFormat": "$0[,].00ma",
        //         "position": "left"
        //       }
        //     }
        //   }
        // },
        // {
        //   "id": 10,
        //   "title": "[Area Chart] RDNT/WETH LP Staked Supply",
        //   "description": "Radiant Capital Pool2 Staking LP",
        //   "path": "scom-area-chart",
        //   "properties": {
        //     "dataSource": "Dune",
        //     "queryId": "283918",
        //     "title": "RDNT/WETH LP Staked Supply",
        //     "description": "Radiant Capital Pool2 Staking LP",
        //     "options": {
        //       "xColumn": {
        //         "key": "time",
        //         "type": "time"
        //       },
        //       "yColumns": [
        //         "masterchef_pool",
        //         "non_masterchef_pool"
        //       ],
        //       "stacking": true,
        //       "percentage": true,
        //       "legend": {
        //         "show": true
        //       },
        //       "seriesOptions": [
        //         {
        //           "key": "masterchef_pool",
        //           "title": "Staked",
        //           "color": "#2793cb"
        //         },
        //         {
        //           "key": "non_masterchef_pool",
        //           "title": "Unstaked",
        //           "color": "#ff0000"
        //         }
        //       ],
        //       "xAxis": {
        //         "tickFormat": "MMM YYYY"
        //       }
        //     }
        //   }
        // },
        {
            "id": 11,
            "title": "[Scatter Chart] ETH Withdrawals after Shanghai Unlock vs ETH price",
            "path": "scom-scatter-chart",
            "properties": {
                "dataSource": "Dune",
                "queryId": "2360905",
                "title": "ETH Withdrawals after Shanghai Unlock vs ETH price",
                "options": {
                    "xColumn": {
                        "key": "time",
                        "type": "time"
                    },
                    "yColumns": [
                        "eth_price"
                    ],
                    "seriesOptions": [
                        {
                            "key": "eth_price",
                            "title": "ETH Price"
                        }
                    ],
                    "xAxis": {
                        "title": "Date",
                        "tickFormat": "MMM DD"
                    },
                    "yAxis": {
                        "labelFormat": "$0[].0a",
                        "position": "left"
                    }
                }
            }
        },
        {
            "id": 12,
            "title": "[Mixed Chart] Reserve Cumulative Value",
            "path": "scom-mixed-chart",
            "properties": {
                "dataSource": "Dune",
                "queryId": "1333833",
                "title": "Reserve Cumulative Value",
                "description": "Radiant Capital Reserve Markets (Weekly % change)",
                "options": {
                    "xColumn": {
                        "key": "time",
                        "type": "time"
                    },
                    "yColumns": [
                        "cumulative_dai",
                        "cumulative_usdc",
                        "cumulative_usdt",
                        "cumulative_wbtc",
                        "cumulative_weth",
                        "cumulative_tokens_value",
                        "cumulative_diff"
                    ],
                    "globalSeriesType": "area",
                    "stacking": true,
                    "seriesOptions": [
                        {
                            "key": "cumulative_dai",
                            "title": "DAI",
                            "type": "area",
                            "yAxis": "left"
                        },
                        {
                            "key": "cumulative_usdc",
                            "title": "USDC",
                            "type": "area",
                            "yAxis": "left"
                        },
                        {
                            "key": "cumulative_usdt",
                            "title": "USDT",
                            "type": "area",
                            "yAxis": "left"
                        },
                        {
                            "key": "cumulative_wbtc",
                            "title": "WBTC",
                            "type": "area",
                            "yAxis": "left"
                        },
                        {
                            "key": "cumulative_weth",
                            "title": "WETH",
                            "type": "area",
                            "yAxis": "left"
                        },
                        {
                            "key": "cumulative_tokens_value",
                            "title": "Total",
                            "type": "scatter",
                            "yAxis": "left"
                        },
                        {
                            "key": "cumulative_diff",
                            "title": "% Change",
                            "type": "line",
                            "yAxis": "right",
                            "color": "#ff0000"
                        }
                    ],
                    "xAxis": {
                        "title": "Date",
                        "tickFormat": "MMM DD"
                    },
                    "leftYAxis": {
                        "labelFormat": "$0[].0a"
                    },
                    "rightYAxis": {
                        "tickFormat": "0[].0%",
                        "labelFormat": "0[].0%"
                    }
                }
            }
        },
        // {
        //   "id": 13,
        //   "title": "[Mixed Chart] $RDNT Price Chart",
        //   "description": "RDNT Price Chart on Arbitrum and BSC",
        //   "path": "scom-mixed-chart",
        //   "properties": {
        //     "dataSource": "Dune",    
        //     "queryId": "1154848",
        //     "title": "$RDNT Price Chart",
        //     "description": "RDNT Price Chart on Arbitrum and BSC",
        //     "options": {
        //       "xColumn": {
        //         "key": "time",
        //         "type": "time"
        //       },
        //       "yColumns": [
        //         "rdnt_price",
        //         "red_volume",
        //         "green_volume"
        //       ],
        //       "globalSeriesType": "area",
        //       "seriesOptions": [
        //         {
        //           "key": "rdnt_price",
        //           "title": "Price",
        //           "type": "area",
        //           "color": "#aaaacd",
        //           "yAxis": "left",
        //           "zIndex": 0
        //         },
        //         {
        //           "key": "red_volume",
        //           "title": "$USD Volume",
        //           "type": "bar",
        //           "color": "#f51818",
        //           "yAxis": "right",
        //           "zIndex": 1
        //         },
        //         {
        //           "key": "green_volume",
        //           "title": "$USD Volume",
        //           "type": "bar",
        //           "color": "#4fa0e0",
        //           "yAxis": "right",
        //           "zIndex": 2
        //         }
        //       ],
        //       "xAxis": {
        //         "title": "Date",
        //         "tickFormat": "MMM DD"
        //       },
        //       "leftYAxis": {
        //         "tickFormat": "$0[].000",
        //         "labelFormat": "$0[.,].00"
        //       },
        //       "rightYAxis": {
        //         "tickFormat": "$0[].00a",
        //         "labelFormat": "$0[.,].00"
        //       }
        //     }
        //   }
        // },
        // {
        //   "id": 14,
        //   "title": "[Mixed Chart] Holders OverTime",
        //   "description": "RDNT and RDNT V2 Holders Overtime",
        //   "path": "scom-mixed-chart",
        //   "properties": {
        //     "dataSource": "Dune",    
        //     "queryId": "947867",
        //     "title": "Holders OverTime",
        //     "description": "RDNT and RDNT V2 Holders Overtime",
        //     "options": {
        //       "xColumn": {
        //         "key": "time",
        //         "type": "time"
        //       },
        //       "yColumns": [
        //         "red_change",
        //         "green_change",
        //         "total_holders"
        //       ],
        //       "globalSeriesType": "line",
        //       "seriesOptions": [
        //         {
        //           "key": "red_change",
        //           "title": "Change",
        //           "type": "bar",
        //           "color": "#ff0000",
        //           "yAxis": "right",
        //           "zIndex": 2
        //         },
        //         {
        //           "key": "green_change",
        //           "title": "Change",
        //           "type": "bar",
        //           "color": "#00ff17",
        //           "yAxis": "right",
        //           "zIndex": 1
        //         },
        //         {
        //           "key": "total_holders",
        //           "title": "Total Holders",
        //           "type": "line",
        //           "yAxis": "left",
        //           "zIndex": 0
        //         }
        //       ],
        //       "xAxis": {
        //         "title": "Date",
        //         "tickFormat": "MMM DD"
        //       }
        //     }
        //   }
        // }
    ];
});
define("@scom/scom-dune", ["require", "exports", "@ijstech/components", "@scom/scom-dune/index.css.ts", "@scom/scom-dune/data.json.ts", "@scom/scom-configurator-settings"], function (require, exports, components_2, index_css_1, data_json_1, scom_configurator_settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_2.Styles.Theme.ThemeVars;
    let ScomDune = class ScomDune extends components_2.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        constructor(parent, options) {
            super(parent, options);
            this._data = { componentId: 0 };
            this.tag = {};
            this.showConfig = () => {
                var _a, _b;
                const ideToolbar = this.closest('ide-toolbar');
                if (ideToolbar) {
                    const btnSettings = (_b = (_a = ideToolbar.querySelector('#toolsStack')) === null || _a === void 0 ? void 0 : _a.querySelector('#toolbar')) === null || _b === void 0 ? void 0 : _b.querySelector('[tool-name="Settings"]');
                    if (btnSettings) {
                        btnSettings.click();
                        return;
                    }
                }
            };
        }
        get showFooter() {
            var _a;
            return (_a = this._data.showFooter) !== null && _a !== void 0 ? _a : true;
        }
        set showFooter(value) {
            this._data.showFooter = value;
        }
        get showHeader() {
            var _a;
            return (_a = this._data.showHeader) !== null && _a !== void 0 ? _a : true;
        }
        set showHeader(value) {
            this._data.showHeader = value;
        }
        getData() {
            return this._data;
        }
        async setData(data) {
            this._data = data;
            await this.renderPlaceholder();
        }
        getTag() {
            return this.tag;
        }
        async setTag(value, newTag) {
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
        }
        _getActions() {
            const actions = [
                {
                    name: 'Settings',
                    icon: 'cog',
                    command: (builder, userInputData) => {
                        let _oldData = { componentId: -1 };
                        return {
                            execute: async () => {
                                _oldData = Object.assign({}, this._data);
                                if ((userInputData === null || userInputData === void 0 ? void 0 : userInputData.componentId) !== undefined)
                                    this._data.componentId = userInputData.componentId;
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(userInputData);
                                this.setData(this._data);
                            },
                            undo: () => {
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(_oldData);
                                this.setData(_oldData);
                            },
                            redo: () => { }
                        };
                    },
                    isReplacement: true,
                    customUI: {
                        render: (data, onReplace) => {
                            const vstack = new components_2.VStack();
                            const config = new scom_configurator_settings_1.default();
                            config.data = data_json_1.default;
                            if (this._data.options) {
                                config.showDetail({ properties: Object.assign({}, this._data), id: this._data.componentId, tag: Object.assign({}, this.tag) });
                            }
                            else if (this.tag) {
                                config.parentTags = Object.assign({}, this.tag);
                            }
                            config.onSaveConfigData = (configData) => {
                                if (configData && onReplace) {
                                    const { path } = configData;
                                    onReplace(Object.assign(Object.assign({}, configData), { module: {
                                            name: 'Dune Block',
                                            path,
                                            category: 'charts'
                                        } }));
                                }
                            };
                            vstack.append(config);
                            config.showSaveBtn = false;
                            return vstack;
                        }
                    }
                }
            ];
            return actions;
        }
        saveConfigData(data, tag) {
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
                        return this._getActions();
                    },
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                }
            ];
        }
        async renderPlaceholder() {
            this.vStackDune.clearInnerHTML();
            this.vStackDune.appendChild(this.$render("i-vstack", { gap: 20, horizontalAlignment: "center", verticalAlignment: "center", height: 100, maxHeight: "100%", onClick: this.showConfig, class: "pointer" },
                this.$render("i-label", { caption: "Dune Block", font: { size: '20px' } }),
                this.$render("i-icon", { name: "plus", fill: Theme.colors.primary.contrastText, width: 36, height: 36 })));
        }
        async init() {
            this.isReadyCallbackQueued = true;
            super.init();
            this.classList.add(index_css_1.duneStyle);
            this.width = this.tag.width || 700;
            this.maxWidth = '100%';
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
            return (this.$render("i-panel", { display: "flex", height: "100%", width: "100%" },
                this.$render("i-vstack", { id: "vStackDune", gap: 20, height: "100%", background: { color: Theme.background.main }, padding: { top: 10, bottom: 10, left: 10, right: 10 }, class: index_css_1.containerStyle }),
                this.$render("i-modal", { id: "mdConfig", width: 1000 },
                    this.$render("i-panel", { id: "pnlConfig" }))));
        }
    };
    ScomDune = __decorate([
        components_2.customModule,
        (0, components_2.customElements)('i-scom-dune')
    ], ScomDune);
    exports.default = ScomDune;
});
