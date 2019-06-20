export interface Settings {
    [key: string]: any;
}
export interface Constructor {
    url?: string;
    apikey: string;
    container: HTMLDivElement;
    paymentTypes?: string[];
    onLoad?: () => void;
    submission: (response: any) => void;
    settings?: {
        [key: string]: any;
    };
}
export interface Message {
    id?: string;
    event: string;
    data: {
        [key: string]: any;
    };
}
export default class Tokenizer {
    id: string;
    apikey: string;
    url: string;
    iframe: HTMLIFrameElement;
    container: HTMLDivElement;
    settings: Settings;
    constructor(info: Constructor);
    create(): void;
    validate(info: Constructor): void;
    submit(): void;
    setExpDate(expDate: string): void;
    postMessage(msg: Message): void;
    onLoad: () => void;
    submission: (response: any) => void;
    private uuid;
    private buildIframe;
    private setSettings;
    private updateHeight;
    private messageListener;
}
