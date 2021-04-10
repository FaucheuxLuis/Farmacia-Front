import { Injectable } from '@angular/core';
import { Login } from '../Model/login';
import { HttpClient } from '@angular/common/http';
import { Ingresar } from '../Model/ingresar';
import { Observable } from 'rxjs';
import { JsonIngreso } from '../Model/JsonIngreso';
import { CambiarContrasenaComponent } from '../cambiar-contrasena/cambiar-contrasena.component';
import { NuevaContrasena } from '../Model/NuevaContrasena';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //login: Login = new Login();
  ingreso: Ingresar = new Ingresar();

  //ruta: string = 'https://dfmyd58eek.execute-api.us-east-1.amazonaws.com/Prod/token'
  //ruta: string = 'https://4d6hnapywl.execute-api.us-east-1.amazonaws.com/dev/token';
  ruta: string = 'https://afvnuqwzn8.execute-api.us-east-1.amazonaws.com/dev/token';
  rutaCambio: string = 'https://afvnuqwzn8.execute-api.us-east-1.amazonaws.com/dev/password/update';
  
  /*
  constructor(private http: HttpClient) {
    /* 
    this.login.accessToken = "Hola";
    this.login.expiresIn = 3600,
    this.login.TokenType = "",
    this.login.RefreshToken = "",
    this.login.IdToken = ""
  
  }
*/
  session: string;
  username: string;

  constructor(private http: HttpClient) {
    this.ingreso.username = "anderesco94@gmail.com";
    this.ingreso.password = "Prueba123#"
  }

  ingresar(ingresar: Ingresar) : Observable<JsonIngreso>
  {
    console.log(this.ruta)
    return this.http.post<JsonIngreso>(this.ruta,ingresar)
    
  }

  cambiar(nuevo: NuevaContrasena) : Observable<JsonIngreso>
  {
    console.log("antes put")
    return this.http.put<JsonIngreso>(this.rutaCambio,nuevo)
  }

  AlmacenarSesion(session,username)
  {
    this.session= session;
    this.username = username;
  }

}
