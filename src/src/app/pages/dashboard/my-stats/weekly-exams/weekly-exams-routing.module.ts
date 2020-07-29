import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeeklyExamsPage } from './weekly-exams.page';

const routes: Routes = [
  {
    path: '',
    component: WeeklyExamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeeklyExamsPageRoutingModule {}
