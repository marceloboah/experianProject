import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from 'src/model/token';
import { TokenService } from '../service/token.service';



@Injectable({
  providedIn: 'root'
})
export class AfinidadeCadastroService {

  baseUrl:string = "http://localhost:9099"
  objToken:any = null;
  constructor(private http:HttpClient, private tokenService:TokenService) { }


  public save(afinidade:any,estados:any[]){
    let estadosList: string[]=[];
    if(estados!=null){    
      let valida = estados;
      for (var index = 0; index < valida.length; index++) {
        var element = valida[index];
        estadosList[index]=element.uf;
        afinidade.estados=estadosList;
      }
    }
    
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    var token = 'Bearer '+localStorage.getItem("experian-token");
    headers.set('Authorization',token);
    return this.http.post(this.baseUrl+ "/afinidade", afinidade, {headers: headers})
  }


}
