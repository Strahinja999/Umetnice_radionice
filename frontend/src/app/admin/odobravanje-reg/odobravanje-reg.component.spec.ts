import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdobravanjeRegComponent } from './odobravanje-reg.component';

describe('OdobravanjeRegComponent', () => {
  let component: OdobravanjeRegComponent;
  let fixture: ComponentFixture<OdobravanjeRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdobravanjeRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdobravanjeRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
