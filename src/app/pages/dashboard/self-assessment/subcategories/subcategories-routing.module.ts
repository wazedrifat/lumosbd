import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcategoriesPage } from './subcategories.page';

const routes: Routes = [
  {
    path: '',
    component: SubcategoriesPage
  },
  {
    path: 'selected-topics',
    loadChildren: () => import('./selected-topics/selected-topics.module').then( m => m.SelectedTopicsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcategoriesPageRoutingModule {}
