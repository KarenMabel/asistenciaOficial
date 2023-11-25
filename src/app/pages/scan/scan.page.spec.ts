import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanPage } from './scan.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

describe('ScanPage', () => {
  let component: ScanPage;
  let fixture: ComponentFixture<ScanPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ScanPage],
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), 
      AngularFireAuthModule,], 
      providers: [ModalController],      
    });

    fixture = TestBed.createComponent(ScanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
