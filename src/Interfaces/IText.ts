export interface IItem {
    TITLE: String;
    PRICE: Number;
}

export interface IPopup {
    TITLE: String;
    HEADER: String;
    BODY: Array<IItem>;
}
export interface IColumn {
    IMG?: String;
    ALLIGN?: String;
    LABEL?: String;
    ITEMS?: Array<IItem>;
}
export interface IContent {
    COL1: IColumn;
}

export interface IText {
    RESTURANT_NAME: String;
    POPUP: IPopup;
    BANNER: Array<Object>;
    CONTENT: Array<IContent>;
};