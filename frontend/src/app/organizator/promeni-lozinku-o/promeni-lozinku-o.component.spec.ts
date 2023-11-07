import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromeniLozinkuOComponent } from './promeni-lozinku-o.component';

describe('PromeniLozinkuOComponent', () => {
  let component: PromeniLozinkuOComponent;
  let fixture: ComponentFixture<PromeniLozinkuOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromeniLozinkuOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromeniLozinkuOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
