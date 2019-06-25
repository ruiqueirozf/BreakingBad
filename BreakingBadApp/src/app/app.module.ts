import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { NavbarComponent } from './navbar/navbar.component';
import { GridresultadoComponent } from './gridresultado/gridresultado.component';
import { SugestaoComponent } from './sugestao/sugestao.component';
import { EpisodiosComponent } from './episodios/episodios.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      GridresultadoComponent,
      SugestaoComponent,
      EpisodiosComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      NgxPaginationModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
