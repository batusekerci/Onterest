import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScAdminReportManagementComponent } from './sc-admin-report-management.component';

describe('ScAdminReportManagementComponent', () => {
  let component: ScAdminReportManagementComponent;
  let fixture: ComponentFixture<ScAdminReportManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScAdminReportManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScAdminReportManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
