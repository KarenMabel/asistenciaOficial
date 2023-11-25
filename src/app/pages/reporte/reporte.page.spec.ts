import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportePage } from './reporte.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('ReportePage', () => {
  let component: ReportePage;
  let fixture: ComponentFixture<ReportePage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ReportePage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,],  
      providers: [ModalController],       
    });

    fixture = TestBed.createComponent(ReportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
