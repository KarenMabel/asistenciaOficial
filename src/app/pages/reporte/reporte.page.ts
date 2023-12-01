import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
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
              private auth:AngularFireAuth,
              private helper:HelperService) { }

  ngOnInit() {
    this.infoRamos();
    this.storage.getAsistencia();
    
    
    
    
    
    setTimeout(()=> {this.loading = false},1000)
  }

  async infoRamos(){
   this.asistencia = await this.storage.getAsistencia();
   if (this.asistencia == "") {
      await this.helper.showAlert("Usted no ha registrado asistencias","Mensaje");
      return;
    }

  }

  volver(){
    this.router.navigateByUrl("menu/:nombreUsuario");
  }


}
