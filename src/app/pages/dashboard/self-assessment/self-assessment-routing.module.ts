import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelfAssessmentPage } from './self-assessment.page';

const routes: Routes = [
  {
    path: '',
    component: SelfAssessmentPage
  },
  {
    path: 'subcategories',
    loadChildren: () => import('./subcategories/subcategories.module').then( m => m.SubcategoriesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelfAssessmentPageRoutingModule {}
