import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyStatsPage } from './my-stats.page';

const routes: Routes = [
  {
    path: '',
    component: MyStatsPage
  },
  {
    path: 'self-assessment',
    loadChildren: () => import('./self-assessment/self-assessment.module').then( m => m.SelfAssessmentPageModule)
  },
  {
    path: 'weekly-exams',
    loadChildren: () => import('./weekly-exams/weekly-exams.module').then( m => m.WeeklyExamsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyStatsPageRoutingModule {}
