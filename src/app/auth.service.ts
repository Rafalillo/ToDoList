import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  APIURL = "http://localhost:7070/auth";
    userinfo: any;
 
  constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router) {} 

  get name(): string {
      return localStorage.getItem('nombre');
  }
  get identificado(): boolean{
      return !!localStorage.getItem('token');
  }

  login(logindata) {
    this.http.post(this.APIURL + '/login', logindata).subscribe(res => {
        console.log(res, logindata);
  });
  }

  logout() {
    localStorage.clear();
    }
   register(user) {
       delete user.cpassword;
        this.http.post(this.APIURL + '/register', user).subscribe(res =>{
            this.userinfo = res;
            localStorage.setItem('token', this.userinfo.token);
            localStorage.setItem('nombre', this.userinfo.nombre);
            this.router.navigate(['/']);
      }, error => {
        this.manejadorErrores('No se han podido obtener las tareas'); 
    });
    }

  private manejadorErrores(error) {
    this._snackBar.open(error, 'cerrar', {
      duration: 2000,
    });
  } 
}