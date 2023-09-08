import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  volver(){
    this.router.navigateByUrl("menu");
  }

  confirmacion(){
    this.router.navigateByUrl("confirmacion");
  }

}
