import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardviewPageRoutingModule } from './cardview-routing.module';

import { CardviewPage } from './cardview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardviewPageRoutingModule
  ],
  declarations: [CardviewPage]
})
export class CardviewPageModule {}
