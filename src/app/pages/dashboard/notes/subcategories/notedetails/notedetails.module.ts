import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotedetailsPageRoutingModule } from './notedetails-routing.module';

import { NotedetailsPage } from './notedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotedetailsPageRoutingModule
  ],
  declarations: [NotedetailsPage]
})
export class NotedetailsPageModule {}
