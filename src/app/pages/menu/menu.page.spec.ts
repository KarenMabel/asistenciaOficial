import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPage } from './menu.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('MenuPage', () => {
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(() => {
    const activatedRouteStub = {
      snapshot: {
        params: {
          idempleado: 123,  
        },
      },
      paramMap: new BehaviorSubject({}),
    };


    TestBed.configureTestingModule({
      declarations: [MenuPage],  
      providers: [
        {provide: ActivatedRoute, useValue: activatedRouteStub},ModalController
      ],       
      imports:[ IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), 
        AngularFireAuthModule,],
      
    });
    
    fixture = TestBed.createComponent(MenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

   
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
