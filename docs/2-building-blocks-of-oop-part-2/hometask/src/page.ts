export class Page {
    private readonly pageNumber: number;
    private readonly pageType: string;
    private readonly pageMaterial: string;

    constructor(pageNumber: number, pageType: string, pageMaterial: string) {
        this.pageNumber = pageNumber;
        this.pageType = pageType;
        this.pageMaterial = pageMaterial
    }

    toString(): string {
        return `here is page ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
    }
}
