import {Injectable} from '@angular/core';
import {ModelModule} from './model.module';
import {Subject} from 'rxjs/internal/Subject';

@Injectable({
    providedIn: ModelModule
})
export class DataCast {

    componentActionSource = new Subject<any>();
    componentAction$ = this.componentActionSource.asObservable();

    constructor() {
    }

    public cloneKnowledge(obj: Knowledge | any): Knowledge {
        return new Knowledge(obj);
    }

    public cloneIdea(obj: Idea | any): Idea {
        return new Idea(obj);
    }

    public action(status): void {
        this.componentActionSource.next(status);
    }
}

class Knowledge {
    public id: number;
    public title: string;
    public articles: Array<Article>;

    constructor(obj: Knowledge) {
        this.id = obj && obj.id;
        this.title = obj && obj.title;
        this.articles = obj && obj.articles ? obj.articles.map((art: Article) => new Article(art)) : [];
    }
}

class Article {
    public id: number;
    public issuerId: number;
    public name: string;
    public description: string;

    constructor(obj: Article) {
        this.id = obj && obj.id;
        this.name = obj && obj.name;
        this.description = obj && obj.description;
    }
}

class Idea {
    public id: number;
    public title: string;
    public articles: Array<Suggestion>;

    constructor(obj: Idea) {
        this.id = obj && obj.id;
        this.title = obj && obj.title;
        this.articles = obj && obj.articles ? obj.articles.map((art: Suggestion) => new Suggestion(art)) : [];
    }
}

class Suggestion {
    public id: number;
    public issuerId: number;
    public votes: number;
    public name: string;
    public description: string;
    public author: string;
    public dateIdea: number;
    public comments: Array<Comments>;

    constructor(obj: Suggestion) {
        this.id = obj && obj.id;
        this.votes = obj && obj.votes;
        this.name = obj && obj.name;
        this.description = obj && obj.description;
        this.author = obj && obj.author;
        this.dateIdea = obj && obj.dateIdea;
        this.comments = obj && obj.comments ? obj.comments.map((art: Comments) => new Comments(art)) : [];
    }
}

class Comments {
    public id: number;
    public author: string;
    public date: number;
    public comment: string;
    public avatar: string;

    constructor(obj: Comments) {
        this.id = obj && obj.id;
        this.author = obj && obj.author;
        this.date = obj && obj.date;
        this.comment = obj && obj.comment;
        this.avatar = obj && obj.avatar;
    }
}
