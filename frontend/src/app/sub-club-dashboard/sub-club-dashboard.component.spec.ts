import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubClubDashboardComponent } from './sub-club-dashboard.component';

describe('SubClubDashboardComponent', () => {
  let component: SubClubDashboardComponent;
  let fixture: ComponentFixture<SubClubDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubClubDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubClubDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
