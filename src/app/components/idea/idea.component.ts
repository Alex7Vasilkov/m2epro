import { Component, OnInit } from '@angular/core';
import {Model} from '../../model/repository.model';
import {ActivatedRoute, Params} from '@angular/router';
import {Idea} from '../../model/idea.model';

@Component({
  selector: 'm2e-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.scss']
})
export class IdeaComponent implements OnInit {
    public id: number;
    public isLoaded: boolean = false;
    public animate: boolean = false;
    public filterMode: string = 'hot';

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

    get idea(): Idea {
        return this.repository.getIdea(this.id);
    }

    get ideas(): Idea[] {
        return this.filter(this.filterMode);
       /* return this.repository.getIdeas();*/
    }

    public changeFilterMode(newMode): void {
        this.filterMode = newMode;
    }

    private filter(mode): Idea[] {
        switch (mode) {
            case 'hot': return this.repository.getIdeas();
            case 'top': return this.repository.getIdeas();
            case 'new': return this.repository.getIdeas();
        }
    }

    private runAnimate(): void {
        this.animate = false;
        setTimeout(() =>  this.isLoaded = this.animate = true, 0);
    }
}
