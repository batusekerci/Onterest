import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubClubAdminProfileComponent } from './sub-club-admin-profile.component';

describe('SubClubAdminProfileComponent', () => {
  let component: SubClubAdminProfileComponent;
  let fixture: ComponentFixture<SubClubAdminProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubClubAdminProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubClubAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
