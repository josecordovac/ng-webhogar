import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './business/login/login.module#LoginPageModule' },
  // { path: 'register', loadChildren: './business/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './business/about/about.module#AboutPageModule' },
  { path: 'invoice', loadChildren: './business/invoice/invoice.module#InvoicePageModule' },
  { path: 'home', loadChildren: './business/home/home.module#HomePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
