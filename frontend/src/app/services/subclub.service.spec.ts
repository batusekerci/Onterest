import { TestBed } from '@angular/core/testing';

import { SubclubService } from './subclub.service';

describe('SubclubService', () => {
  let service: SubclubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubclubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
