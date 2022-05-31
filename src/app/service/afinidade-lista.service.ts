import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoasCadastro } from 'src/model/pessoas-cadastro';
import { Token } from 'src/model/token';
import { TokenService } from '../service/token.service';



@Injectable({
  providedIn: 'root'
})
export class AfinidadeListaService {

  baseUrl:string = "http://localhost:9099"
  objToken:any = null;
  constructor(private http:HttpClient, private tokenService:TokenService) { }

  public getListAfinidades() : Observable<any>{
    this.tokenService.getToken();

    this.objToken=this.tokenService.getToken();
    var headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    var token = 'Bearer '+localStorage.getItem("experian-token");
    headers.set('Authorization',token);
    var url = this.baseUrl+ "/afinidade";
    return this.http.get(url, {headers: headers });

  }
}