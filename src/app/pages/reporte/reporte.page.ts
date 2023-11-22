import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {

  asistencia:any;
  loading:boolean = true;

  constructor(private router: Router,
              private storage:StorageService) { }

  ngOnInit() {
    this.infoRamos();
    
    setTimeout(()=> {this.loading = false},1000)
  }

  async infoRamos(){
   this.asistencia = await this.storage.getAsistencia();
    
  }

  volver(){
    this.router.navigateByUrl("menu/:nombreUsuario");
  }


}
