import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sugestao',
  templateUrl: './sugestao.component.html',
  styleUrls: ['./sugestao.component.css']
})
export class SugestaoComponent implements OnInit {

  baseUrl = 'https://frontendtestesamba.free.beeceptor.com/breaking-bad/suggestions';
  form: FormGroup;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  enviarSugestao(autor: string, mensagem: string): Observable<string> {
    return this.http.post<any>(
      this.baseUrl,
      JSON.stringify(this.form));

  }

  // onSubmit(): void {
  //   console.log(this.form.value);
  // }

}
