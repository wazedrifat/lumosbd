import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeeklyExamsPageRoutingModule } from './weekly-exams-routing.module';

import { WeeklyExamsPage } from './weekly-exams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeeklyExamsPageRoutingModule
  ],
  declarations: [WeeklyExamsPage]
})
export class WeeklyExamsPageModule {}
