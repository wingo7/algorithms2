import {Item} from "./item";
import {Pages} from "./pages";

export class Comics extends Item {
    protected readonly pages: Pages;
    private _title: string;
    private _author: string;
    private _artist: string;

    constructor(pages: Pages, title: string, author: string, artist: string) {
        super();
        this.pages = pages;
        this._title = title;
        this._artist = artist;
        this._author = author;
    }

    get author(): string {
        return this._author;
    }

    set author(author: string) {
        this._author = author;
    }

    get artist(): string {
        return this._artist;
    }

    set artist(title: string) {
        this._artist = title;
    }

    get title(): string {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    toString() {
        return `Comics: ${this._title} by ${this._author}, the artist is ${this._artist}, number of pages: ${this.pages.getPagesAmount()}`;
    }
}
