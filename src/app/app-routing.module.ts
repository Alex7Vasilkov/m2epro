import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            {path: '', pathMatch: 'full', redirectTo: '/knowledge'},
            {path: 'knowledge', component: DashboardComponent},
            /*{path: 'knowledge/:id', },*/
            {path: 'ideas', component: DashboardComponent},
            {path: 'search', component: DashboardComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
