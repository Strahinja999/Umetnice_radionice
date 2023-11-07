import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioniceComponent } from './radionice.component';

describe('RadioniceComponent', () => {
  let component: RadioniceComponent;
  let fixture: ComponentFixture<RadioniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioniceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
