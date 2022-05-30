import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoasCadastro } from 'src/model/pessoas-cadastro';
import { Token } from 'src/model/token';
import { TokenService } from '../service/token.service';



@Injectable({
  providedIn: 'root'
})
export class PessoasCadastroService {

  baseUrl:string = "http://localhost:9099"
  objToken:any = null;
  constructor(private http:HttpClient, private tokenService:TokenService) { }


  


  public getListAfinidades() : Observable<any>{
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
    console.log(this.baseUrl+ "/afinidade", {headers: headers });
    var url = this.baseUrl+ "/afinidade";
    return this.http.get(url, {headers: headers });

  }

  public save(pessoa:any){
    console.log("pessoa");
    console.log(pessoa);
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    var token = 'Bearer '+localStorage.getItem("experian-token");
    headers.set('Authorization',token);
    return this.http.post(this.baseUrl+ "/pessoa", pessoa, {headers: headers})
  }


}
