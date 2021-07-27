import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialClubManagementComponent } from './social-club-management.component';

describe('SocialClubManagementComponent', () => {
  let component: SocialClubManagementComponent;
  let fixture: ComponentFixture<SocialClubManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialClubManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialClubManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
