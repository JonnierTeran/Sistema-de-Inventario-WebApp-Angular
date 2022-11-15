import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ControlPanelComponent } from './Components/control-panel/control-panel.component';
import { ErrorComponent } from './Components/errorComponent/error.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginComponent } from './Components/LoginComponent/login.component';

const routes: Routes = [
  {path:"" , component: LoginComponent },
  {path:'Inventory/User/Login' ,  component: LoginComponent},
  {path:"Control/Panel/Inventory" , component: ControlPanelComponent, children:[
    {path:'' ,  component: HomePageComponent},
    {path:'**' , component: ErrorComponent}


  ]},
  {path:'**' , component: ErrorComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
