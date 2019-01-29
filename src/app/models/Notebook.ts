export interface Page {
    id:number;
    Title: string;
    Content: string;
}

export interface Notebook {
    id:number;
    Title: string;
    Pages: Page[];
}
