import {Component, OnInit} from '@angular/core';
import {Article, Knowledge} from '../../model/knowledge.model';
import {Model} from '../../model/repository.model';
import {Idea, Suggestion} from '../../model/idea.model';
import {DataCast} from '../../model/data-cast';

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

    constructor(private repository: Model,
                private dc: DataCast) {
    }

    ngOnInit() {
        this.dc.action('open');
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

    public clearSearch(): void {
        this.dc.action('clear');
    }

    public changeFilterMode(newMode): void {
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
