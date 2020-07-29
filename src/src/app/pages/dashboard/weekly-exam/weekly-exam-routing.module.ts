import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyExamPage } from './weekly-exam.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyExamPage
  },
  {
    path: 'start-exam',
    loadChildren: () => import('./start-exam/start-exam.module').then( m => m.StartExamPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyExamPageRoutingModule {}
