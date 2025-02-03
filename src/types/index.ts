export interface PrinterOptions {
    baudRate?: number;
    timeout?: number;
    encoding?: string;
}

export interface PrintJob {
    text: string;
    options?: PrinterOptions;
}