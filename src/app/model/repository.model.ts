import {Injectable} from '@angular/core';
import {Knowledge} from './knowledge.model';
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

    public getIdeas(): Idea[] {
        return this.idea;
    }
}
