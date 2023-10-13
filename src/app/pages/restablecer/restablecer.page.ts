import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  correo: string = "";


  constructor(private router: Router,
              private helper: HelperService,
              private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  async btnRestablecer() {

    if(this.correo ==""){
      await this.helper.showAlert("Debe ingresar un correo válido.", "información");
      return;
    //}else{
      //this.router.navigateByUrl('login');
    //await this.helper.showAlert("te envíamos un correo electrónico", "infomación");
    //return;

    }try {
      await this.auth.sendPasswordResetEmail(this.correo);
      await this.helper.showAlert("Te enviamos un correo electronico","Información");
    }catch(error:any){
      if(error.code == 'auth/invalid-email')
      await this.helper.showAlert("Correo inválido, por favor intente nuevamente","Error");

    }

    

  }
  volver(){
    this.router.navigateByUrl("login");
}

}
