import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';
import { JsonIngreso } from '../Model/JsonIngreso';
import { Ingresar } from '../Model/ingresar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { NuevaContrasena } from '../Model/NuevaContrasena';


@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.component.html',
  styleUrls: ['./cambiar-contrasena.component.scss']
})
export class CambiarContrasenaComponent implements OnInit {

  formularioCambiarContrasena: FormGroup;
  cambiar: NuevaContrasena = new NuevaContrasena();
  nombre: string = 'Luis';

  constructor(private LoginServiceInyectado: LoginService, private fbGenerador: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.formularioCambiarContrasena= this.fbGenerador.group({
      password: ['', Validators.required],
      repassword: ['', Validators.required]

    }) 

  }

  cambiarContrasena()
  {
    this.cambiar = this.formularioCambiarContrasena.value  as NuevaContrasena;
    this.cambiar.session = this.LoginServiceInyectado.session;
    this.cambiar.username = this.LoginServiceInyectado.username;
    console.log(this.cambiar);
    debugger
    this.LoginServiceInyectado.cambiar(this.cambiar).subscribe((JsonIngreso)=>
    {
      console.log(JsonIngreso.message);

    })
    
    
  }
}
