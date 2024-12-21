import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ConsumerService {
  baseUrl: string = 'http://localhost:3000/';
  constructor(private _http: HttpClient) {}

  get<T>(endpoint: string, id: number = 0) {
    return id != 0
      ? this._http.get<T>(`${this.baseUrl}${endpoint}/${id}`)
      : this._http.get<T>(`${this.baseUrl}${endpoint}`);
  }
  add<T>(endpoint: string, body: any) {
    return this._http.post<T>(`${this.baseUrl}${endpoint}`, body);
  }
  update<T>(endpoint: string, body: any, id: number) {
    return this._http.put<T>(`${this.baseUrl}${endpoint}/${id}`, body);
  }
  delete<T>(endpoint: string, id: number) {
    return this._http.delete<T>(`${this.baseUrl}${endpoint}/${id}`);
  }


  //getProductsByCategory(endpoint: string, idC: any) {
    //return this._http.get<Product[]>(`${this.baseUrl}${endpoint}`)
     // .pipe(
      //map((element) =>
       // element.filter((e:Product)=>e.categoryId==idC)
      //)
    //)
  //}
}
