import {Item} from "./item";
import {Pages} from "./pages";

export class Book extends Item {

    protected readonly pages: Pages;
    private _title: string;
    private _author: string;

    constructor(title: string, author: string, pages: Pages) {
        super();
        this.pages = pages;
        this._title = title;
        this._author = author;
    }


    set author(author: string) {
        this._author = author;
    }

    get author(): string {
        return this._author;
    }

    set title(title: string) {
        this._title = title;
    }

    get title(): string {
        return this._title;
    }


    toString(): string {
        return `Book: ${this._title} by ${this._author} with number of pages: ${this.pages.getPagesAmount()}`;
    }
}
