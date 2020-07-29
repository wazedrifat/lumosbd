import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyStatsPageRoutingModule } from './my-stats-routing.module';

import { MyStatsPage } from './my-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyStatsPageRoutingModule
  ],
  declarations: [MyStatsPage]
})
export class MyStatsPageModule {}
