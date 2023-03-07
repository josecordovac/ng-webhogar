import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';


import { InvoicePage } from './invoice.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: InvoicePage
  }
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvoicePage]
})
export class InvoicePageModule {}
