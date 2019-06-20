import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { NavbarComponent } from './navbar/navbar.component';
import { GridresultadoComponent } from './gridresultado/gridresultado.component';
import { SugestaoComponent } from './sugestao/sugestao.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      GridresultadoComponent,
      SugestaoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
