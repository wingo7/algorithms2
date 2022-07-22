export class Page {
    private pageNumber: number;
    private pageType: string;
    private pageMaterial: string;

    constructor(pageNumber: number, pageType: string, pageMaterial: string) {
        this.pageNumber = pageNumber;
        this.pageType = pageType;
        this.pageMaterial = pageMaterial
    }
}
