import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OntryPageComponent } from './ontry-page.component';

describe('OntryPageComponent', () => {
  let component: OntryPageComponent;
  let fixture: ComponentFixture<OntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OntryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
