import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { StorageService } from 'src/app/services/storage.service';
import { ConfirmacionPage } from 'src/app/modal/confirmacion/confirmacion.page';
import { HelperService } from 'src/app/services/helper.service';
import { Asistencia } from 'src/app/models/asistencia';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  asistencia:Asistencia[]=[];

  constructor(private router:Router,
              private storage:StorageService,
              private helper: HelperService,
              private auth:AngularFireAuth
              ) { }

  

  ngOnInit() {
  }
  
  async scanear(){
    var scanQr = (await BarcodeScanner.scan()).code;
    const token = await this.auth.currentUser;
    if(scanQr){
      this.asistencia.push(JSON.parse(scanQr));
      if (token?.email) {
      this.asistencia[0].correo = token?.email;
        
      }
      const parametro = {dataQr:this.asistencia};
      await this.helper.showModal(ConfirmacionPage,parametro);
      console.log("11111",JSON.parse(scanQr));
    
    
    }

    
    
  }

  volver(){
    this.router.navigateByUrl("menu/:nombreUsuario");
  }

  confirmacion(){
    this.router.navigateByUrl("confirmacion");
  }

}
