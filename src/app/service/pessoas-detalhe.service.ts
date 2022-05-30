import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PessoasList } from 'src/model/pessoas-list';
import { Token } from 'src/model/token';
import { TokenService } from '../service/token.service';



@Injectable({
  providedIn: 'root'
})
export class PessoasDetalheService {

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


  public getPessoasById(id:any) : Observable<any>{

    var headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    headers.set('Authorization','Bearer '+localStorage.getItem("experian-token"));
    return this.http.get(this.baseUrl+ "/pessoa/"+id, {headers: headers });

  }

  public getPessoasByPathId(path:any) : Observable<any>{
    
        var headers = new HttpHeaders();
        headers.set('Content-Type','application/json');
        headers.set('Authorization','Bearer '+localStorage.getItem("experian-token"));
        var findId = path.split("/");
        return this.http.get(this.baseUrl+ "/pessoa/" + findId[2], {headers: headers });
    
  }



}