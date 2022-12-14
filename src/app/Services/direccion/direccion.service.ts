import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DireccionService {
  public url: string;
  constructor(
    public _http: HttpClient
  ) {
    this.url = "http://localhost:8080/Direccion"
  }
  postDireccion(data:any):Observable<any>{
    return this._http.post(this.url,data);
  }
}
