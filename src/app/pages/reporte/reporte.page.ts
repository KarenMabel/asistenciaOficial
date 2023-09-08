import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ramos } from 'src/app/models/ramos';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {

  ramosArray:ramos[]=[];

  constructor(private router: Router) { }

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
        url:""
    },
    {
      id:"CSY4111",
      asignatura:"CALIDAD DE SOFTWARE",
      sala:"L4",
      profesor:"Guillermo Villacura",
      fecha:"",
      hora:0,
      url:"" 
    },
    {
      id:"MAT4140",
        asignatura:"ESTADISTICA DESCRIPTIVA",
        sala:"L3",
        profesor:"Claudio Sarmiento",
        fecha:"",
        hora:0,
        url:""
    }
    )
  }

  volver(){
    this.router.navigateByUrl("menu");
  }

}
