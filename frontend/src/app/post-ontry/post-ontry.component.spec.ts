import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOntryComponent } from './post-ontry.component';

describe('PostOntryComponent', () => {
  let component: PostOntryComponent;
  let fixture: ComponentFixture<PostOntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostOntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
