import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gridresultado',
  templateUrl: './gridresultado.component.html',
  styleUrls: ['./gridresultado.component.css']
})
export class GridresultadoComponent implements OnInit {

  aFiltroLista: string;
  personagensFiltrados: any = [];

  personagens: any;
  personagensMortos: any;

  baseUrl = 'https://frontendtestesamba.free.beeceptor.com/breaking-bad/suggestions';


  get filtroLista(): string {
    return this.aFiltroLista;
  }

  set filtroLista(value: string) {
    this.aFiltroLista = value;
    this.personagensFiltrados = this.filtroLista
     ? this.filtrarPersonagens(this.filtroLista)
     : this.personagens;
  }

  // get filtroVivos(): string {
  //   return this.aFiltroVivos;
  // }

  // set filtroVivos(value: string) {
  //   this.aFiltroVivos = value;
  //   this.personagensVivos = this.filtroVivos
  //    ? this.filtrarVivos()
  //    : this.personagens;
  // }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPersonagens();
  }

  filtrarPersonagens(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.personagens.filter(
      personagem => personagem.name.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  // // testeFiltro: any = [];
  // filtrarVivos(): any {

  //   this.testeFiltro = this.personagens.filter(
  //     personagem => personagem.status === 'Alive'
  //   );
  //   console.log(this.testeFiltro);
  //   return this.testeFiltro;
  // }

  getPersonagens() {
    this.http.get('https://www.breakingbadapi.com/api/characters').subscribe(response => {
      this.personagens = response;
      console.log(response);
     }, error => {
       console.log(error);
     });
  }

  getPersonagensMortos() {
    this.http.get('https://www.breakingbadapi.com/api/deaths').subscribe(response => {
      this.personagensMortos = response;
      console.log(response);
     }, error => {
       console.log(error);
     });
  }


  // postSugestao(message: string, author: string) {
  //   return this.http.post(this.baseUrl, sugestao);
  // }

}
