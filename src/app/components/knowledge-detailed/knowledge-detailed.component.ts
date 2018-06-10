import {Component, OnInit} from '@angular/core';
import {Model} from '../../model/repository.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Article, Knowledge} from '../../model/knowledge.model';

@Component({
    selector: 'm2e-knowledge-detailed',
    templateUrl: './knowledge-detailed.component.html',
    styleUrls: ['./knowledge-detailed.component.scss']
})
export class KnowledgeDetailedComponent implements OnInit {
    public id: number;
    public artId: number;
    public isLoaded: boolean = false;
    public animate: boolean = false;

    constructor(private route: ActivatedRoute,
                private repository: Model) {
    }

    ngOnInit() {
        this.route.params.forEach(
            (params: Params) => {
                this.id = +params['id'];
                this.artId = +params['artId'];
                this.runAnimate();
            }
        );
    }

    get knowledge(): Knowledge {
        return this.repository.getKnowledge(this.id);
    }

    get article(): Article {
        return this.repository.getArticle(this.id, this.artId);
    }

    /*get knowledges(): Knowledge[] {
        return this.repository.getKnowledges();
    }*/

    private runAnimate(): void {
        this.animate = false;
        setTimeout(() =>  this.isLoaded = this.animate = true, 0);
    }

}
