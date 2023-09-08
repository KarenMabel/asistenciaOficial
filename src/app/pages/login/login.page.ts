import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = "";
  contrasena: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Login() {

    if(this.usuario == "") {
      alert("Debe ingresar usuario.");
      return;
    }

    if(this.contrasena == "") {
      alert("Debe ingresar contraseña.");
      return;
    }

    if(this.usuario == "pgy4121-001d" && this.contrasena == "pgy4121-001d") {
      this.router.navigateByUrl('menu');
    }else{
      alert("Usuario o contraseña inconrrectos.")
    }

  }

  restablecerContrasena() {
    this.router.navigateByUrl('restablecer');
    return;
  }

  registrar() {
    this.router.navigateByUrl('registrar');
    return;
  }

}
