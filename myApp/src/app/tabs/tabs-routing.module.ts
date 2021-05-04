import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliComponent } from '../bibli/bibli.component';
import { FilmViewComponent } from '../film-view/film-view.component';
import { ThemaViewComponent } from '../thema-view/thema-view.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'bibli',
        component: BibliComponent
      },
      {
        path: 'film',
        component: FilmViewComponent
      },
      // {
      //   path: 'thema',
      //   component: ThemaViewComponent
      // },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
