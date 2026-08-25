import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../modelo/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private urlBackend = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) { }

  obterProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.urlBackend);
  }
}