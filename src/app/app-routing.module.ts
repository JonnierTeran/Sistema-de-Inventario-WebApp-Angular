import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ControlPanelComponent } from './Components/control-panel-Component/control-panel.component';
import { ErrorComponent } from './Components/errorComponent/error.component';
import { FormProveedoresComponent } from './Components/form-proveedoresComponent/form-proveedores.component';
import { HomePageComponent } from './Components/home-page-Component/home-page.component';
import { ListadoProveedoresComponent } from './Components/listado-proveedoresComponent/listado-proveedores.component';
import { LoginComponent } from './Components/LoginComponent/login.component';
import { ProveedoresComponent } from './Components/proveedoresComponent/proveedores.component';


const routes: Routes = [
  {path:"" , component: LoginComponent },
  {path:'Inventory/User/Login' ,  component: LoginComponent},
  {path:"Control/Panel/Inventory" , component: ControlPanelComponent, children:[
    {path:'Home' ,  component: HomePageComponent},
    {path:'Proveedores' , component: ProveedoresComponent, children:[
          {path:'Formulario/Registro' , component: FormProveedoresComponent},
          {path:'Listado' , component:ListadoProveedoresComponent}]},
    {path:'**' , component: ErrorComponent}
  ]},
  {path:'**' , component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
