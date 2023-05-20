export class Filter {
    name:string;
    filters:Array<string>;
    constructor(name:string,filters:Array<string>) {
        this.name=name;
        this.filters=filters;
    }
}