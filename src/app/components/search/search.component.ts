import {Component, OnInit} from '@angular/core';
import {Article, Knowledge} from '../../model/knowledge.model';
import {Model} from '../../model/repository.model';
import {Idea, Suggestion} from '../../model/idea.model';

@Component({
    selector: 'm2e-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    public filterMode: string = 'all';
    public isLoaded: boolean = false;
    public animate: boolean = false;
    private knowledges: Knowledge[] = [];
    private ideas: Idea[] = [];

    constructor(private repository: Model) {
    }

    ngOnInit() {
        this.getKnowledges();
        this.getIdeas();
        this.runAnimate();
    }

    get articles(): Article[] {
        return this.knowledges.map(know => know.articles).reduce((flat, current) => flat.concat(current), []);
    }

    get suggestions(): Suggestion[] {
        return this.ideas.map(know => know.articles).reduce((flat, current) => flat.concat(current), []);
    }

    changeFilterMode(newMode) {
        this.runAnimate();
        this.filterMode = newMode;
    }

    private getKnowledges(): void {
        this.knowledges = this.repository.getKnowledges();
    }

    private getIdeas() {
        this.ideas = this.repository.getIdeas();
    }

    private runAnimate(): void {
        this.animate = false;
        setTimeout(() =>  this.isLoaded = this.animate = true, 100);
    }
}
