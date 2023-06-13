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
        componentId?: number;
        apiEndpoint?: string;
        options?: {
            [key: string]: any;
        };
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
    export const getComponent: (path: string) => Promise<HTMLElement>;
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
    export const customContainerDapp: string;
    export const duneStyle: string;
}
/// <amd-module name="@scom/scom-dune/data.json.ts" />
declare module "@scom/scom-dune/data.json.ts" {
    const _default: {
        id: number;
        title: string;
        description?: string;
        name: string;
        properties: {
            [key: string]: string | number | object;
        };
    }[];
    export default _default;
}
/// <amd-module name="@scom/scom-dune" />
declare module "@scom/scom-dune" {
    import { Module, ControlElement, Container, IDataSchema, VStack } from '@ijstech/components';
    import { IDuneConfig } from "@scom/scom-dune/global/index.ts";
    interface ScomDuneElement extends ControlElement, IDuneConfig {
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-dune']: ScomDuneElement;
            }
        }
    }
    export default class ScomDune extends Module {
        private vStackDune;
        private mdConfig;
        private pnlConfig;
        private _data;
        tag: any;
        defaultEdit: boolean;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        readonly onEdit: () => Promise<void>;
        static create(options?: ScomDuneElement, parent?: Container): Promise<ScomDune>;
        constructor(parent?: Container, options?: ScomDuneElement);
        get showFooter(): boolean;
        set showFooter(value: boolean);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        get existingCharts(): {
            title: string;
            id: number;
        }[];
        private getData;
        private setData;
        private getTag;
        private setTag;
        private getPropertiesSchema;
        private getThemeSchema;
        private _getActions;
        saveConfigData(data: any, tag: any): void;
        getConfigurators(): ({
            name: string;
            target: string;
            getActions: () => any;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
            getLinkParams?: undefined;
            setLinkParams?: undefined;
        } | {
            name: string;
            target: string;
            getActions: () => {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                customUI: {
                    render: (data?: any, onConfirm?: (result: boolean, data: any) => void) => VStack;
                };
                userInputDataSchema: IDataSchema;
            }[];
            getLinkParams: () => {
                data: string;
            };
            setLinkParams: (params: any) => Promise<void>;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        })[];
        private updateStyle;
        private updateTheme;
        private onUpdateBlock;
        private updateDuneData;
        private showConfig;
        init(): Promise<void>;
        render(): any;
    }
}
