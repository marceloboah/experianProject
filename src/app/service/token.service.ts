import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from 'src/model/token';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

    baseUrl:string = "http://localhost:9099"
    objToken:any=null;
    constructor(public http:HttpClient) {
      this.http = http;
     }

    getToken(){
        var headers = new HttpHeaders();
        headers.set('Content-Type','application/json');
        var body = new HttpParams();
        body = body.set('username', 'marcelo');
        body = body.set('password', 'usersecretforjwtauthenticateoratoroeuaroupadoreideromalalalameudeuscomoessabencaodechave');
        this.http.post<Token>(this.baseUrl+ "/authenticate", {headers: headers, params: body }).subscribe(data => {
          this.objToken = data.jwttoken;
          localStorage.setItem("experian-token", this.objToken);
        });
        
    }
}