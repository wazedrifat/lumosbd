import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyContentsPage } from './my-contents.page';

const routes: Routes = [
  {
    path: '',
    component: MyContentsPage
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyContentsPageRoutingModule {}
