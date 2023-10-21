import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';
import { LoadingController } from '@ionic/angular';
import { Region } from 'src/app/models/region';
import { Comuna } from 'src/app/models/comuna';
import { LocationService } from 'src/app/services/location.service';


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

  regiones:Region [] = [];
  comunas: Comuna [] = [];
  seleComuna:number = 0;
  seleRegion:number = 0;

  disabledComuna:boolean = true;


  constructor(private router: Router,
              private helper: HelperService,
              private auth: AngularFireAuth,
              private storage: StorageService,
              private loaderController:LoadingController,
              private locationServices:LocationService) { }

  ngOnInit() {
    this.mostrarRegion();
  }

  async mostrarRegion(){
    const reque = await this.locationServices.obtenerRegion();
     this.regiones = reque.data;
   }

   async mostrarComuna(){
     try{
       const reque = await this.locationServices.obtenerComuna(this.seleRegion);
       this.comunas = reque.data;
       this.disabledComuna = false;
    }catch(error:any){
       await this.helper.showAlert(".","Error");
     }
  }

   async registrar() {


    if(this.rut == "") {
      await this.helper.showAlert("Debe ingresar un rut válido.", "información");
      return;
    }


    if(this.nombre == "") {
      await this.helper.showAlert("Debe ingresar su nombre válido.", "información");
      return;
    }

    if(this.apellido == "") {
      await this.helper.showAlert("Debe ingresar su apellido válido.","información");
      return;
    }

    if(this.correo == "") {
      await this.helper.showAlert("Debe ingresar un correo válido.", "información");
      return;
    }

    if(this.contrasena1 == "" ) {
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
      contrasena2: this.contrasena2,
      comuna: this.seleComuna,
      region: this.seleRegion
    }
      
    ]
    try {
      const req = await this.auth.createUserWithEmailAndPassword(this.correo, this.contrasena2);
      this.storage.keepUser(usuario);
      
      await this.router.navigateByUrl('login');
      await this.helper.showAlert("Usuario registrado", "Información");


    }catch (error:any) {

      if(error.code == 'auth/email-alredy-in-use'){
        await this.loaderController.dismiss();
        await this.helper.showAlert("Correo ya registrado","Error");
      }

      if(error.code == 'auth/weak-password'){
        await this.loaderController.dismiss();
        await this.helper.showAlert("La contraseña no alcanza el mínimo de caracteres requeridos","Error"); 
      }

      if(error.code == 'auth/invalid-email'){
        await this.loaderController.dismiss();
        await this.helper.showAlert("El correo no es válido","Error");
      }

      if(error.code == 'Auth/user-not-found'){
        await this.loaderController.dismiss();
        await this.helper.showAlert("Usuario no encontrado","Error");
      }

      if(error.code == 'auth/wrong-password'){
        await this.loaderController.dismiss();
        await this.helper.showAlert("La contraseña ingresada no es válida","Error");
      }

    }
    return;
    
  }


  volver(){
    this.router.navigateByUrl("login");
    
}


}
