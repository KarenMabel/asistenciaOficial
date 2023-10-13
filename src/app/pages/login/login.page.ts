import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = "";
  contrasena: string = "";

  constructor(private router: Router,
              private helper: HelperService,
              private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  async Login() {

    if(this.usuario == "") {
      await this.helper.showAlert("Debe ingresar usuario.", "información");
      return;
    }

    if(this.contrasena == "") {
      await this.helper.showAlert("Debe ingresar contraseña.", "información");
      return;
    }

    //if(this.usuario == "pgy4121-001d" && this.contrasena == "pgy4121-001d") {
      //this.router.navigateByUrl('menu/'+ this.usuario);
    //}else{
      //await this.helper.showAlert("Usuario o contraseña inconrrectos.", "información")
    //}
    try{
      const req = await this.auth.signInWithEmailAndPassword(this.usuario,this.contrasena);
      await this.router.navigateByUrl('menu/'+this.usuario);

    }catch(error:any) {

    if(error.code == 'auth/invalid-email'){
      await this.helper.showAlert("Correo invalido","Error")
    }

    if(error.code == 'auth/invalid-password'){
      await this.helper.showAlert("contraseña incorrecta","Error")
    }

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
