import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'm2e-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public searchActive: any = {active: false, show: false, invisible: true};

    @ViewChild('info') info: ElementRef<any>;
    @ViewChild('base') base: ElementRef<any>;
    @ViewChild('ideas') ideas: ElementRef<any>;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    public search(info): void {
        this.router.navigate(['/search']);
        this.base.nativeElement.classList.value = 'list-group-item list-group-item-action';
        this.ideas.nativeElement.classList.value = 'list-group-item list-group-item-action';
        this.searchActive = {active: true, show: true, invisible: false};
    }

    public hideSearch(): void {
        this.searchActive.invisible = true;
        this.info.nativeElement.value = null;
    }
}
