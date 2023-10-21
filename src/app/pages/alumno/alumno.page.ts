import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  parametroAlumno:string | undefined;
  alumno:any;
  alumnoFiltro:any;
  

  constructor(private router:Router,
              private helper:HelperService,
              private storage:StorageService,
              private auth:AngularFireAuth) { }

  ngOnInit() {
    this.mostrarUsuario();

  }

  async mostrarUsuario(){
    this.alumno = await this.storage.getUser();
    var tokenAlumno = await this.auth.currentUser;
    this.alumnoFiltro = this.alumno.filter((e: { correo:string; }) => e.correo == tokenAlumno?.email);
    
  }

  

  volver(){
    this.router.navigateByUrl("menu/:nombreUsuario");
  }

  async cerrarSesion(){
    var salir = await this.helper.showConfirm("¿Desea cerrar sesión?","Salir","Cancelar");
    if(salir == true){
      await this.auth.signOut();
      this.router.navigateByUrl("login");
    }

}
}
