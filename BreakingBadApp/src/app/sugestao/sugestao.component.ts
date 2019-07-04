import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.css']
})
export class SugestaoComponent implements OnInit {

  baseUrl = 'https://frontendtestesamba.free.beeceptor.com/breaking-bad/suggestions';

  // httpOptions = {responseType: 'text'};

  // httpOptions = {
  //   responseType: 'text'
  // };


  form: FormGroup;

  autor: '';
  mensagem: '';

  page: any;


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  doPost(autor: string, mensagem: string) {

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    this.http.post<any>(this.baseUrl,

      JSON.stringify({autor, mensagem }),

      { headers, responseType: 'text' as 'json'}

      ).subscribe(res => console.log(res));

    console.log(autor);
    console.log(mensagem);

  }


  enviarSugestao() {
    this.doPost(this.autor, this.mensagem);
  }

//   enviarSugestao(autor: string, mensagem: string): Observable<string> {
//     return this.http.post<any>(this.baseUrl,
//     this.form.value).subscribe((response) => {
//       console.log('response ', response);
//     });
// }


  // onSubmit(): void {
  //   console.log(this.form.value);
  // }

}
