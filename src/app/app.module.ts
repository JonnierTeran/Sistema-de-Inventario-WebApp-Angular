import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/LoginComponent/login.component';
import { ErrorComponent } from './Components/errorComponent/error.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './Components/home-page-Component/home-page.component';
import { ControlPanelComponent } from './Components/control-panel-Component/control-panel.component';
import { ProveedoresComponent } from './Components/proveedoresComponent/proveedores.component';
import { FormProveedoresComponent } from './Components/form-proveedoresComponent/form-proveedores.component';
import { ListadoProveedoresComponent } from './Components/listado-proveedoresComponent/listado-proveedores.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, ErrorComponent, HomePageComponent, ControlPanelComponent, ProveedoresComponent, FormProveedoresComponent, ListadoProveedoresComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
