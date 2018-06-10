import {Component, OnInit} from '@angular/core';
import {Model} from '../../model/repository.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Idea, Suggestion} from '../../model/idea.model';

@Component({
    selector: 'm2e-idea-detailed',
    templateUrl: './idea-detailed.component.html',
    styleUrls: ['./idea-detailed.component.scss']
})
export class IdeaDetailedComponent implements OnInit {
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

    get idea(): Idea {
        return this.repository.getIdea(this.id);
    }

    get suggestion(): Suggestion {
        return this.repository.getSuggestion(this.id, this.artId);
    }

    private runAnimate(): void {
        this.animate = false;
        setTimeout(() =>  this.isLoaded = this.animate = true, 0);
    }

}
