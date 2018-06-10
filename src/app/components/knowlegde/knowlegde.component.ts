import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Model} from '../../model/repository.model';
import {Knowledge} from '../../model/knowledge.model';

@Component({
    selector: 'm2e-knowlegde',
    templateUrl: './knowlegde.component.html',
    styleUrls: ['./knowlegde.component.scss']
})
export class KnowlegdeComponent implements OnInit {
    public id: number;
    public isLoaded: boolean = false;
    public animate: boolean = false;

    constructor(private route: ActivatedRoute,
                private repository: Model) {
    }

    ngOnInit() {
        this.route.params.forEach(
            (params: Params) => {
                this.id = +params['id'];
                this.runAnimate();
            }
        );
    }

    get knowledge(): Knowledge {
        return this.repository.getKnowledge(this.id);
    }

    get knowledges(): Knowledge[] {
        return this.repository.getKnowledges();
    }

    private runAnimate(): void {
        this.animate = false;
        setTimeout(() =>  this.isLoaded = this.animate = true, 0);
    }
}
