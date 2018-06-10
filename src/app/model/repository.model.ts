import {Injectable} from '@angular/core';
import {Article, Knowledge} from './knowledge.model';
import {Idea} from './idea.model';
import {StaticDatasource} from './static.datasource';
import {ModelModule} from './model.module';

@Injectable({
    providedIn: ModelModule
})
export class Model {
    private knowledge: Knowledge[] = [];
    private idea: Idea[] = [];

    constructor(private dataSource: StaticDatasource) {
        dataSource.getKnowledges().subscribe(data => this.knowledge = data);
        dataSource.getIdeas().subscribe(data => this.idea = data);
    }

    public getKnowledges(): Knowledge[] {
        return this.knowledge;
    }

    public getKnowledge(id: number): Knowledge {
        return this.knowledge.filter(know => know.id === id)[0];
    }

    public getArticle(id: number, artId: number): Article {
        return this.knowledge.filter(know => know.id === id)[0].articles[--artId];
    }

    public getIdeas(): Idea[] {
        return this.idea;
    }

    public getIdea(id: number): Idea {
        return this.idea.filter(idea => idea.id === id)[0];
    }
}
