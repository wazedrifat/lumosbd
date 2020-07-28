import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartExamPage } from './start-exam.page';

const routes: Routes = [
  {
    path: '',
    component: StartExamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartExamPageRoutingModule {}
