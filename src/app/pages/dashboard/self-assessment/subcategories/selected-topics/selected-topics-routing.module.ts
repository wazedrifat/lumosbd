import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedTopicsPage } from './selected-topics.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedTopicsPage
  },
  {
    path: 'generate-exams',
    loadChildren: () => import('./generate-exams/generate-exams.module').then( m => m.GenerateExamsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedTopicsPageRoutingModule {}
