import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedTopicsPageRoutingModule } from './selected-topics-routing.module';

import { SelectedTopicsPage } from './selected-topics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedTopicsPageRoutingModule
  ],
  declarations: [SelectedTopicsPage]
})
export class SelectedTopicsPageModule {}
