import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BibliComponent } from './bibli/bibli.component';
import { FilmViewComponent } from './film-view/film-view.component';
import { NewFilmsComponent } from './new-films/new-films.component';
import { NewThemesComponent } from './new-themes/new-themes.component';
import { ThemaViewComponent } from './thema-view/thema-view.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'bibli',
    component: BibliComponent
  },
  {
    path: 'film',
    component: FilmViewComponent
  },
  {
    path: 'thema',
    component: ThemaViewComponent
  },
  {
    path: 'newThemes',
    component: NewThemesComponent
  },
  {
    path: 'newFilms',
    component: NewFilmsComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
