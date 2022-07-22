import {Page} from "./page";
import {Item} from "./item";

export class Pages {
    private pages: Page[];

    constructor(pages: Page[]) {
        this.pages = pages;
    }

    public getPagesAmount() {
        return this.pages.length;
    }

    public getItemPages(item: Item): Page[] {
        return this.pages.map((page) => {
            const pageDescription = String(page);

            page.toString = () => `${item}, ${pageDescription}`;

            return page;
        });
    }
}
