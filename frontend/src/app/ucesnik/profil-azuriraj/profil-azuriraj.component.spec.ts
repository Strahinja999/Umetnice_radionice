import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAzurirajComponent } from './profil-azuriraj.component';

describe('ProfilAzurirajComponent', () => {
  let component: ProfilAzurirajComponent;
  let fixture: ComponentFixture<ProfilAzurirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilAzurirajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilAzurirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
