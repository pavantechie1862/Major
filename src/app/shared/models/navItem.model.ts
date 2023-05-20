export interface navItem{
    title:String;
    slug:String;
    icon?:String;
    children?:childItem[];
}

export interface childItem {
    title:String;
    slug:String;
    children?:childItem[];
}