import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotedetailsPage } from './notedetails.page';

const routes: Routes = [
  {
    path: '',
    component: NotedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotedetailsPageRoutingModule {}
