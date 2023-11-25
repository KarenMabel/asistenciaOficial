import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionPage } from './confirmacion.page';
import { IonicModule, ModalController } from '@ionic/angular';

describe('ConfirmacionPage', () => {
  let component: ConfirmacionPage;
  let fixture: ComponentFixture<ConfirmacionPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()], 
      providers: [ModalController], 
    });
    fixture = TestBed.createComponent(ConfirmacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
