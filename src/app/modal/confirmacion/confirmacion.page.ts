import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { scan } from 'rxjs';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
})
export class ConfirmacionPage implements OnInit {

  @Input() dataQr:any[]=[];


  constructor(
              private modalController: ModalController,
              private storage:StorageService,
              private router:Router) { }

  ngOnInit() {
    this.storage.getAsistencia();
  }

  

 

  cerrarModal(){
    this.modalController.dismiss();
  }

  cerrar(){
    this.router.navigateByUrl("scan");
  }



  

}

