import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {KnowlegdeComponent} from './components/knowlegde/knowlegde.component';
import {IdeaComponent} from './components/idea/idea.component';
import {KnowledgeDetailedComponent} from './components/knowledge-detailed/knowledge-detailed.component';
import {IdeaDetailedComponent} from './components/idea-detailed/idea-detailed.component';
import {SearchComponent} from './components/search/search.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            {path: '', pathMatch: 'full', redirectTo: '/knowledge'},
            {path: 'knowledge', component: DashboardComponent},
            {path: 'knowledge/:id', component: KnowlegdeComponent},
            {path: 'knowledge/:id/detailed/:artId', component: KnowledgeDetailedComponent},
            {path: 'ideas', component: DashboardComponent},
            {path: 'ideas/:id', component: IdeaComponent},
            {path: 'ideas/:id/detailed/:artId', component: IdeaDetailedComponent},
            {path: 'search', component: SearchComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
