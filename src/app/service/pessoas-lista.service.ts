import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoasList } from 'src/model/pessoas-list';
import { Token } from 'src/model/token';
import { TokenService } from '../service/token.service';



@Injectable({
  providedIn: 'root'
})
export class PessoasListaService {

    pessoasList: PessoasList[];
    pessoas: PessoasList = {
      id: null,
      nome: null,
      idade: null,
      cidade: null,
      estado: null,
      scoreDescricao: null,
      estados: null
    }
    selectedPessoas: PessoasList = {
      id: null,
      nome: null,
      idade: null,
      cidade: null,
      estado: null,
      scoreDescricao: null,
      estados: null
    }

  baseUrl:string = "http://localhost:9099"
  objToken:any = null;
  constructor(public http:HttpClient, private tokenService:TokenService) {  }


  public getAll() : Observable<any>{
    this.tokenService.getToken();
    console.log(localStorage.getItem("experian-token"));
    console.log("PessoasListaService");

    this.objToken=this.tokenService.getToken();
    var headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    var token = 'Bearer '+localStorage.getItem("experian-token");
    console.log("token COM Bearer");
    console.log(token);
    headers.set('Authorization',token);
    console.log(this.baseUrl+ "/pessoa", {headers: headers });
    var url = this.baseUrl+ "/pessoa";
    return this.http.get(url, {headers: headers });

  }




}