import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecerPage } from './restablecer.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('RestablecerPage', () => {
  let component: RestablecerPage;
  let fixture: ComponentFixture<RestablecerPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [RestablecerPage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,],  
      providers: [ModalController],      
    });

    fixture = TestBed.createComponent(RestablecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
