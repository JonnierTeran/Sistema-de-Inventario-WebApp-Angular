import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorComponent } from './Components/errorComponent/error.component';
import { LoginComponent } from './Components/LoginComponent/login.component';

const routes: Routes = [
  {path:"" , component: LoginComponent },
  {path:"Home" , component: AppComponent},
  {path:'Inventory/User/Login' ,  component: LoginComponent},
  {path:'Error' , component: ErrorComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
