import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartExamPageRoutingModule } from './start-exam-routing.module';

import { StartExamPage } from './start-exam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartExamPageRoutingModule
  ],
  declarations: [StartExamPage]
})
export class StartExamPageModule {}
