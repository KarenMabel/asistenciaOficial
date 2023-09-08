import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

  correo: string = "";


  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnRestablecer() {

    if(this.correo ==""){
      alert("Debe ingresar un correo válido.");
      return;
    }else{
      this.router.navigateByUrl('login');
    alert("te envíamos un correo electrónico");
    return;

    }

    

  }

}
