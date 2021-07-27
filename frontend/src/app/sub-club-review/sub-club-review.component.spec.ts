import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubClubReviewComponent } from './sub-club-review.component';

describe('SubClubReviewComponent', () => {
  let component: SubClubReviewComponent;
  let fixture: ComponentFixture<SubClubReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubClubReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubClubReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
