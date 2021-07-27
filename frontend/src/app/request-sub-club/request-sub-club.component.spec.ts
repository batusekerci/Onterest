import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSubClubComponent } from './request-sub-club.component';

describe('RequestSubClubComponent', () => {
  let component: RequestSubClubComponent;
  let fixture: ComponentFixture<RequestSubClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestSubClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestSubClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
