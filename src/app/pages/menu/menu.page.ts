import { Component,ElementRef,OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  @ViewChildren(IonCard, { read: ElementRef })
  cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  private animation!: Animation;

  loading:boolean = true;
  usuario: string="";



  constructor(private router: Router,
              private animationCtrl: AnimationController,
              private helper:HelperService,
              private activated:ActivatedRoute,
              private auth:AngularFireAuth) { }

  ngOnInit() {
    this.usuario=this.activated.snapshot.params["nombreUsuario"];
    
  }

  ionViewWillEnter(){
    this.play();
        
  }

  ngAfterViewInit() {
   
    
    const card = this.animationCtrl
    .create()
    .addElement(document.querySelectorAll("ion-card"))
    .duration(2000)
    .beforeStyles({
      filter: 'invert(75%)',
    })
    .beforeClearStyles(['box-shadow'])
    .afterStyles({
      'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px',
    })
    .afterClearStyles(['filter'])
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.5)' },
      { offset: 1, transform: 'scale(1)' },
      
    ]);
  

  this.animation = this.animationCtrl.create().duration(2000).addAnimation([card]);
}

  play() {
  this.animation.play();
}

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }

  async cerrarSesion(){
    var salir = await this.helper.showConfirm("¿Desea cerrar sesión?","Salir","Cancelar");
    if(salir == true){
      await this.auth.signOut();
      this.router.navigateByUrl("login");
    }
  
  }

  scan(){
    this.router.navigateByUrl("scan");
  }

  reporte(){
    this.router.navigateByUrl("reporte");

  }

  alumno(){
    this.router.navigateByUrl("alumno");
  }



 




}





