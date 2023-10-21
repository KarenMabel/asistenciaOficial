import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { ramos } from 'src/app/models/ramos';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.page.html',
  styleUrls: ['./asignatura.page.scss'],
})
export class AsignaturaPage implements OnInit {

  ramosArray:ramos[]=[];

  constructor(private router:Router,
              private helper:HelperService,
              private auth: AngularFireAuth) { }

  ngOnInit() {
    this.infoRamos();
    
  }

  infoRamos(){
    this.ramosArray.push(
      {
        id:"ASY4131",
        asignatura:"ARQUITECTURA",
        sala:"L6",
        profesor:"Camilo Muñoz",
        fecha:"",
        hora:0,
        url:"/reporte",
        disable:true
    },
    {
      id:"CSY4111",
      asignatura:"CALIDAD DE SOFTWARE",
      sala:"L4",
      profesor:"Guillermo Villacura",
      fecha:"",
      hora:0,
      url:"/reporte",
      disable:true 
    },
    {
      id:"MAT4140",
        asignatura:"ESTADISTICA DESCRIPTIVA",
        sala:"L3",
        profesor:"Claudio Sarmiento",
        fecha:"",
        hora:0,
        url:"/reporte",
        disable:true
    }
    )
  }

  async cerrarSesion(){
    var salir = await this.helper.showConfirm("¿Desea cerrar sesión?","Salir","Cancelar");
    if(salir == true){
      await this.auth.signOut();
      this.router.navigateByUrl("login");
    }
  }

  volver(){
    this.router.navigateByUrl("menu");
  }

}
