import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  APIURL = "http://localhost:7070/api";

  tareas: any;
  respuesta: any;
  tareasSujeto = new Subject();

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.tareas = [];
    this.getTask('');
  }

   getTask(username) {
      username = (username) ? '/' + username : '';
      this.http.get(this.APIURL + '/tareas' + username).subscribe(res =>{
        this.tareas = res;
        this.tareasSujeto.next(this.tareas);
      }, error => {
        this.manejadorErrores('No se han podido obtener las tareas');
      
    });
    
    
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
