import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { JsonIngreso } from '../Model/JsonIngreso';
import { Ingresar } from '../Model/ingresar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulos',
  templateUrl: './titulos.component.html',
  styleUrls: ['./titulos.component.scss']
})
export class TitulosComponent implements OnInit {

  jsoningreso: JsonIngreso = new JsonIngreso();
  formularioLogin: FormGroup;
  ingresar: Ingresar = new Ingresar();
  nombre: string = 'Haruna';

  constructor(private LoginServiceInyectado: LoginService, private fbGenerador: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // console.log(this.LoginServiceInyectado.ingreso.username)
    this.formularioLogin = this.fbGenerador.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    })

    //this.formularioLogin.reset

    /*
        let ingresar: Ingresar = new Ingresar();
        ingresar.username="anderesco94@gmail.com";
        ingresar.password = "Prueba123#";
    */
    /*
        this.LoginServiceInyectado.ingresar(ingresar).subscribe((JsonIngreso)=>{
          
          this.jsoningreso = JsonIngreso;
          
        })
    */
  }

  enviarLogin() {

    this.ingresar = this.formularioLogin.value as Ingresar;

    this.LoginServiceInyectado.ingresar(this.ingresar).subscribe((JsonIngreso) => {
      console.log(JsonIngreso);
      console.log(JsonIngreso.data);
      console.log(JsonIngreso.data.ChallengeName);
      console.log(JsonIngreso.data.Session);
      console.log(JsonIngreso.data.ChallengeParameters);
      console.log(JsonIngreso.data.ChallengeParameters.USER_ID_FOR_SRP);
      console.log(JsonIngreso.data.AuthenticationResult);
      //console.log(JsonIngreso.data.AuthenticationResult.IdToken);

      console.log("Primero")

      console.log("Segundo")
      if (JsonIngreso.code == "0000") {
        if (JsonIngreso.data.ChallengeName == 'NEW_PASSWORD_REQUIRED') {
          console.log("Requerido")
          this.LoginServiceInyectado.AlmacenarSesion(JsonIngreso.data.Session, JsonIngreso.data.ChallengeParameters.USER_ID_FOR_SRP);
          this.router.navigate(['CambiarContrasena']);

        }
        else {
          console.log("Entra")
          this.router.navigate(['usuarios']);
        }
      }
    }, error => alert(error.error.message)



    )
  }


  public handleError(error: Response) {
    console.error(error);

  }
}
