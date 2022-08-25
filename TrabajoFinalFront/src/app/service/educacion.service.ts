import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  /*edu = 'http://localhost:8080/educacion/';*/
  edu = 'https://backendnic.herokuapp.com/educacion/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.edu + 'lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.edu + `detail/${id}`);
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.edu + 'create', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.edu + `update/${id}`, educacion);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.edu + `delete/${id}`);
  }
}
