import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { StorageService } from 'src/app/services/storage.service';
import { ConfirmacionPage } from 'src/app/modal/confirmacion/confirmacion.page';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private router:Router,
              private storage:StorageService,
              private helper: HelperService
              ) { }

  

  ngOnInit() {
  }
  
  async scanear(){
    var scanQr = (await BarcodeScanner.scan()).code;
    if(scanQr){
    await this.storage.keepAsistencia(JSON.parse(scanQr));
    }

    const paramatro = {dataQr:scanQr};
    await this.helper.showModal(ConfirmacionPage,paramatro);
  }

  volver(){
    this.router.navigateByUrl("menu/:nombreUsuario");
  }

  confirmacion(){
    this.router.navigateByUrl("confirmacion");
  }

}
