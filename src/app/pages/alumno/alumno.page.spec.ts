import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoPage } from './alumno.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('AlumnoPage', () => {
  let component: AlumnoPage;
  let fixture: ComponentFixture<AlumnoPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [AlumnoPage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,],
    })
    fixture = TestBed.createComponent(AlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
