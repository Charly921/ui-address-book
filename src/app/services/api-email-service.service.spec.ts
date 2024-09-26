import { TestBed } from '@angular/core/testing';

import { ApiEmailServiceService } from './api-email-service.service';

describe('ApiEmailServiceService', () => {
  let service: ApiEmailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEmailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
