import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';

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


  constructor(private router: Router,
              private helper: HelperService,
              private auth: AngularFireAuth,
              private storage: StorageService) { }

  ngOnInit() {
  }

   async registrar() {

    if(this.rut == "") {
      await this.helper.showAlert("Debe ingresar un rut válido.", "información");
      return;
    }


    if(this.nombre == "") {
      await this.helper.showAlert("Debe ingresar su nombre.", "información");
      return;
    }

    if(this.apellido == "") {
      await this.helper.showAlert("Debe ingresar su apellido.","información");
      return;
    }

    if(this.correo == "") {
      await this.helper.showAlert("Debe ingresar un correo válido.", "información");
      return;
    }

    if(this.contrasena1 == "") {
      await this.helper.showAlert("Debe ingresar una contraseña.", "información");
      return;
    }

    if(this.contrasena2 == "") {
      await this.helper.showAlert("Debe confirmar su contraseña.","información");
      return;
    }

    if(this.contrasena1 !== this.contrasena2) {
      await this.helper.showAlert("Las contraseñas no coinciden.", "información");
      return;
    }

    var usuario = 
    [
      {
      rut: this.rut,
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      contrasena1: this.contrasena1,
      contrasena2: this.contrasena2
    }
      
    ]
    try {
      const req = await this.auth.createUserWithEmailAndPassword(this.correo, this.contrasena2);
      this.storage.keepUser(usuario);
      
      await this.router.navigateByUrl('login');
      await this.helper.showAlert("Usuario registrado", "Información");


    }catch (error:any) {

      if(error.code == 'auth/email-alredy-in-use'){
        await this.helper.showAlert("Correo ya registrado","Error");
      }

      if(error.code == 'auth/weak-password'){
        await this.helper.showAlert("La contraseña no alcanza el mínimo de caracteres requeridos","Error"); 
      }

      if(error.code == 'auth/invalid-email'){
        await this.helper.showAlert("El correo no es válido","Error");
      }

      if(error.code == 'Auth/user-not-found'){
        await this.helper.showAlert("Usuario no encontrado","Error");
      }

      if(error.code == 'auth/wrong-password'){
        await this.helper.showAlert("La contraseña ingresada no es válida","Error");
      }

    }
    return;
    
  }

  volver(){
    this.router.navigateByUrl("login");
    
}


}
