import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WebService {

  APIURL = "http://localhost:7070/api";

  tareas: any;
  respuesta: any;

  constructor(private http: HttpClient) {
    this.tareas = [];
    this.getTask();
  }

  async getTask() {
    this.respuesta = await this.http.get(this.APIURL + '/tareas').toPromise();
    this.tareas = this.respuesta;
  }
  async postTask(tarea) {
    this.respuesta = await this.http.post(this.APIURL + '/tarea', tarea).toPromise();
    this.tareas.push(this.respuesta);
  }
}
