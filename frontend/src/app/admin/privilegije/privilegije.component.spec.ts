import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegijeComponent } from './privilegije.component';

describe('PrivilegijeComponent', () => {
  let component: PrivilegijeComponent;
  let fixture: ComponentFixture<PrivilegijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivilegijeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivilegijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
