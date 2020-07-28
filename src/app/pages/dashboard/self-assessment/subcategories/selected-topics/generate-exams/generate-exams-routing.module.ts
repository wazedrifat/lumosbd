import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerateExamsPage } from './generate-exams.page';

const routes: Routes = [
  {
    path: '',
    component: GenerateExamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerateExamsPageRoutingModule {}
