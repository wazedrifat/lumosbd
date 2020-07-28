import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyExamPageRoutingModule } from './weekly-exam-routing.module';

import { WeeklyExamPage } from './weekly-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyExamPageRoutingModule
  ],
  declarations: [WeeklyExamPage]
})
export class WeeklyExamPageModule {}
