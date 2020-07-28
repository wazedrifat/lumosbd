import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcategoriesPage } from './subcategories.page';

const routes: Routes = [
  {
    path: '',
    component: SubcategoriesPage
  },
  {
    path: 'notedetails',
    loadChildren: () => import('./notedetails/notedetails.module').then( m => m.NotedetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcategoriesPageRoutingModule {}
