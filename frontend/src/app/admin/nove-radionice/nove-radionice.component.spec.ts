import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoveRadioniceComponent } from './nove-radionice.component';

describe('NoveRadioniceComponent', () => {
  let component: NoveRadioniceComponent;
  let fixture: ComponentFixture<NoveRadioniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoveRadioniceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoveRadioniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
