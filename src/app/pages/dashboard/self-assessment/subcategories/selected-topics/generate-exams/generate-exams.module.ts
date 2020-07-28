import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerateExamsPageRoutingModule } from './generate-exams-routing.module';

import { GenerateExamsPage } from './generate-exams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerateExamsPageRoutingModule
  ],
  declarations: [GenerateExamsPage]
})
export class GenerateExamsPageModule {}
