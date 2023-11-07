import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromeniLozinkuUComponent } from './promeni-lozinku-u.component';

describe('PromeniLozinkuUComponent', () => {
  let component: PromeniLozinkuUComponent;
  let fixture: ComponentFixture<PromeniLozinkuUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromeniLozinkuUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromeniLozinkuUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
