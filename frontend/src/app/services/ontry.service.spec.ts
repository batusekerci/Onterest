import { TestBed } from '@angular/core/testing';

import { OntryService } from './ontry.service';

describe('OntryService', () => {
  let service: OntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
