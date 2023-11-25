import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoadingController } from '@ionic/angular';

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
              private auth: AngularFireAuth,
              private loaderController:LoadingController) { }

  ngOnInit() {
  }

  async Login() {

    const loader = await this.helper.showLoader("Cargando");

    if(this.usuario == "") {
      await loader.dismiss();
      await this.helper.showAlert("Debe ingresar usuario.", "información");
      return;
    }

    if(this.contrasena == "") {
      await loader.dismiss();
      await this.helper.showAlert("Debe ingresar contraseña.", "información");
      return;
    }

    try{
      const req = await this.auth.signInWithEmailAndPassword(this.usuario,this.contrasena);
      await this.router.navigateByUrl('menu/'+this.usuario);
      await loader.dismiss();
    }catch(error:any) {
      
      

      if(error.code == 'auth/email-alredy-in-use'){
        await loader.dismiss();
        await this.helper.showAlert("Correo ya registrado","Error");
        
      }

      if(error.code == 'auth/weak-password'){
        await loader.dismiss();
        await this.helper.showAlert("La contraseña no alcanza el mínimo de caracteres requeridos","Error"); 
      }

      if(error.code == 'auth/invalid-email'){
        await loader.dismiss();
        await this.helper.showAlert("El correo no es válido","Error");
      }

      if(error.code == 'auth/user-not-found'){
        await loader.dismiss();
        await this.helper.showAlert("Usuario no encontrado","Error");
       
      }

      if(error.code == 'auth/wrong-password'){
        await loader.dismiss();
        await this.helper.showAlert("La contraseña ingresada no es válida","Error");
      }
      return;
    }
  

  }

  async restablecerContrasena() {
    await this.router.navigateByUrl('restablecer');
    return;
  }

  async registrar() {
    await this.router.navigateByUrl('registrar');
    return;
  }

}
