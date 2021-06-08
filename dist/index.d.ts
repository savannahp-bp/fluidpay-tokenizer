export interface Settings {
    [key: string]: any;
}
export interface Constructor {
    url?: string;
    apikey: string;
    amount?: string;
    container: HTMLDivElement;
    paymentTypes?: string[];
    onLoad?: () => void;
    onPaymentChange?: (type: string) => void;
    validCard?: (valid: boolean) => void;
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
    amount: string | undefined;
    url: string;
    iframe: HTMLIFrameElement;
    container: HTMLDivElement;
    settings: Settings;
    constructor(info: Constructor);
    create(): void;
    validate(info: Constructor): void;
    isSurchargeable(state: string, bin: {
        card_type: string;
    }): boolean;
    submit(amount: string): void;
    setExpDate(expDate: string): void;
    postMessage(msg: Message): void;
    onLoad: () => void;
    validCard: (card: any) => void;
    onPaymentChange: (type: string) => void;
    submission: (response: any) => void;
    private uuid;
    private buildIframe;
    private setSettings;
    private updateHeight;
    private messageListener;
}
