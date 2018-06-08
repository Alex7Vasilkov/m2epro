import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'm2e-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public searchVisibility: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

}
