import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyContentsPageRoutingModule } from './my-contents-routing.module';

import { MyContentsPage } from './my-contents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyContentsPageRoutingModule
  ],
  declarations: [MyContentsPage]
})
export class MyContentsPageModule {}
