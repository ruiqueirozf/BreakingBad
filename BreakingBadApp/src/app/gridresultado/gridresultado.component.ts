import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gridresultado',
  templateUrl: './gridresultado.component.html',
  styleUrls: ['./gridresultado.component.css']
})
export class GridresultadoComponent implements OnInit {

  aFiltroLista: string;
  personagensFiltrados: any;
  personagens: any;
  page: any;

  // altura e largura das imagens dos personagens
  imagemAltura = 260;
  imagemLargura = 200;

  get filtroLista(): string {
    return this.aFiltroLista;
  }

  set filtroLista(value: string) {
    this.aFiltroLista = value;
    this.personagensFiltrados = this.filtrarPersonagens(value);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // chamar o método getPersonagens para inciar o sistema com a variavel já preenchida com os personagens.
    this.getPersonagens();
  }

  // método para filtrar os personagens
  filtrarPersonagens(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.personagens.filter(
      personagem => personagem.name.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  // método para filtrar os personagens vivos
  filtrarVivos(): any {
    status = 'Alive';
    status = status.toLocaleLowerCase();
    this.personagensFiltrados = this.personagens;

    console.log('Entrou vivo'); // teste

    return this.personagensFiltrados.filter(
      personagem => personagem.name.toLocaleLowerCase().indexOf(this.aFiltroLista) !== -1 &&
      personagem.status.toLocaleLowerCase().indexOf(status) !== -1
    );
  }

  // método para filtrar os personagens mortos
  filtrarMortos(): any {
    status = 'Deceased';
    status = status.toLocaleLowerCase();
    this.personagensFiltrados = this.personagens;

    console.log('Entrou morto'); // teste

    return this.personagensFiltrados.filter(
      personagem => personagem.name.toLocaleLowerCase().indexOf(this.aFiltroLista) !== -1 &&
      personagem.status.toLocaleLowerCase().indexOf(status) !== -1
    );
  }

  // metodo get simples para consumir a api e preencher as variáveis com os personagens da série
  getPersonagens() {
    this.http.get('https://www.breakingbadapi.com/api/characters').subscribe(response => {
      this.personagens = response;
      this.personagensFiltrados = response;
      console.log(response); // teste
     }, error => {
       console.log(error);
     });
  }

  // Métodos para preencher a variavel com os personagens já filtrados.
  getPersonagensVivos() {
    this.personagensFiltrados = this.filtrarVivos();
  }

  getPersonagensMortos() {
    this.personagensFiltrados = this.filtrarMortos();
  }
}
