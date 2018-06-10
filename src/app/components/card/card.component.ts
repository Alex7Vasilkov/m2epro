import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Knowledge} from '../../model/knowledge.model';
import {Idea} from '../../model/idea.model';
import {DataCast} from '../../model/data-cast';

@Component({
    selector: 'm2e-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterViewInit {
    public articlesLength: number = 0;
    public hiddenArticle: boolean = false;
    public isLoaded: boolean = false;

    @ViewChild('card') card: ElementRef<any>;
    @Input() data: Knowledge | Idea;
    @Input() path: string;

    constructor(private dc: DataCast) {
    }

    ngOnInit() {
    }

    ngAfterViewInit(): void {
        this.cloneData();
        this.hideArticle();
    }

    private cloneData(): void {
        switch (this.path) {
            case 'knowledge': this.data = this.dc.cloneKnowledge(this.data); break;
            case 'ideas': this.data = this.dc.cloneIdea(this.data); break;
        }
    }

    private hideArticle(): void {
        let heightCard = this.card.nativeElement.clientHeight;
        this.articlesLength = this.data.articles.length;

        const id = setInterval(() => {
            if (heightCard > 320) {
                this.data.articles.pop();
                heightCard = this.card.nativeElement.clientHeight;
                this.hiddenArticle = true;
            } else {
                clearInterval(id);
                this.isLoaded = true;
            }
        }, 0);
    }
}
