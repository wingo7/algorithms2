import {Item} from "./item";
import {Pages} from "./pages";

export class Magazine extends Item {

    private readonly pages: Pages;
    private _title: string;

    constructor(pages: Pages, title: string) {
        super();
        this._title = title;
        this.pages = pages;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.getPagesAmount()}`;
    }
}
