import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioniceOrganizatorComponent } from './radionice-organizator.component';

describe('RadioniceOrganizatorComponent', () => {
  let component: RadioniceOrganizatorComponent;
  let fixture: ComponentFixture<RadioniceOrganizatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioniceOrganizatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioniceOrganizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
