import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojaRadionicaDetaljiComponent } from './moja-radionica-detalji.component';

describe('MojaRadionicaDetaljiComponent', () => {
  let component: MojaRadionicaDetaljiComponent;
  let fixture: ComponentFixture<MojaRadionicaDetaljiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojaRadionicaDetaljiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojaRadionicaDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
