import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliComponent } from '../bibli/bibli.component';
import { FilmViewComponent } from '../film-view/film-view.component';
import { NewFilmsComponent } from '../new-films/new-films.component';
import { NewThemeFormComponent } from '../new-theme-form/new-theme-form.component';
import { NewThemesComponent } from '../new-themes/new-themes.component';

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
      {
        path: 'newThemes',
        component: NewThemesComponent
      },
      {
        path: 'newFilms',
        component: NewFilmsComponent
      },
      // {
      //   path: 'tab3',
      //   loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      // },
      {
        path: '',
        redirectTo: '/tabs/bibli',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/bibli',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
