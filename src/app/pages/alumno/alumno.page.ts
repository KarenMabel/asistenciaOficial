import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  alumno:any;
  alumnoFiltro:any;
  latitude: number | undefined;
  longitude: number | undefined;

  constructor(private router:Router,
              private helper:HelperService,
              private storage:StorageService,
              private auth:AngularFireAuth) { }

  ngOnInit() {
    this.mostrarUsuario();
    this.geolocalizar();
  }

  async mostrarUsuario(){
    this.alumno = await this.storage.getUser();
    const tokenAlumno = await this.auth.currentUser;
    this.alumnoFiltro = this.alumno.filter((e: { correo:string; }) => e.correo == tokenAlumno?.email);
  }


  async geolocalizar(){
    
      const coordinates = await Geolocation.getCurrentPosition();
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
      
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
