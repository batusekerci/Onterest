import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubClubComponent } from './sub-club.component';

describe('SubClubComponent', () => {
  let component: SubClubComponent;
  let fixture: ComponentFixture<SubClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
