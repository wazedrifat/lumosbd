import { Facebook } from '@ionic-native/facebook/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage],
  providers: [GooglePlus, Facebook]
})
export class LoginPageModule {}
