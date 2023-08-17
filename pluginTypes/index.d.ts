/// <amd-module name="@scom/scom-dune/global/interfaces.ts" />
declare module "@scom/scom-dune/global/interfaces.ts" {
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
/// <amd-module name="@scom/scom-dune/global/index.ts" />
declare module "@scom/scom-dune/global/index.ts" {
    export * from "@scom/scom-dune/global/interfaces.ts";
}
/// <amd-module name="@scom/scom-dune/index.css.ts" />
declare module "@scom/scom-dune/index.css.ts" {
    export const containerStyle: string;
    export const duneStyle: string;
}
/// <amd-module name="@scom/scom-dune/data.json.ts" />
declare module "@scom/scom-dune/data.json.ts" {
    const _default: {
        id: number;
        title: string;
        description?: string;
        path: string;
        properties: {
            [key: string]: string | number | object;
        };
    }[];
    export default _default;
}
/// <amd-module name="@scom/scom-dune" />
declare module "@scom/scom-dune" {
    import { Module, ControlElement, Container, VStack } from '@ijstech/components';
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
        static create(options?: ScomDuneElement, parent?: Container): Promise<ScomDune>;
        constructor(parent?: Container, options?: ScomDuneElement);
        get showFooter(): boolean;
        set showFooter(value: boolean);
        get showHeader(): boolean;
        set showHeader(value: boolean);
        private getData;
        private setData;
        private getTag;
        private setTag;
        private _getActions;
        saveConfigData(data: any, tag: any): void;
        getConfigurators(): {
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
                isReplacement: boolean;
                customUI: {
                    render: (data?: any, onReplace?: (data: any) => void) => VStack;
                };
            }[];
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        }[];
        private renderPlaceholder;
        private showConfig;
        init(): Promise<void>;
        render(): any;
    }
}
