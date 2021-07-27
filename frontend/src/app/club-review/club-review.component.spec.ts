import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubReviewComponent } from './club-review.component';

describe('ClubReviewComponent', () => {
  let component: ClubReviewComponent;
  let fixture: ComponentFixture<ClubReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
