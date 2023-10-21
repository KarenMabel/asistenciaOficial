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
  loading:boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.infoRamos();
    setTimeout(()=> {this.loading = false},1000)
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
        url:"/reporte"
    },
    {
      id:"CSY4111",
      asignatura:"CALIDAD DE SOFTWARE",
      sala:"L4",
      profesor:"Guillermo Villacura",
      fecha:"",
      hora:0,
      url:"/reporte" 
    },
    {
      id:"MAT4140",
        asignatura:"ESTADISTICA DESCRIPTIVA",
        sala:"L3",
        profesor:"Claudio Sarmiento",
        fecha:"",
        hora:0,
        url:"/reporte"
    }
    )
  }

  volver(){
    this.router.navigateByUrl("menu/:nombreUsuario");
  }


}
