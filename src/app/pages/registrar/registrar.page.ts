import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  rut: string = "";
  nombre: string ="";
  apellido: string ="";
  correo: string ="";
  contrasena1 : string ="";
  contrasena2 : string ="";


  constructor(private router: Router) { }

  ngOnInit() {
  }

  registrar() {

    if(this.rut == "") {
      alert("Debe ingresar un rut válido.");
      return;
    }


    if(this.nombre == "") {
      alert("Debe ingresar su nombre.");
      return;
    }

    if(this.apellido == "") {
      alert("Debe ingresar su apellido.");
      return;
    }

    if(this.correo == "") {
      alert("Debe ingresar un correo válido.");
      return;
    }

    if(this.contrasena1 == "") {
      alert("Debe ingresar una contraseña.");
      return;
    }

    if(this.contrasena2 == "") {
      alert("Debe confirmar su contraseña.");
      return;
    }

    if(this.contrasena1 !== this.contrasena2) {
      alert("Las contraseñas no coinciden.");
      return;
    }else{
      alert("Usuario ingresado correctamente.")
    }

    this.router.navigateByUrl('login');
    return;
  }
}


