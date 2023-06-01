var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
define("@scom/scom-dune/global/utils.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getComponent = exports.getChartType = exports.formatNumberWithSeparators = exports.formatNumberByFormat = exports.formatNumber = void 0;
    const formatNumber = (num, options) => {
        if (num === null)
            return '-';
        const { decimals, format, percentValues } = options || {};
        if (percentValues) {
            return `${exports.formatNumberWithSeparators(num, 2)}%`;
        }
        if (format) {
            return exports.formatNumberByFormat(num, format);
        }
        const absNum = Math.abs(num);
        if (absNum >= 1000000000) {
            return exports.formatNumberWithSeparators((num / 1000000000), decimals || 3) + 'B';
        }
        if (absNum >= 1000000) {
            return exports.formatNumberWithSeparators((num / 1000000), decimals || 3) + 'M';
        }
        if (absNum >= 1000) {
            return exports.formatNumberWithSeparators((num / 1000), decimals || 3) + 'K';
        }
        if (absNum < 0.0000001) {
            return exports.formatNumberWithSeparators(num);
        }
        if (absNum < 0.00001) {
            return exports.formatNumberWithSeparators(num, 6);
        }
        if (absNum < 0.001) {
            return exports.formatNumberWithSeparators(num, 4);
        }
        return exports.formatNumberWithSeparators(num, 2);
    };
    exports.formatNumber = formatNumber;
    const formatNumberByFormat = (num, format, separators) => {
        const decimalPlaces = format.split('.')[1] ? format.split('.').length : 0;
        if (format.includes('%')) {
            return exports.formatNumberWithSeparators((num * 100), decimalPlaces) + '%';
        }
        const currencySymbol = format.indexOf('$') !== -1 ? '$' : '';
        const roundedNum = exports.formatNumberWithSeparators(num, decimalPlaces);
        if (separators && !format.includes('.ma')) {
            return `${currencySymbol}${roundedNum}`;
        }
        const parts = roundedNum.split('.');
        const decimalPart = parts.length > 1 ? parts[1] : '';
        const integerPart = exports.formatNumber(parseInt(parts[0].replace(/,/g, '')), { decimals: decimalPart.length });
        return `${currencySymbol}${integerPart}`;
    };
    exports.formatNumberByFormat = formatNumberByFormat;
    const formatNumberWithSeparators = (value, precision) => {
        if (!value)
            value = 0;
        if (precision || precision === 0) {
            let outputStr = '';
            if (value >= 1) {
                outputStr = value.toLocaleString('en-US', { maximumFractionDigits: precision });
            }
            else {
                outputStr = value.toLocaleString('en-US', { maximumSignificantDigits: precision });
            }
            return outputStr;
        }
        return value.toLocaleString('en-US');
    };
    exports.formatNumberWithSeparators = formatNumberWithSeparators;
    const getChartType = (type, defaultType) => {
        switch (type) {
            case 'area':
                return 'line';
            case 'column':
                return 'bar';
            default:
                return type || defaultType;
        }
    };
    exports.getChartType = getChartType;
    const getComponent = async (path) => {
        components_1.application.currentModuleDir = path;
        await components_1.application.loadScript(`${path}/index.js`);
        components_1.application.currentModuleDir = '';
        const elementName = `i-${path.split('/').pop()}`;
        const element = document.createElement(elementName);
        return element;
    };
    exports.getComponent = getComponent;
});
define("@scom/scom-dune/global/index.ts", ["require", "exports", "@scom/scom-dune/global/interfaces.ts", "@scom/scom-dune/global/utils.ts"], function (require, exports, interfaces_1, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(interfaces_1, exports);
    __exportStar(utils_1, exports);
});
define("@scom/scom-dune/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.duneStyle = exports.customContainerDapp = exports.containerStyle = void 0;
    exports.containerStyle = components_2.Styles.style({
        width: 'var(--layout-container-width)',
        maxWidth: 'var(--layout-container-max_width)',
        textAlign: 'var(--layout-container-text_align)',
        margin: '0 auto',
        padding: 10
    });
    exports.customContainerDapp = components_2.Styles.style({
        '$nest': {
            '&> i-vstack > i-panel': {
                overflow: 'visible',
                $nest: {
                    '&> i-grid-layout': {
                        display: 'block'
                    }
                }
            },
            'dapp-container-body': {
                overflow: 'visible'
            }
        }
    });
    exports.duneStyle = components_2.Styles.style({
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
            "name": "libs/@scom/scom-counter",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/2030584/results?api_key=GZ0R7Jim7TWLY7umXitxtiswiaD4eM7j",
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
            "name": "libs/@scom/scom-table",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/2030664/results?api_key=GZ0R7Jim7TWLY7umXitxtiswiaD4eM7j",
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
        {
            "id": 2,
            "title": "[Table] Top ETH withdraw recipients after Shanghai Unlock",
            "description": "Reward",
            "name": "libs/@scom/scom-table",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/2377402/results?api_key=GZ0R7Jim7TWLY7umXitxtiswiaD4eM7j",
                "title": "Top ETH withdraw recipients after Shanghai Unlock",
                "description": "Reward",
                "options": {
                    "columns": [
                        {
                            "name": "address",
                            "title": "ETH receivers"
                        },
                        {
                            "name": "validators",
                            "title": "Validators",
                            "numberFormat": "0,000.ma"
                        },
                        {
                            "name": "ETH",
                            "title": "ETH received",
                            "numberFormat": "0,000.ma"
                        }
                    ]
                }
            }
        },
        {
            "id": 3,
            "type": "table",
            "title": "[Table] Top ETH withdraw recipients after Shanghai Unlock",
            "description": "Full withdraw",
            "name": "libs/@scom/scom-table",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/2377304/results?api_key=GZ0R7Jim7TWLY7umXitxtiswiaD4eM7j",
                "title": "Top ETH withdraw recipients after Shanghai Unlock",
                "description": "Full withdraw",
                "options": {
                    "columns": [
                        {
                            "name": "address",
                            "title": "ETH receivers"
                        },
                        {
                            "name": "validators",
                            "title": "Validators",
                            "numberFormat": "0,000.ma"
                        },
                        {
                            "name": "ETH",
                            "title": "ETH received",
                            "numberFormat": "0,000.ma"
                        }
                    ]
                }
            }
        },
        {
            "id": 4,
            "title": "[Pie Chart] Ethereum Beacon Chain Deposits Entity",
            "name": "libs/@scom/scom-pie-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/2030664/results?api_key=GZ0R7Jim7TWLY7umXitxtiswiaD4eM7j",
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
        {
            "id": 5,
            "title": "[Pie Chart] Liquid Staking validators - All",
            "name": "libs/@scom/scom-pie-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/2360788/results?api_key=GZ0R7Jim7TWLY7umXitxtiswiaD4eM7j",
                "title": "Liquid Staking validators - All",
                "options": {
                    "xColumn": "depositor_entity_category",
                    "yColumn": "staked",
                    "serieName": "ETH Staked",
                    "numberFormat": "0,000",
                    "showDataLabels": true,
                    "valuesOptions": [
                        { "name": "CEX", "color": "#f00c0c" },
                        { "name": "Other", "color": "#000000" },
                        { "name": "Others", "color": "#000000" },
                        { "name": "Staking Pools", "color": "#3995ce" },
                        { "name": "Liquid Staking", "color": "#c1ba2a" }
                    ]
                }
            }
        },
        {
            "id": 6,
            "title": "[Bar Chart] ETH Withdrawals after Shanghai Unlock",
            "name": "libs/@scom/scom-bar-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/2360815/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD",
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
            "name": "libs/@scom/scom-line-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/2360905/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD",
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
            "name": "libs/@scom/scom-area-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/284022/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD",
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
        {
            "id": 9,
            "title": "[Area Chart] ETH Withdrawals after Shanghai Unlock",
            "description": "ETH withdrawals cumsum",
            "name": "libs/@scom/scom-area-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/2360815/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD",
                "title": "ETH Withdrawals after Shanghai Unlock",
                "description": "ETH withdrawals cumsum",
                "options": {
                    "xColumn": {
                        "key": "time",
                        "type": "time"
                    },
                    "yColumns": [
                        "ETH_cum"
                    ],
                    "stacking": true,
                    "legend": {
                        "show": true
                    },
                    "seriesOptions": [
                        {
                            "key": "ETH_cum",
                            "title": "ETH total",
                            "color": "#000000"
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
        {
            "id": 10,
            "title": "[Area Chart] RDNT/WETH LP Staked Supply",
            "description": "Radiant Capital Pool2 Staking LP",
            "name": "libs/@scom/scom-area-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/283918/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD",
                "title": "RDNT/WETH LP Staked Supply",
                "description": "Radiant Capital Pool2 Staking LP",
                "options": {
                    "xColumn": {
                        "key": "time",
                        "type": "time"
                    },
                    "yColumns": [
                        "masterchef_pool",
                        "non_masterchef_pool"
                    ],
                    "stacking": true,
                    "percentage": true,
                    "legend": {
                        "show": true
                    },
                    "seriesOptions": [
                        {
                            "key": "masterchef_pool",
                            "title": "Staked",
                            "color": "#2793cb"
                        },
                        {
                            "key": "non_masterchef_pool",
                            "title": "Unstaked",
                            "color": "#ff0000"
                        }
                    ],
                    "xAxis": {
                        "tickFormat": "MMM YYYY"
                    }
                }
            }
        },
        {
            "id": 11,
            "title": "[Scatter Chart] ETH Withdrawals after Shanghai Unlock vs ETH price",
            "name": "libs/@scom/scom-scatter-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/2360905/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD",
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
            "name": "libs/@scom/scom-mixed-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/1333833/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD",
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
        {
            "id": 13,
            "title": "[Mixed Chart] $RDNT Price Chart",
            "description": "RDNT Price Chart on Arbitrum and BSC",
            "name": "libs/@scom/scom-mixed-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/1154848/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD",
                "title": "$RDNT Price Chart",
                "description": "RDNT Price Chart on Arbitrum and BSC",
                "options": {
                    "xColumn": {
                        "key": "time",
                        "type": "time"
                    },
                    "yColumns": [
                        "rdnt_price",
                        "red_volume",
                        "green_volume"
                    ],
                    "globalSeriesType": "area",
                    "seriesOptions": [
                        {
                            "key": "rdnt_price",
                            "title": "Price",
                            "type": "area",
                            "color": "#aaaacd",
                            "yAxis": "left",
                            "zIndex": 0
                        },
                        {
                            "key": "red_volume",
                            "title": "$USD Volume",
                            "type": "bar",
                            "color": "#f51818",
                            "yAxis": "right",
                            "zIndex": 1
                        },
                        {
                            "key": "green_volume",
                            "title": "$USD Volume",
                            "type": "bar",
                            "color": "#4fa0e0",
                            "yAxis": "right",
                            "zIndex": 2
                        }
                    ],
                    "xAxis": {
                        "title": "Date",
                        "tickFormat": "MMM DD"
                    },
                    "leftYAxis": {
                        "tickFormat": "$0[].000",
                        "labelFormat": "$0[.,].00"
                    },
                    "rightYAxis": {
                        "tickFormat": "$0[].00a",
                        "labelFormat": "$0[.,].00"
                    }
                }
            }
        },
        {
            "id": 14,
            "title": "[Mixed Chart] Holders OverTime",
            "description": "RDNT and RDNT V2 Holders Overtime",
            "name": "libs/@scom/scom-mixed-chart",
            "properties": {
                "apiEndpoint": "https://api.dune.com/api/v1/query/947867/results?api_key=324WhvsCHWCji2pkgtfa0JDqDu8j0FdD",
                "title": "Holders OverTime",
                "description": "RDNT and RDNT V2 Holders Overtime",
                "options": {
                    "xColumn": {
                        "key": "time",
                        "type": "time"
                    },
                    "yColumns": [
                        "red_change",
                        "green_change",
                        "total_holders"
                    ],
                    "globalSeriesType": "line",
                    "seriesOptions": [
                        {
                            "key": "red_change",
                            "title": "Change",
                            "type": "bar",
                            "color": "#ff0000",
                            "yAxis": "right",
                            "zIndex": 2
                        },
                        {
                            "key": "green_change",
                            "title": "Change",
                            "type": "bar",
                            "color": "#00ff17",
                            "yAxis": "right",
                            "zIndex": 1
                        },
                        {
                            "key": "total_holders",
                            "title": "Total Holders",
                            "type": "line",
                            "yAxis": "left",
                            "zIndex": 0
                        }
                    ],
                    "xAxis": {
                        "title": "Date",
                        "tickFormat": "MMM DD"
                    }
                }
            }
        }
    ];
});
define("@scom/scom-dune", ["require", "exports", "@ijstech/components", "@scom/scom-dune/global/index.ts", "@scom/scom-dune/index.css.ts", "@scom/scom-dune/data.json.ts", "@scom/scom-configurator-settings"], function (require, exports, components_3, index_1, index_css_1, data_json_1, scom_configurator_settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_3.Styles.Theme.ThemeVars;
    let ScomDune = class ScomDune extends components_3.Module {
        constructor(parent, options) {
            super(parent, options);
            this._data = { componentId: 0 };
            this.tag = {};
            this.defaultEdit = true;
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
                if (!this.pnlConfig.hasChildNodes()) {
                    const config = new scom_configurator_settings_1.default();
                    config.direction = true;
                    config.data = data_json_1.default;
                    config.onSaveConfigData = (_data, _tag) => {
                        if (_tag)
                            this.setTag(_tag, true);
                        if (_data)
                            this.setData(_data);
                        this.mdConfig.visible = false;
                        this.pnlConfig.clearInnerHTML();
                    };
                    this.pnlConfig.appendChild(config);
                }
                this.mdConfig.visible = true;
            };
        }
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        get showFooter() {
            var _a;
            return (_a = this._data.showFooter) !== null && _a !== void 0 ? _a : true;
        }
        set showFooter(value) {
            this._data.showFooter = value;
            if (this.dappContainer)
                this.dappContainer.showFooter = this.showFooter;
        }
        get showHeader() {
            var _a;
            return (_a = this._data.showHeader) !== null && _a !== void 0 ? _a : true;
        }
        set showHeader(value) {
            this._data.showHeader = value;
            if (this.dappContainer)
                this.dappContainer.showHeader = this.showHeader;
        }
        get existingCharts() {
            const data = data_json_1.default;
            return data.map(v => {
                return {
                    title: `${v.title} ${v.description ? `(${v.description})` : ''}`,
                    id: v.id
                };
            });
        }
        getData() {
            return this._data;
        }
        async setData(data) {
            this._data = data;
            await this.updateDuneData();
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
            this.dappContainer.width = this.width;
            this.dappContainer.maxWidth = '100%';
            const containerBody = this.dappContainer.querySelector('dapp-container-body');
            if (containerBody) {
                containerBody.width = this.width;
                containerBody.maxWidth = '100%';
            }
            this.onUpdateBlock();
        }
        getPropertiesSchema() {
            const propertiesSchema = {
                type: 'object',
                properties: {
                    componentId: {
                        type: 'number',
                        oneOf: this.existingCharts,
                        required: true
                    }
                }
            };
            return propertiesSchema;
        }
        getThemeSchema() {
            const themeSchema = {
                type: 'object',
                properties: {
                    darkShadow: {
                        type: 'boolean'
                    },
                    fontColor: {
                        type: 'string',
                        format: 'color'
                    },
                    backgroundColor: {
                        type: 'string',
                        format: 'color'
                    },
                    width: {
                        type: 'string'
                    },
                    height: {
                        type: 'string'
                    }
                }
            };
            return themeSchema;
        }
        _getActions(propertiesSchema, themeSchema) {
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
                    customUI: {
                        render: (data, onConfirm) => {
                            const vstack = new components_3.VStack();
                            const config = new scom_configurator_settings_1.default();
                            config.data = data_json_1.default;
                            if (this._data.options) {
                                config.showDetail({ properties: Object.assign({}, this._data), id: this._data.componentId, tag: Object.assign({}, this.tag) });
                            }
                            config.onSaveConfigData = async (_data, _tag) => {
                                if (_tag)
                                    this.setTag(_tag, true);
                                if (_data)
                                    await this.setData(_data);
                                if (onConfirm) {
                                    onConfirm(true, { properties: Object.assign({}, this._data), id: this._data.componentId, tag: Object.assign({}, this.tag) });
                                }
                            };
                            vstack.append(config);
                            return vstack;
                        }
                    },
                    userInputDataSchema: propertiesSchema,
                }
            ];
            if (themeSchema) {
                actions.push({
                    name: 'Theme Settings',
                    icon: 'palette',
                    command: (builder, userInputData) => {
                        let oldTag = {};
                        return {
                            execute: async () => {
                                if (!userInputData)
                                    return;
                                oldTag = Object.assign({}, this.tag);
                                if (builder === null || builder === void 0 ? void 0 : builder.setTag)
                                    builder.setTag(userInputData);
                                else
                                    this.setTag(userInputData);
                            },
                            undo: () => {
                                if (!userInputData)
                                    return;
                                this.tag = JSON.parse(JSON.stringify(oldTag));
                                if (builder === null || builder === void 0 ? void 0 : builder.setTag)
                                    builder.setTag(oldTag);
                                else
                                    this.setTag(oldTag);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: themeSchema
                });
            }
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
                        const containerModule = self.vStackDune.firstChild;
                        if ((containerModule === null || containerModule === void 0 ? void 0 : containerModule.getConfigurators) && containerModule.getConfigurators()) {
                            const target = containerModule.getConfigurators().find((f) => f.target === 'Builders');
                            if (target) {
                                return target.getActions().map((v) => {
                                    return Object.assign(Object.assign({}, v), { command: (builder, userInputData) => {
                                            const { execute, undo, redo } = v.command(builder, userInputData);
                                            const isTheme = v.name === 'Theme Settings';
                                            let oldData = isTheme ? Object.assign({}, this.tag) : Object.assign({}, self._data);
                                            return {
                                                execute: async () => {
                                                    if (v.name === 'Theme Settings') {
                                                        if (!userInputData)
                                                            return;
                                                        oldData = JSON.parse(JSON.stringify(self.tag));
                                                        if (builder === null || builder === void 0 ? void 0 : builder.setTag)
                                                            builder.setTag(userInputData);
                                                        else
                                                            self.setTag(userInputData);
                                                    }
                                                    else {
                                                        oldData = Object.assign({}, self._data);
                                                        if ((userInputData === null || userInputData === void 0 ? void 0 : userInputData.componentId) !== undefined)
                                                            self._data.componentId = userInputData.componentId;
                                                        if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                                            builder.setData(Object.assign(Object.assign({}, oldData), userInputData));
                                                        self._data = Object.assign(Object.assign({}, oldData), userInputData);
                                                    }
                                                    execute();
                                                },
                                                undo: async () => {
                                                    if (v.name === 'Theme Settings') {
                                                        if (!userInputData)
                                                            return;
                                                        self.tag = JSON.parse(JSON.stringify(oldData));
                                                        if (builder === null || builder === void 0 ? void 0 : builder.setTag)
                                                            builder.setTag(oldData);
                                                        else
                                                            this.setTag(oldData);
                                                    }
                                                    else {
                                                        oldData = Object.assign(Object.assign({}, self._data), oldData);
                                                        if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                                            builder.setData(oldData);
                                                        self._data = Object.assign({}, oldData);
                                                    }
                                                    undo();
                                                },
                                                redo: async () => {
                                                    redo();
                                                },
                                            };
                                        }, useRenderUI: true });
                                });
                            }
                        }
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
                        return this._getActions(this.getPropertiesSchema(), this.getThemeSchema());
                    },
                    getLinkParams: () => {
                        const data = this._data || {};
                        return {
                            data: window.btoa(JSON.stringify(data))
                        };
                    },
                    setLinkParams: async (params) => {
                        if (params.data) {
                            const utf8String = decodeURIComponent(params.data);
                            const decodedString = window.atob(utf8String);
                            const newData = JSON.parse(decodedString);
                            let resultingData = Object.assign(Object.assign({}, self._data), newData);
                            await this.setData(resultingData);
                        }
                    },
                    getData: this.getData.bind(this),
                    setData: this.setData.bind(this),
                    getTag: this.getTag.bind(this),
                    setTag: this.setTag.bind(this)
                }
            ];
        }
        updateStyle(name, value) {
            value ? this.style.setProperty(name, value) : this.style.removeProperty(name);
        }
        updateTheme() {
            var _a, _b;
            this.updateStyle('--text-primary', (_a = this.tag) === null || _a === void 0 ? void 0 : _a.fontColor);
            this.updateStyle('--background-main', (_b = this.tag) === null || _b === void 0 ? void 0 : _b.backgroundColor);
        }
        onUpdateBlock() {
            const containerModule = this.vStackDune.firstChild;
            if (containerModule === null || containerModule === void 0 ? void 0 : containerModule.setTag) {
                containerModule.setTag(this.tag);
            }
            this.updateTheme();
        }
        async updateDuneData() {
            var _a;
            if (this.dappContainer) {
                this.dappContainer.showHeader = this.showHeader;
                this.dappContainer.showFooter = this.showFooter;
            }
            this.vStackDune.clearInnerHTML();
            const componentId = Number((_a = this._data) === null || _a === void 0 ? void 0 : _a.componentId);
            if (!isNaN(componentId) && componentId >= 0) {
                const duneChart = data_json_1.default.find(v => v.id === this._data.componentId);
                const containerModule = await index_1.getComponent(duneChart.name);
                this.vStackDune.appendChild(containerModule);
                await containerModule.ready();
                if (containerModule === null || containerModule === void 0 ? void 0 : containerModule.getConfigurators) {
                    const configurator = containerModule.getConfigurators().find((configurator) => configurator.target === "Builders");
                    if (configurator === null || configurator === void 0 ? void 0 : configurator.setData) {
                        await configurator.setData(this._data || duneChart.properties);
                    }
                    const tag = this.tag || duneChart.tag;
                    if ((configurator === null || configurator === void 0 ? void 0 : configurator.setTag) && tag) {
                        await configurator.setTag(tag);
                    }
                }
            }
            else {
                this.vStackDune.appendChild(this.$render("i-vstack", { gap: 20, horizontalAlignment: "center", verticalAlignment: "center", height: 100, maxHeight: "100%", onClick: this.showConfig, class: "pointer" },
                    this.$render("i-label", { caption: "Dune Blocks", font: { size: '20px' } }),
                    this.$render("i-icon", { name: "plus", fill: Theme.colors.primary.contrastText, width: 36, height: 36 })));
            }
            this.onUpdateBlock();
        }
        async init() {
            this.isReadyCallbackQueued = true;
            super.init();
            this.updateTheme();
            this.classList.add(index_css_1.duneStyle);
            this.width = this.tag.width || 700;
            this.dappContainer.width = this.width;
            this.dappContainer.maxWidth = '100%';
            this.maxWidth = '100%';
            const containerBody = this.dappContainer.querySelector('dapp-container-body');
            if (containerBody) {
                containerBody.width = this.width;
                containerBody.maxWidth = '100%';
            }
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
            return (this.$render("i-scom-dapp-container", { id: "dappContainer", class: index_css_1.customContainerDapp, showWalletNetwork: false, display: "flex", height: "100%", width: "100%" },
                this.$render("i-vstack", { id: "vStackDune", gap: 20, height: "100%", background: { color: Theme.background.main }, padding: { top: 10, bottom: 10, left: 10, right: 10 }, class: index_css_1.containerStyle }),
                this.$render("i-modal", { id: "mdConfig", width: 1000 },
                    this.$render("i-panel", { id: "pnlConfig" }))));
        }
    };
    ScomDune = __decorate([
        components_3.customModule,
        components_3.customElements('i-scom-dune')
    ], ScomDune);
    exports.default = ScomDune;
});
