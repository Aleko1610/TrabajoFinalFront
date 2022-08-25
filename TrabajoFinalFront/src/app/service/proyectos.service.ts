import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  /*proy = 'http://localhost:8080/proyectos/';*/
  proy = 'https://backendnic.herokuapp.com/proyectos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.proy + 'lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.proy + `detail/${id}`);
  } 

  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.proy + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.proy + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.proy + `delete/${id}`);
  }
}
