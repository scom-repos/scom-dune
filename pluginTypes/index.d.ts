/// <amd-module name="@scom/scom-dune/global/interfaces.ts" />
declare module "@scom/scom-dune/global/interfaces.ts" {
    export interface IVisualizationWidgets {
        visualization: IVisualization;
    }
    export interface IVisualization {
        id: number;
        type: 'chart' | 'counter' | 'table' | string;
        name: string;
        options: IDuneOptions | ICounterOptions | ITableOptions;
        query_details: {
            query_id: number;
            name: string;
            description?: string;
            user: null | {
                id: number;
                name: string;
                profile_image_url: string;
            };
            team: null | {
                id: number;
                name: string;
                profile_image_url: string;
            };
        };
    }
    export interface IDuneInfo {
        info?: {
            id: number;
            name: string;
            profile_image_url: string;
        };
        type: 'chart' | 'counter' | 'table';
        name: string;
        subName: string;
        description?: string;
        theme?: 'light' | 'dark';
    }
    export interface IDuneOptions {
        columnMapping?: {
            [key: string]: string;
        };
        seriesOptions?: {
            [key: string]: {
                color?: string;
                type?: string;
                name?: string;
                yAxis?: number;
                zIndex?: number;
            };
        };
        globalSeriesType?: string;
        showDataLabels?: boolean;
        numberFormatRightYAxisSeries?: string;
        legend?: {
            enabled: boolean;
        };
        numberFormat?: string;
    }
    export interface IDuneChart extends IDuneInfo {
        chartData: {
            columns: string[];
            data: {
                [key: string]: string | number;
            }[];
        };
    }
    export interface IDunePieOptions extends IDuneOptions {
        valuesOptions: {
            [key: string]: {
                color: string;
            };
        };
    }
    export interface IDunePieChart extends IDuneChart {
        options: IDunePieOptions;
    }
    export interface IDuneDefaultOptions extends IDuneOptions {
        series: {
            stacking: string;
            percentValues?: boolean;
        };
        valuesOptions: {
            [key: string]: {
                color: string;
            };
        };
        xAxis: {
            title: {
                text: string;
            };
            type: string;
        };
        yAxis: {
            title: {
                text: string;
            };
            type: string;
        }[];
    }
    export interface IDuneDefaultChart extends IDuneChart {
        options: IDuneDefaultOptions;
    }
    export interface ICounterOptions {
        counterColName: string;
        rowNumber: number;
        counterLabel?: string;
        stringDecimal?: number;
        stringPrefix?: string;
        stringSuffix?: string;
        coloredPositiveValues?: boolean;
        coloredNegativeValues?: boolean;
    }
    export interface IDuneCounter extends IDuneInfo {
        options: ICounterOptions;
        counterData: {
            columns: string[];
            data: {
                [key: string]: string | number;
            }[];
        };
    }
    export interface ITableOptions {
        columns: {
            name: string;
            title?: string;
            alignContent?: string;
            isHidden?: boolean;
            numberFormat?: string;
            type?: 'normal' | 'progressbar' | string;
            coloredPositiveValues?: boolean;
            coloredNegativeValues?: boolean;
        }[];
    }
    export interface IDuneTable extends IDuneInfo {
        options: ITableOptions;
        tableData: {
            columns: string[];
            data: {
                [key: string]: string | number;
            }[];
        };
    }
    export interface IDuneConfig {
        visualizationName: string;
        showHeader?: boolean;
        showFooter?: boolean;
    }
}
/// <amd-module name="@scom/scom-dune/global/utils.ts" />
declare module "@scom/scom-dune/global/utils.ts" {
    export const formatNumber: (num: number, options?: {
        format?: string;
        decimals?: number;
        percentValues?: boolean;
    }) => any;
    export const formatNumberByFormat: (num: number, format: string, separators?: boolean) => any;
    export const formatNumberWithSeparators: (value: number, precision?: number) => string;
    export const getChartType: (type: string, defaultType?: string) => string;
}
/// <amd-module name="@scom/scom-dune/global/index.ts" />
declare module "@scom/scom-dune/global/index.ts" {
    export interface PageBlock {
        getData: () => any;
        setData: (data: any) => Promise<void>;
        getTag: () => any;
        setTag: (tag: any) => Promise<void>;
        validate?: () => boolean;
        defaultEdit?: boolean;
        tag?: any;
        readonly onEdit: () => Promise<void>;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        edit: () => Promise<void>;
        confirm: () => Promise<void>;
        discard: () => Promise<void>;
        config: () => Promise<void>;
    }
    export * from "@scom/scom-dune/global/interfaces.ts";
    export * from "@scom/scom-dune/global/utils.ts";
}
/// <amd-module name="@scom/scom-dune/index.css.ts" />
declare module "@scom/scom-dune/index.css.ts" {
    export const containerStyle: string;
    export const duneStyle: string;
}
/// <amd-module name="@scom/scom-dune/dummy/2030664.json.ts" />
declare module "@scom/scom-dune/dummy/2030664.json.ts" {
    export const query_id_2030664: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: {
            ranking: number;
            entity: string;
            eth_deposited: number;
            validators: number;
            marketshare: number;
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/2030745.json.ts" />
declare module "@scom/scom-dune/dummy/2030745.json.ts" {
    export const query_id_2030745: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: {
            date: string;
            depositor_entity_category: string;
            total_eth: number;
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/2360788.json.ts" />
declare module "@scom/scom-dune/dummy/2360788.json.ts" {
    export const query_id_2360788: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: {
            staked: number;
            depositor_entity_category: string;
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/2360815.json.ts" />
declare module "@scom/scom-dune/dummy/2360815.json.ts" {
    export const query_id_2360815: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: {
            time: string;
            ETH: number;
            validators: number;
            receivers: number;
            category: string;
            ETH_cum: number;
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/2360905.json.ts" />
declare module "@scom/scom-dune/dummy/2360905.json.ts" {
    export const query_id_2360905: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: {
            time: string;
            ETH: number;
            validators: number;
            ETH_cum: number;
            eth_price: number;
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/1154848.json.ts" />
declare module "@scom/scom-dune/dummy/1154848.json.ts" {
    export const query_id_1154848: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: ({
            time: string;
            usd_volume: number;
            rdnt_price: number;
            green_volume: number;
            red_volume: any;
            last_price: number;
            rdnt_volume: number;
        } | {
            time: string;
            usd_volume: number;
            rdnt_price: number;
            green_volume: any;
            red_volume: number;
            last_price: number;
            rdnt_volume: number;
        })[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/283918.json.ts" />
declare module "@scom/scom-dune/dummy/283918.json.ts" {
    export const query_id_283918: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: {
            time: string;
            slp_value: number;
            masterchef_pool: number;
            masterchef_pool_percent: number;
            non_masterchef_pool: number;
            non_masterchef_pool_percent: number;
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/947867.json.ts" />
declare module "@scom/scom-dune/dummy/947867.json.ts" {
    export const query_id_947867: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: ({
            time: string;
            total_holders: number;
            green_change: number;
            red_change: any;
            holding_change_format: string;
        } | {
            time: string;
            total_holders: number;
            green_change: any;
            red_change: number;
            holding_change_format: string;
        })[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/1333833.json.ts" />
declare module "@scom/scom-dune/dummy/1333833.json.ts" {
    export const query_id_1333833: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: {
            time: string;
            cumulative_tokens_value: number;
            cumulative_format: number;
            cumulative_usdt: number;
            cumulative_weth: number;
            cumulative_wbtc: number;
            cumulative_usdc: number;
            cumulative_dai: number;
            cumulative_diff: number;
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/2030584.json.ts" />
declare module "@scom/scom-dune/dummy/2030584.json.ts" {
    export const query_id_2030584: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: {
            deposited: number;
            depositors: number;
            validators: number;
            pct_of_depositors: number;
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/2377304.json.ts" />
declare module "@scom/scom-dune/dummy/2377304.json.ts" {
    export const query_id_2377304: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: {
            address: string;
            validators: number;
            ETH: number;
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/2377402.json.ts" />
declare module "@scom/scom-dune/dummy/2377402.json.ts" {
    export const query_id_2377402: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: string[];
        data: {
            address: string;
            validators: number;
            ETH: number;
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/dashboard.json.ts" />
declare module "@scom/scom-dune/dummy/dashboard.json.ts" {
    export const dashboards: {
        dashboards: {
            id: number;
            name: string;
            slug: string;
            is_private: boolean;
            is_archived: boolean;
            created_at: string;
            updated_at: string;
            tags: string[];
            user: any;
            team: {
                id: number;
                name: string;
                handle: string;
                profile_image_url: string;
                __typename: string;
            };
            forked_dashboard: any;
            text_widgets: {
                id: number;
                created_at: string;
                updated_at: string;
                text: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                __typename: string;
            }[];
            visualization_widgets: ({
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        };
                        yAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        series: {
                            stacking: string;
                            percentValues?: undefined;
                        };
                        reverseX: boolean;
                        columnMapping: {
                            time: string;
                            category: string;
                            validators: string;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            Reward: {
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            "Full Withdraw": {
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            staked?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        showDataLabels: boolean;
                        globalSeriesType: string;
                        numberFormat?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title?: undefined;
                        };
                        yAxis: {
                            type: string;
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        reverseX: boolean;
                        numberFormat: string;
                        columnMapping: {
                            staked: string;
                            depositor_entity_category: string;
                            time?: undefined;
                            category?: undefined;
                            validators?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            staked: {
                                name: string;
                                type: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX: {
                                color: string;
                            };
                            Other: {
                                color: string;
                            };
                            Others: {
                                color: string;
                            };
                            "Staking Pools": {
                                color: string;
                            };
                            "Liquid Staking": {
                                color: string;
                            };
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        showDataLabels: boolean;
                        globalSeriesType: string;
                        series?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: any;
                        team: {
                            id: number;
                            name: string;
                            handle: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        rowNumber: number;
                        counterColName: string;
                        sortX?: undefined;
                        xAxis?: undefined;
                        yAxis?: undefined;
                        legend?: undefined;
                        series?: undefined;
                        reverseX?: undefined;
                        columnMapping?: undefined;
                        seriesOptions?: undefined;
                        valuesOptions?: undefined;
                        showDataLabels?: undefined;
                        globalSeriesType?: undefined;
                        numberFormat?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        };
                        yAxis: {
                            type: string;
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        reverseX: boolean;
                        numberFormat: string;
                        columnMapping: {
                            time: string;
                            eth_price: string;
                            category?: undefined;
                            validators?: undefined;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            ETH?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            eth_price: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            staked?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        globalSeriesType: string;
                        series?: undefined;
                        showDataLabels?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        };
                        yAxis: {
                            type: string;
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        reverseX: boolean;
                        numberFormat: string;
                        columnMapping: {
                            ETH: string;
                            time: string;
                            eth_price: string;
                            category?: undefined;
                            validators?: undefined;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            ETH: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            eth_price: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            staked?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        globalSeriesType: string;
                        numberFormatRightYAxisSeries: string;
                        series?: undefined;
                        showDataLabels?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        rowNumber: number;
                        stringSuffix: string;
                        stringDecimal: number;
                        counterColName: string;
                        sortX?: undefined;
                        xAxis?: undefined;
                        yAxis?: undefined;
                        legend?: undefined;
                        series?: undefined;
                        reverseX?: undefined;
                        columnMapping?: undefined;
                        seriesOptions?: undefined;
                        valuesOptions?: undefined;
                        showDataLabels?: undefined;
                        globalSeriesType?: undefined;
                        numberFormat?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        };
                        yAxis: {
                            type: string;
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        reverseX: boolean;
                        numberFormat: string;
                        columnMapping: {
                            time: string;
                            eth_price: string;
                            validators: string;
                            category?: undefined;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            ETH?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            eth_price: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            validators: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            staked?: undefined;
                            ETH?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        globalSeriesType: string;
                        numberFormatRightYAxisSeries: string;
                        series?: undefined;
                        showDataLabels?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title?: undefined;
                        };
                        yAxis: {
                            type: string;
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        reverseX: boolean;
                        numberFormat: string;
                        columnMapping: {
                            entity: string;
                            eth_deposited: string;
                            time?: undefined;
                            category?: undefined;
                            validators?: undefined;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            eth_deposited: {
                                name: string;
                                type: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            staked?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            Lido: {
                                color: string;
                            };
                            Other: {
                                color: string;
                            };
                            Kraken: {
                                color: string;
                            };
                            Binance: {
                                color: string;
                            };
                            Coinbase: {
                                color: string;
                            };
                            CEX?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                        };
                        showDataLabels: boolean;
                        globalSeriesType: string;
                        series?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        };
                        yAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        series: {
                            stacking: string;
                            percentValues?: undefined;
                        };
                        reverseX: boolean;
                        numberFormat: string;
                        columnMapping: {
                            time: string;
                            ETH_cum: string;
                            category?: undefined;
                            validators?: undefined;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            ETH_cum: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            staked?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        globalSeriesType: string;
                        showDataLabels?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        rowNumber: number;
                        stringSuffix: string;
                        counterColName: string;
                        sortX?: undefined;
                        xAxis?: undefined;
                        yAxis?: undefined;
                        legend?: undefined;
                        series?: undefined;
                        reverseX?: undefined;
                        columnMapping?: undefined;
                        seriesOptions?: undefined;
                        valuesOptions?: undefined;
                        showDataLabels?: undefined;
                        globalSeriesType?: undefined;
                        numberFormat?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        columns: ({
                            name: string;
                            title: string;
                            type?: undefined;
                            numberFormat?: undefined;
                            coloredNegativeValues?: undefined;
                            coloredPositiveValues?: undefined;
                        } | {
                            name: string;
                            type: string;
                            title: string;
                            numberFormat: string;
                            coloredNegativeValues: boolean;
                            coloredPositiveValues: boolean;
                        } | {
                            name: string;
                            title: string;
                            numberFormat: string;
                            type?: undefined;
                            coloredNegativeValues?: undefined;
                            coloredPositiveValues?: undefined;
                        })[];
                        sortX?: undefined;
                        xAxis?: undefined;
                        yAxis?: undefined;
                        legend?: undefined;
                        series?: undefined;
                        reverseX?: undefined;
                        columnMapping?: undefined;
                        seriesOptions?: undefined;
                        valuesOptions?: undefined;
                        showDataLabels?: undefined;
                        globalSeriesType?: undefined;
                        numberFormat?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        };
                        yAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        series: {
                            stacking: string;
                            percentValues?: undefined;
                        };
                        reverseX: boolean;
                        numberFormat: string;
                        columnMapping: {
                            date: string;
                            total_eth: string;
                            depositor_entity_category: string;
                            time?: undefined;
                            category?: undefined;
                            validators?: undefined;
                            staked?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            CEX: {
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Others: {
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Unidentified: {
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            "Staking Pools": {
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            "Liquid Staking": {
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            staked?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        globalSeriesType: string;
                        showDataLabels?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        };
                        yAxis: {
                            type: string;
                            title: {
                                text: string;
                            };
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        series: {
                            stacking: string;
                            percentValues?: undefined;
                        };
                        reverseX: boolean;
                        numberFormat: string;
                        columnMapping: {
                            ETH: string;
                            time: string;
                            category: string;
                            validators?: undefined;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            eth_price?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            Reward: {
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            "Full Withdraw": {
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            staked?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        globalSeriesType: string;
                        showDataLabels?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title?: undefined;
                        };
                        yAxis: {
                            type: string;
                            tickFormat: string;
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        reverseX: boolean;
                        numberFormat: string;
                        columnMapping: {
                            time: string;
                            rdnt_price: string;
                            red_volume: string;
                            green_volume: string;
                            category?: undefined;
                            validators?: undefined;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            rdnt_price: {
                                name: string;
                                type: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            red_volume: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            green_volume: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            staked?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        globalSeriesType: string;
                        numberFormatRightYAxisSeries: string;
                        series?: undefined;
                        showDataLabels?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title?: undefined;
                        };
                        yAxis: {
                            type: string;
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        reverseX: boolean;
                        columnMapping: {
                            time: string;
                            red_change: string;
                            green_change: string;
                            total_holders: string;
                            category?: undefined;
                            validators?: undefined;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            red_change: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            green_change: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            total_holders: {
                                name: string;
                                type: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            staked?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        globalSeriesType: string;
                        series?: undefined;
                        showDataLabels?: undefined;
                        numberFormat?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title?: undefined;
                        };
                        yAxis: {
                            type: string;
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        series: {
                            stacking: string;
                            percentValues: boolean;
                        };
                        reverseX: boolean;
                        columnMapping: {
                            time: string;
                            masterchef_pool: string;
                            non_masterchef_pool: string;
                            category?: undefined;
                            validators?: undefined;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            ""?: undefined;
                            market?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        seriesOptions: {
                            masterchef_pool: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            non_masterchef_pool: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            staked?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            cumulative_dai?: undefined;
                            cumulative_diff?: undefined;
                            cumulative_usdc?: undefined;
                            cumulative_usdt?: undefined;
                            cumulative_wbtc?: undefined;
                            cumulative_weth?: undefined;
                            cumulative_tokens_value?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        globalSeriesType: string;
                        showDataLabels?: undefined;
                        numberFormat?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        numberFormatRightYAxisSeries?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            } | {
                id: number;
                created_at: string;
                updated_at: string;
                options: {
                    position: {
                        col: number;
                        row: number;
                        sizeX: number;
                        sizeY: number;
                    };
                };
                visualization: {
                    id: number;
                    type: string;
                    name: string;
                    options: {
                        sortX: boolean;
                        xAxis: {
                            type: string;
                            title?: undefined;
                        };
                        yAxis: {
                            type: string;
                            tickFormat: string;
                        }[];
                        legend: {
                            enabled: boolean;
                        };
                        series: {
                            stacking: string;
                            percentValues?: undefined;
                        };
                        reverseX: boolean;
                        numberFormat: string;
                        columnMapping: {
                            "": string;
                            time: string;
                            market: string;
                            cumulative_dai: string;
                            cumulative_diff: string;
                            cumulative_usdc: string;
                            cumulative_usdt: string;
                            cumulative_wbtc: string;
                            cumulative_weth: string;
                            cumulative_tokens_value: string;
                            category?: undefined;
                            validators?: undefined;
                            staked?: undefined;
                            depositor_entity_category?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            entity?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            date?: undefined;
                            total_eth?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                        };
                        seriesOptions: {
                            cumulative_dai: {
                                name: string;
                                type: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            cumulative_diff: {
                                name: string;
                                type: string;
                                color: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            cumulative_usdc: {
                                name: string;
                                type: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            cumulative_usdt: {
                                name: string;
                                type: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            cumulative_wbtc: {
                                name: string;
                                type: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            cumulative_weth: {
                                name: string;
                                type: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            cumulative_tokens_value: {
                                name: string;
                                type: string;
                                yAxis: number;
                                zIndex: number;
                            };
                            Reward?: undefined;
                            "Full Withdraw"?: undefined;
                            staked?: undefined;
                            eth_price?: undefined;
                            ETH?: undefined;
                            validators?: undefined;
                            eth_deposited?: undefined;
                            ETH_cum?: undefined;
                            CEX?: undefined;
                            Others?: undefined;
                            Unidentified?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            rdnt_price?: undefined;
                            red_volume?: undefined;
                            green_volume?: undefined;
                            red_change?: undefined;
                            green_change?: undefined;
                            total_holders?: undefined;
                            masterchef_pool?: undefined;
                            non_masterchef_pool?: undefined;
                        };
                        valuesOptions: {
                            CEX?: undefined;
                            Other?: undefined;
                            Others?: undefined;
                            "Staking Pools"?: undefined;
                            "Liquid Staking"?: undefined;
                            Lido?: undefined;
                            Kraken?: undefined;
                            Binance?: undefined;
                            Coinbase?: undefined;
                        };
                        globalSeriesType: string;
                        numberFormatRightYAxisSeries: string;
                        showDataLabels?: undefined;
                        rowNumber?: undefined;
                        counterColName?: undefined;
                        stringSuffix?: undefined;
                        stringDecimal?: undefined;
                        columns?: undefined;
                    };
                    created_at: string;
                    query_details: {
                        query_id: number;
                        name: string;
                        description: string;
                        show_watermark: boolean;
                        parameters: any[];
                        dataset_id: number;
                        user: {
                            id: number;
                            name: string;
                            profile_image_url: string;
                            __typename: string;
                        };
                        team: any;
                        __typename: string;
                    };
                    __typename: string;
                };
                __typename: string;
            })[];
            param_widgets: any[];
            dashboard_favorite_count_all: {
                favorite_count: number;
                __typename: string;
            };
            trending_scores: {
                score_1h: number;
                score_4h: number;
                score_24h: number;
                updated_at: string;
                __typename: string;
            };
            __typename: string;
            favorite_dashboards: any[];
        }[];
    };
}
/// <amd-module name="@scom/scom-dune/dummy/index.ts" />
declare module "@scom/scom-dune/dummy/index.ts" {
    import { dashboards } from "@scom/scom-dune/dummy/dashboard.json.ts";
    const queryIdData: {};
    export { dashboards, queryIdData };
}
/// <amd-module name="@scom/scom-dune/charts/dunePieChart.tsx" />
declare module "@scom/scom-dune/charts/dunePieChart.tsx" {
    import { Container, ControlElement, Module } from '@ijstech/components';
    import { IDunePieChart } from "@scom/scom-dune/global/index.ts";
    interface IDunePieChartElement extends ControlElement {
        data: IDunePieChart;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['scom-dune-pie-chart']: IDunePieChartElement;
            }
        }
    }
    export class DunePieChart extends Module {
        private pieChart;
        private _data;
        set data(value: IDunePieChart);
        get data(): IDunePieChart;
        constructor(parent?: Container, options?: IDunePieChartElement);
        private initPieChart;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-dune/charts/duneDefaultChart.tsx" />
declare module "@scom/scom-dune/charts/duneDefaultChart.tsx" {
    import { Container, ControlElement, Module } from '@ijstech/components';
    import { IDuneDefaultChart } from "@scom/scom-dune/global/index.ts";
    interface IDuneDefaultChartElement extends ControlElement {
        data: IDuneDefaultChart;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['scom-dune-default-chart']: IDuneDefaultChartElement;
            }
        }
    }
    export class DuneDefaultChart extends Module {
        private defaultChart;
        private _data;
        set data(value: IDuneDefaultChart);
        get data(): IDuneDefaultChart;
        constructor(parent?: Container, options?: IDuneDefaultChartElement);
        private groupByCategory;
        private extractUniqueTimes;
        private concatUnique;
        private initDefaultChart;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-dune/charts/index.tsx" />
declare module "@scom/scom-dune/charts/index.tsx" {
    export { DunePieChart } from "@scom/scom-dune/charts/dunePieChart.tsx";
    export { DuneDefaultChart } from "@scom/scom-dune/charts/duneDefaultChart.tsx";
}
/// <amd-module name="@scom/scom-dune/counter/index.tsx" />
declare module "@scom/scom-dune/counter/index.tsx" {
    import { Container, ControlElement, Module } from '@ijstech/components';
    import { IDuneCounter } from "@scom/scom-dune/global/index.ts";
    interface IDuneCounterElement extends ControlElement {
        data: IDuneCounter;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['scom-dune-counter']: IDuneCounter;
            }
        }
    }
    export default class DuneCounter extends Module {
        private vStackCounter;
        private _data;
        set data(value: IDuneCounter);
        get data(): IDuneCounter;
        constructor(parent?: Container, options?: IDuneCounterElement);
        private formatCounter;
        private initCounter;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-dune/table/index.tsx" />
declare module "@scom/scom-dune/table/index.tsx" {
    import { Container, ControlElement, Module } from '@ijstech/components';
    import { IDuneTable } from "@scom/scom-dune/global/index.ts";
    interface IDuneTableElement extends ControlElement {
        data: IDuneTable;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['scom-dune-table']: IDuneTable;
            }
        }
    }
    export default class DuneTable extends Module {
        private tableElm;
        private paginationElm;
        private lbTotal;
        private inputSearch;
        private list;
        private _data;
        private totalPage;
        private pageNumber;
        private itemStart;
        private itemEnd;
        set data(value: IDuneTable);
        get data(): IDuneTable;
        private get dataListFiltered();
        private get dataListPagination();
        constructor(parent?: Container, options?: IDuneTableElement);
        private initTable;
        private renderTable;
        private onSelectIndex;
        private onSearch;
        init(): void;
        render(): any;
    }
}
/// <amd-module name="@scom/scom-dune" />
declare module "@scom/scom-dune" {
    import { Module, ControlElement, Container, IDataSchema } from '@ijstech/components';
    import { PageBlock, IDuneConfig } from "@scom/scom-dune/global/index.ts";
    interface ScomSocialMediaElement extends ControlElement, IDuneConfig {
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-dune']: ScomSocialMediaElement;
            }
        }
    }
    export default class ScomDune extends Module implements PageBlock {
        private vStackDune;
        private dashboard;
        private duneData;
        private dappContainer;
        private _oldData;
        private _data;
        private oldTag;
        tag: any;
        defaultEdit: boolean;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        readonly onEdit: () => Promise<void>;
        static create(options?: ScomSocialMediaElement, parent?: Container): Promise<ScomDune>;
        constructor(parent?: Container, options?: ScomSocialMediaElement);
        get showFooter(): boolean;
        set showFooter(value: boolean);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        getData(): IDuneConfig;
        setData(data: IDuneConfig): Promise<void>;
        getTag(): any;
        setTag(value: any): Promise<void>;
        getConfigSchema(): IDataSchema;
        onConfigSave(config: any): void;
        edit(): Promise<void>;
        confirm(): Promise<void>;
        discard(): Promise<void>;
        config(): Promise<void>;
        private getPropertiesSchema;
        private getThemeSchema;
        getEmbedderActions(): {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
        }[];
        getActions(): {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
        }[];
        _getActions(propertiesSchema: IDataSchema, themeSchema: IDataSchema): {
            name: string;
            icon: string;
            command: (builder: any, userInputData: any) => {
                execute: () => Promise<void>;
                undo: () => void;
                redo: () => void;
            };
            userInputDataSchema: IDataSchema;
        }[];
        private onUpdateBlock;
        private getDashboardData;
        private updateDuneData;
        private renderDuneUI;
        private renderCounter;
        private renderTable;
        private renderChart;
        private resizeDune;
        init(): Promise<void>;
        render(): any;
    }
}
