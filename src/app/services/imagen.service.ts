import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  private urlApi = 'https://localhost:7041/api/Imagen/Lista/'

  constructor(private http: HttpClient) { }
  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }



}
