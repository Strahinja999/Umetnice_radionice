import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioniceAdminComponent } from './radionice-admin.component';

describe('RadioniceAdminComponent', () => {
  let component: RadioniceAdminComponent;
  let fixture: ComponentFixture<RadioniceAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioniceAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioniceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
