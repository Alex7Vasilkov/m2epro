export class Knowledge {
    constructor(
        public id?: number,
        public title?: string,
        public articles?: Array<Article>
    ) {}
}

export class Article {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string
    ) {}
}

