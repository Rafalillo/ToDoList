import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebService {

  APIURL = "http://localhost:7070/api";
  constructor(private http: HttpClient){}

  getTask(){
    return this.http.get(this.APIURL + '/tareas').toPromise();
  }
  postTask(tarea){
    return this.http.post(this.APIURL + '/tarea', tarea).toPromise();
  }
}
