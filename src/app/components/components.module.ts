import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import {RouterModule} from '@angular/router';
import { KnowlegdeComponent } from './knowlegde/knowlegde.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HomeComponent,
        DashboardComponent,
        CardComponent,
        KnowlegdeComponent
    ],
    exports: [
        HomeComponent,
        DashboardComponent,
        CardComponent
    ]
})
export class ComponentsModule {
}
