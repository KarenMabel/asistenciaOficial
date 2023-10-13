import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  //parametroAlumno:string | undefined;
  alumno:any;
  alumnoFiltro:any;
  

  constructor(private router:Router,
              private helper:HelperService,
              private storage:StorageService) { }

  ngOnInit() {
   

  }

  async mostrarUsuario(){
    this.alumno = await this.storage.getUser();
    this.alumnoFiltro = await this.alumno.filter((e: { correo:string; }) => e.correo == this.storage.correoUsuario);
    
  }

  

  volver(){
    this.router.navigateByUrl("menu");
  }

  async cerrarSesion(){
    var salir = await this.helper.showConfirm("¿Desea cerrar sesión?","Salir","Cancelar");
    if(salir == true){
      this.router.navigateByUrl("login");
    }

}
}
