import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.page.html',
  styleUrls: ['./confirmacion.page.scss'],
})
export class ConfirmacionPage implements OnInit {

  @Input() dataQr:any[]=[];
  datos:any[]=[];
  public correoUsuario : string ="";
  

  
  constructor(
              private modalController: ModalController,
              private storage:StorageService,
              private helper:HelperService,
              private router:Router) { }

  ngOnInit() {
    this.confirmar();
  
  } 

  async confirmar(){

    var confirmar = await this.helper.showConfirm("¿Desea registrar asistencia?","Aceptar","Cancelar");
    if(confirmar == true){
      await this.storage.keepAsistencia(this.dataQr);
      await this.helper.showAlert("Asistencia registrada correctamente","Mensaje");
      this.modalController.dismiss();
      return;
    }else{
      this.modalController.dismiss();
      return;
    }

  }
  


  cerrarModal(){
    this.modalController.dismiss();
  }

}
