
export class Idea {
    constructor(
        public id?: number,
        public title?: string,
        public articles?: Array<Suggestion>
    ) {}
}

export class Suggestion {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public author?: string,
        public dateIdea?: number,
        public comments?: Array<Comments>
    ) {}
}

export class Comments {
    constructor(
        public id?: number,
        public author?: string,
        public date?: number,
        public comment?: string,
        public avatar?: string
    ) {}
}

