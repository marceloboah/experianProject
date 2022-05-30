import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from 'src/model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
/*
  baseUrl:string = "http://localhost:9099/api"

  constructor(private http:HttpClient) { }


  getAll() : Observable<any>{
      return this.http.get(this.baseUrl+ "/persona")
  }

  save(persona: Persona) : Observable<any>{
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    return this.http.post(this.baseUrl+ "/persona", persona, {headers: headers})
  }

  edit(persona: Persona) : Observable<any>{
    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');
    return this.http.put(this.baseUrl+ "/persona", persona, {headers: headers})
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+ "/persona/"+ id)
  }
*/

}
