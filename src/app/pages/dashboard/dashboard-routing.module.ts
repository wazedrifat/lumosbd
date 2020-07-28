import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'flashcard',
    loadChildren: () => import('./flashcard/flashcard.module').then( m => m.FlashcardPageModule)
  },
  {
    path: 'leaderboard',
    loadChildren: () => import('./leaderboard/leaderboard.module').then( m => m.LeaderboardPageModule)
  },
  {
    path: 'my-contents',
    loadChildren: () => import('./my-contents/my-contents.module').then( m => m.MyContentsPageModule)
  },
  {
    path: 'my-stats',
    loadChildren: () => import('./my-stats/my-stats.module').then( m => m.MyStatsPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'self-assessment',
    loadChildren: () => import('./self-assessment/self-assessment.module').then( m => m.SelfAssessmentPageModule)
  },
  {
    path: 'weekly-exam',
    loadChildren: () => import('./weekly-exam/weekly-exam.module').then( m => m.WeeklyExamPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'change-photo',
    loadChildren: () => import('./change-photo/change-photo.module').then( m => m.ChangePhotoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
