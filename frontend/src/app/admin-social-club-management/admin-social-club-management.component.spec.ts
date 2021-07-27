import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSocialClubManagementComponent } from './admin-social-club-management.component';

describe('AdminSocialClubManagementComponent', () => {
  let component: AdminSocialClubManagementComponent;
  let fixture: ComponentFixture<AdminSocialClubManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSocialClubManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSocialClubManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
