import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  episodios: any;
  aFiltroLista: string;
  episodiosFiltrados: any;
  pageActual = 1;

  get filtroLista(): string {
    return this.aFiltroLista;
  }

  set filtroLista(value: string) {
    this.aFiltroLista = value;
    this.episodiosFiltrados = this.filtrarEpisodios(value);
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEpisodios();
  }

  // metodo para filtrar os episódios
  filtrarEpisodios(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.episodios.filter(
      episodio => episodio.title.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  // metodo get simples para consumir a api e preencher as variáveis com os episódios da série.
  getEpisodios() {
    this.http.get('https://www.breakingbadapi.com/api/episodes').subscribe(response => {
      this.episodios = response;
      this.episodiosFiltrados = response;
      console.log(response);
     }, error => {
       console.log(error);
     });
  }
}
