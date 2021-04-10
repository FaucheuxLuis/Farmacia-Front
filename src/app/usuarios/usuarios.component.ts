import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(private LoginServiceInyectado: LoginService) { }

  ngOnInit(): void {
    console.log(this.LoginServiceInyectado.ingreso.username)
     
  }

}
