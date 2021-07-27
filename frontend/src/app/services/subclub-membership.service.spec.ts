import { TestBed } from '@angular/core/testing';

import { SubclubMembershipService } from './subclub-membership.service';

describe('SubclubMembershipService', () => {
  let service: SubclubMembershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubclubMembershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
