import { Injectable } from '@angular/core';
import { Login } from '../Model/login';
import { HttpClient } from '@angular/common/http';
import { Ingresar } from '../Model/ingresar';
import { Observable } from 'rxjs';
import { JsonIngreso } from '../Model/JsonIngreso';
import { CambiarContrasenaComponent } from '../cambiar-contrasena/cambiar-contrasena.component';
import { NuevaContrasena } from '../Model/NuevaContrasena';
import Swal from 'sweetalert2'

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
  errorLogin: string;
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

  errorIngresarLogin(error: string)
  {
    Swal.fire(
      {
        title: error,
        text: "",
        icon: "error"
      }
    );
  }

  errorIngresarCambiar(error: string, code: string)
  {
    if(code == "0000")
    {
      console.log("Exitoso entrada")
      Swal.fire(
        {
          title: error,
          text: "",
          icon: "success"
        }
      ); 
      console.log("Exitoso salida")
    }

    else
    {
      
      Swal.fire(
        {
          title: error,
          icon: "error"
        }
      ); 

    }

  }
/*
  almacenarError(error: string)
  {
    this.errorLogin=error;
  }
  */
}
