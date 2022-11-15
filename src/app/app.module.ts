import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/LoginComponent/login.component';
import { ErrorComponent } from './Components/errorComponent/error.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { ControlPanelComponent } from './Components/control-panel/control-panel.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ErrorComponent, HomePageComponent, ControlPanelComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
