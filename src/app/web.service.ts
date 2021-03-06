import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  APIURL = "http://localhost:7070/api";

  tareas: any;
  respuesta: any;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.tareas = [];
    this.getTask();
  }

  async getTask() {
    try {
      this.respuesta = await this.http.get(this.APIURL + '/tareas').toPromise();
      this.tareas = this.respuesta;
    } catch (error) {
      this.manejadorErrores('No se han podido obtener las tareas')
    }
    
  }
  async postTask(tarea) {
    try {
      this.respuesta = await this.http.post(this.APIURL + '/tarea', tarea).toPromise();
    this.tareas.push(this.respuesta);
    } catch (error) {
      this.manejadorErrores('No se ha podido cargar la tarea')
    }
    
  }

  private manejadorErrores(error) {
    this._snackBar.open(error, 'cerrar', {
      duration: 2000,
    });
  }
}
