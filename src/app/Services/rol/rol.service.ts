import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RolService {
  public url: string;
  constructor(
    public _http: HttpClient
  ) {
    this.url = "http://localhost:8080/Rol"
  }

  getRol(user:any): Observable<any>{
    return this._http.put(this.url+"/User",user);
  }
}
