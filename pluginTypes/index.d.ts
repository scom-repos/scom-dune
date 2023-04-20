/// <amd-module name="@scom/scom-dune/global/interfaces.ts" />
declare module "@scom/scom-dune/global/interfaces.ts" {
    export interface IVisualizationWidgets {
        visualization: IVisualization;
    }
    export interface IVisualization {
        id: number;
        type: string;
        name: string;
        options: IDuneOptions;
        query_details: {
            query_id: number;
            name: string;
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
    export interface IDuneChart {
        chartData: {
            columns: string[];
            data: {
                [key: string]: string | number;
            }[];
        };
        info?: {
            id: number;
            name: string;
            profile_image_url: string;
        };
        name: string;
        subName: string;
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
    export interface IDuneConfig {
        url: string;
    }
}
/// <amd-module name="@scom/scom-dune/global/utils.ts" />
declare module "@scom/scom-dune/global/utils.ts" {
    export const formatNumber: (num: number, options?: {
        format?: string;
        decimals?: number;
        percentValues?: boolean;
    }) => string;
    export const formatNumberByFormat: (num: number, format: string) => string;
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
        private pnlDune;
        private dashboard;
        private chartsData;
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
        private getQueryData;
        private initChart;
        private resizeCharts;
        init(): void;
        render(): any;
    }
}
