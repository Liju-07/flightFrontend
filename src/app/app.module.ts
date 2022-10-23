import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule} from '@angular/common/http'

const app:Routes=[
  {
    path:"",component:AddFlightComponent
  },
  {
    path:"addf",component:AddFlightComponent
  },
  {
    path:"viewf",component:ViewFlightComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFlightComponent,
    ViewFlightComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(app),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
