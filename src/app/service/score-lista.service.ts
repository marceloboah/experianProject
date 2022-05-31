import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ScoreList } from 'src/model/score-list';
import { Token } from 'src/model/token';
import { TokenService } from '../service/token.service';



@Injectable({
  providedIn: 'root'
})
export class ScoreListaService {

    pessoasList: ScoreList[];
    pessoas: ScoreList = {
      id: null,
      scoreDescricao: null,
      inicial: null,
      final: null
    }
    

  baseUrl:string = "http://localhost:9099"
  objToken:any = null;
  constructor(public http:HttpClient, private tokenService:TokenService) {  }


  public getAll() : Observable<any>{
    this.tokenService.getToken();
    this.objToken=this.tokenService.getToken();
    var headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    var token = 'Bearer '+localStorage.getItem("experian-token");
    headers.set('Authorization',token);
    var url = this.baseUrl+ "/score";
    return this.http.get(url, {headers: headers });

  }




}