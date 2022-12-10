import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  constructor(
    public _http: HttpClient
  ) {
    this.url = "http://localhost:8080/User"
  }

  getUsers(): Observable<any>{
    return this._http.get(this.url)
  }
  matchUser(data: any): Observable<any>{
    return this._http.post(this.url+'/login',data);
  }
}
