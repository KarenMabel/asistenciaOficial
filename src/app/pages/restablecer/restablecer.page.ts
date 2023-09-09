import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  correo: string = "";


  constructor(private router: Router,
              private helper: HelperService) { }

  ngOnInit() {
  }

  async btnRestablecer() {

    if(this.correo ==""){
      alert("Debe ingresar un correo válido.");
      return;
    }else{
      this.router.navigateByUrl('login');
    await this.helper.showAlert("te envíamos un correo electrónico", "infomación");
    return;

    }

    

  }

}
