import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


import { LoginPage } from './login.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonsModule } from 'app/commons/commons.module';
import { CoreModule } from 'app/core/core.module';


const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CommonsModule,
    CoreModule,
  ],
  exports: [
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
