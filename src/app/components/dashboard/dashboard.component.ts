import {Component, OnInit} from '@angular/core';
import {Knowledge} from '../../model/knowledge.model';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Idea} from '../../model/idea.model';
import {Model} from '../../model/repository.model';

@Component({
    selector: 'm2e-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public path: string;

    constructor(private repository: Model,
                private router: Router,
                private route: ActivatedRoute) {
        router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(
            () => this.path = this.route.snapshot.url[0].path
        );
    }

    ngOnInit() {
    }

    get dataArr(): Knowledge[] | Idea[] {
        switch (this.path) {
            case 'knowledge': return this.repository.getKnowledges();
            case 'ideas': return this.repository.getIdeas();
        }
    }
}
