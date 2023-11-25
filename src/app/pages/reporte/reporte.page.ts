import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {

  alumnoFiltro:any;
  alumno:any;
  usuario: any;
  asistencia:any;
  loading:boolean = true;


  constructor(private router: Router,
              private storage:StorageService,
              private auth:AngularFireAuth) { }

  ngOnInit() {
    this.infoRamos();
    
    
    
    setTimeout(()=> {this.loading = false},1000)
  }

  async infoRamos(){
   this.asistencia = await this.storage.getAsistencia();
   this.alumno = await this.storage.getUser();
   const tokenAlumno = await this.auth.currentUser;
   var alumnoFiltro = await this.alumno.filter((e: { correo:string; }) => e.correo == tokenAlumno?.email);
   if (alumnoFiltro == this.auth.currentUser) {
     await this.storage.getAsistencia();
     return;
  }  

  }

  volver(){
    this.router.navigateByUrl("menu/:nombreUsuario");
  }


}
