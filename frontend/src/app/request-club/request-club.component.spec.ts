import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestClubComponent } from './request-club.component';

describe('RequestClubComponent', () => {
  let component: RequestClubComponent;
  let fixture: ComponentFixture<RequestClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
