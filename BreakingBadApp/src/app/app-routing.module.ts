import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridresultadoComponent } from './gridresultado/gridresultado.component';
import { SugestaoComponent } from './sugestao/sugestao.component';
import { EpisodiosComponent } from './episodios/episodios.component';

const routes: Routes = [
  { path: 'personagens', component: GridresultadoComponent },
  { path: 'sugestao', component: SugestaoComponent },
  { path: 'episodios', component: EpisodiosComponent },
  { path: '', redirectTo: 'personagens', pathMatch: 'full' },
  { path: '**', redirectTo: 'personagens', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
