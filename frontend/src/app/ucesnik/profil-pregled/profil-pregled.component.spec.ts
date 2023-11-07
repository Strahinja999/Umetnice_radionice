import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPregledComponent } from './profil-pregled.component';

describe('ProfilPregledComponent', () => {
  let component: ProfilPregledComponent;
  let fixture: ComponentFixture<ProfilPregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilPregledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
